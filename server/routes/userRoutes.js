const express = require("express");
const {upload} =require("../server.js")
const router = express.Router();
const {
    registerUser,
     loginUser
}=require("../controllers/userController");
router.post("/register" , registerUser);
router.post("/login", loginUser);
module.exports=router;