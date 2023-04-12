import express from "express";
import  Login  from "../controller/auth/Login.js";
import Register from "../controller/auth/Register.js"
import webUpdate from "../controller/update/webUpdate.js";
import profUpdate from "../controller/update/profUpdate.js"
import updatePassword from "../controller/update/updatePassword.js"
import updateIntrest from "../controller/update/updateIntrest.js"
import aboutUpdate from "../controller/update/aboutUpdate.js"

const router = express.Router();

router.post("/login",Login)
router.post("/register",Register)
router.put("/webUpdate",webUpdate)
router.put("/professionalUpdate",profUpdate)
router.put("/updatePassword",updatePassword)
router.put("/updateIntrest",updateIntrest)
router.put("/aboutUpdate",aboutUpdate)

export default router;