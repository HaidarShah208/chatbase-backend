import express from "express";
import {
  register,
  login,
  logout,
  forgetPassword,
  resetPassword,
} from "../controllers/AuthController";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

export default router;
