import express from "express";
import  Login  from "../controller/auth/Login.js";
import Register from "../controller/auth/Register.js"

const router = express.Router();

router.post("/login",Login)
router.post("/register",Register)

export default router;