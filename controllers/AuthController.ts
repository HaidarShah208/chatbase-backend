import Joi from "joi";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyOtpAndResetPassword,
  sendForgetOtp,
} from "../services/authServices";
import validator from "../utils/Validator";

export const register = asyncHandler(
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: ApiResponse): any; new (): any };
      };
    }
  ) => {
    const registerSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords do not match",
      }),
    });

    const error = await validator(registerSchema, req.body);
    if (error) {
      throw new ApiError(400, error);
    }

    const result = await registerUser(req.body);

    return res
      .status(201)
      .json(new ApiResponse(200, result, "User registered successfully"));
  }
);

export const login = asyncHandler(
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: ApiResponse): any; new (): any };
      };
    }
  ) => {
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const error = await validator(loginSchema, req.body);
    if (error) {
      throw new ApiError(400, error);
    }

    const result = await loginUser(req.body);

    return res
      .status(201)
      .json(new ApiResponse(200, result, "User logged in successfully"));
  }
);

export const logout = asyncHandler(
  async (
    req: { token: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: ApiResponse): any; new (): any };
      };
    }
  ) => {
    await logoutUser(req.token);

    return res
      .status(201)
      .json(new ApiResponse(200, null, "User logged out successfully"));
  }
);

export const forgetPassword = asyncHandler(
  async (
    req: { body: { email: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: ApiResponse): any; new (): any };
      };
    }
  ) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });

    const error = await validator(schema, req.body);
    if (error) throw new ApiError(400, error);

    await sendForgetOtp(req.body.email);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "OTP sent to email"));
  }
);

export const resetPassword = asyncHandler(
  async (
    req: { body: { email: any; code: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: ApiResponse): any; new (): any };
      };
    }
  ) => {
    const resetSchema = Joi.object({
      email: Joi.string().email().required(),
      code: Joi.number().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords do not match",
      }),
    });

    const error = await validator(resetSchema, req.body);
    if (error) {
      throw new ApiError(400, error);
    }

    const { email, code, password } = req.body;

    await verifyOtpAndResetPassword({ email, code, password });

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Password reset successful"));
  }
);
