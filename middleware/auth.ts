import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { AppDataSource } from "../config/database";
import { AuthToken } from "../models/AuthToken";
import * as dotenv from "dotenv";

dotenv.config();
const authTokenRepository = AppDataSource.getRepository(AuthToken);


export const auth = asyncHandler(
  async (
    req: {
      cookies: { accessToken: any };
      header: (arg0: string) => string;
      user: any;
      token: any;
    },
    _: any,
    next: (arg0: ApiError | undefined) => void
  ) => {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new ApiError(401, "Unauthorized: No token provided"));
    }

    if (!process.env.JWT_SECRET_KEY) {
      return next(new ApiError(500, "JWT secret key not configured"));
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error: any) {
      if (error.name === "TokenExpiredError") {
        return next(new ApiError(401, "Access token expired"));
      } else if (error.name === "JsonWebTokenError") {
        return next(new ApiError(401, "Invalid token signature"));
      } else {
        return next(new ApiError(401, error.message || "Invalid access token"));
      }
    }

    const auth_token = await authTokenRepository.findOne({
      where: { token },
      relations: ["user"],
    });

    if (!auth_token || !auth_token.user) {
      return next(new ApiError(401, "Invalid token or user not found"));
    }

    req.user = auth_token.user;
    req.token = token;
    next(undefined);
  }
);
