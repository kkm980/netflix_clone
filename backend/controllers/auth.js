const router = require("express").Router();
const User = require("../models/User.model");
const CryptoJS = require("crypto-js");
const webToken = require("jsonwebtoken");


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



// LOGIN 

router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({mail:req.body.mail});
        !user && res.status(401).json("User doesnot exist");

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        var actualPass = bytes.toString(CryptoJS.enc.Utf8); 
        actualPass !== req.body.password && res.status(401).json("Wrong Password");


        const token = webToken.sign(
            {id:user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: "7d"}
        );


        const {password, ...data} = user._doc;
        res.status(200).json({...data, token});
    }
    catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;