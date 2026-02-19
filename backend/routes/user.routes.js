import express from "express";
import {
  loginUser,
  logout,
  registerUser,
  checkAuth
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authUser.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authUser, logout);
router.get("/is-auth", authUser, checkAuth);

export default router;