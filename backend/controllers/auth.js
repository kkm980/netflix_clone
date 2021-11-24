const router = require("express").Router();
const User = require("../models/User.model");
const CryptoJS = require("crypto-js");

// USER REGISTRATION

router.post("/register",async (req,res)=>{
    const newUser = new User({
        userName:req.body.userName,
        mail:req.body.mail,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        profilePic:req.body.profilePic,
        // isAdmin:req.body.isAdmin,
        // favs:req.body.favs,
        // myMovi:req.body.myMovi,
        // watched:req.body.watched,
    });
     try{
         const user = await newUser.save();
         res.status(201).json(user);
     }
     catch(err){
         res.status(501).json(err);
         console.log(err);
     }
    
});

module.exports = router;