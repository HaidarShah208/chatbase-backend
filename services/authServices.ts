import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment";
import randomNumber from "../utils/randomNumber";
import sendEmail from "../utils/email";
import { ApiError } from "../utils/ApiError";
import { AppDataSource } from "../config/database";
import { User } from "../models/user";
import { AuthToken } from "../models/AuthToken";

const sanitizeUser = (user: User) => {
  const { password, ...cleanUser } = user.get({ plain: true });
  return cleanUser;
};

const userRepository = AppDataSource.getRepository(User);
const authTokenRepository = AppDataSource.getRepository(AuthToken);

export const registerUser = async ({ name, email, password }: any) => {
  const existingUser = await userRepository.findOne({
    where: { email },
  });

  if (existingUser) {
    throw new ApiError(400, "Email already in use");
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = await userRepository.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY!, {
    expiresIn: "40d",
  });

  const newToken = authTokenRepository.create({ userId: newUser.id, token });
  await authTokenRepository.save(newToken);

  return { user: sanitizeUser(newUser), token };
};

export const loginUser = async ({ email, password, attempt }: any) => {
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    throw new ApiError(400, "Invalid credentials");
  }

  if (attempt > 5) {
    await userRepository.update(
      { email },
      { status: "block", blockUntil: moment().add(24, "hours").toDate() }
    );
    throw new ApiError(403, "You are blocked for 24 hours. Try again later.");
  }

  if (user.status === "block") {
    throw new ApiError(403, "You are currently blocked");
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid credentials");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY!, {
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

  const code = randomNumber(1000, 9999);
  user.code = code;
  await userRepository.save(user);

  await sendEmail({
    to: email,
    subject: "Reset your password",
    text: `Your OTP code is ${code}`,
  });
};

export const verifyOtpAndResetPassword = async ({
  email,
  code,
  password,
}: any) => {
  const user = await userRepository.findOne({ where: { email, code } });

  if (!user) throw new ApiError(400, "Incorrect OTP or email");

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  user.password = hashedPassword;
  user.code = undefined;
  await userRepository.save(user);
};
