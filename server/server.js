const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require("cors");


const app = express();
const port = process.env.PORT || 5000;
 const dotenv = require("dotenv");
 dotenv.config();
 connectDb();
app.use(express.json());
app.use(cors());
app.get('/' , (req , res)=>{
    res.send("working");
})
app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`);
})