const express = require("express");
const {upload} =require("../server.js")
const authmiddleware  = require("../middlewares/jwtMiddleware")
const router = express.Router();
const {
    registerUser,
     loginUser
}=require("../controllers/userController");
router.post("/register" , registerUser);
router.post("/login", authmiddleware ,  loginUser);
module.exports=router;