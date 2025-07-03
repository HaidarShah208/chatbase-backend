import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import randomNumber from "../utils/randomNumber";
import sendEmail from "../utils/email";
import { ApiError } from "../utils/ApiError";
import { AppDataSource } from "../config/database";
import { User } from "../models/User";
import { AuthToken } from "../models/AuthToken";
import { OTP } from "../models/OTP";
import * as dotenv from "dotenv";

dotenv.config();
const sanitizeUser = (user: User) => {
  const { password, ...cleanUser } = user;
  return cleanUser;
};

const userRepository = AppDataSource.getRepository(User);
const authTokenRepository = AppDataSource.getRepository(AuthToken);
const otpRepository = AppDataSource.getRepository(OTP);

export const registerUser = async ({ name, email, password }: any) => {
  const existingUser = await userRepository.findOne({
    where: { email },
  });

  if (existingUser) {
    throw new ApiError(400, "Email already in use");
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
  });

  const savedUser = await userRepository.save(newUser);

  if (!process.env.JWT_SECRET_KEY) {
    throw new ApiError(500, "JWT secret key not configured");
  }

  const token = jwt.sign({ id: savedUser.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "40d",
  });

  const newToken = authTokenRepository.create({ userId: savedUser.id, token });
  await authTokenRepository.save(newToken);

  return { user: sanitizeUser(savedUser), token };
};

export const loginUser = async ({ email, password }: any) => {
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    throw new ApiError(400, "Invalid credentials");
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid credentials");
  }

  if (!process.env.JWT_SECRET_KEY) {
    throw new ApiError(500, "JWT secret key not configured");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "40d",
  });

  const newToken = authTokenRepository.create({ userId: user.id, token });
  await authTokenRepository.save(newToken);

  return { token, user: sanitizeUser(user) };
};

export const logoutUser = async (token: any) => {
  await authTokenRepository.delete({ token });
};

export const sendForgetOtp = async (email: any) => {
  const user = await userRepository.findOne({ where: { email } });
  if (!user) throw new ApiError(404, "User not found");

  const code = randomNumber(1000, 9999).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await otpRepository.update({ email, isUsed: false }, { isUsed: true });

  const otp = otpRepository.create({
    email,
    code,
    isUsed: false,
    expiresAt,
  });
  await otpRepository.save(otp);

  await sendEmail({
    to: email,
    subject: "Reset your password",
    text: `Your OTP code is ${code}. It will expire in 10 minutes.`,
  });
};

export const verifyOtpAndResetPassword = async ({
  email,
  code,
  password,
}: any) => {
  const user = await userRepository.findOne({ where: { email } });
  if (!user) throw new ApiError(400, "Incorrect email");

  const otp = await otpRepository.findOne({
    where: { email, code, isUsed: false },
    order: { createdAt: "DESC" },
  });
  if (!otp) throw new ApiError(400, "Invalid or expired OTP");
  if (otp.expiresAt < new Date()) throw new ApiError(400, "OTP has expired");

  otp.isUsed = true;
  await otpRepository.save(otp);

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  user.password = hashedPassword;
  await userRepository.save(user);
};
