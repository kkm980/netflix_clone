const express= require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log(err)});

app.listen(8700, ()=>{
    console.log("got you");
});