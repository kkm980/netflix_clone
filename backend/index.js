const express= require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./controllers/auth")


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
})
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log(err)});

app.use(express.json());

app.use("/auth", authRoute);

app.listen(8700, ()=>{
    console.log("got you");
});