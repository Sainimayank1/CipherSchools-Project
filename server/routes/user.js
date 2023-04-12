import express from "express";
import  Login  from "../controller/auth/Login.js";
import Register from "../controller/auth/Register.js"
import webUpdate from "../controller/update/webUpdate.js";
import profUpdate from "../controller/update/profUpdate.js"

const router = express.Router();

router.get("/login",Login)
router.post("/register",Register)
router.put("/webUpdate",webUpdate)
router.put("/professionalUpdate",profUpdate)

export default router;