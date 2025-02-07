import express from "express";
import { userLogin, userLogOut, userSignUp } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.post("/logout", userLogOut);
// router.post("/signout", userSignOut);

export default router;
