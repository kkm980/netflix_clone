const router = require("express").Router();
const User = require("../models/User.model");

// USER REGISTRATION

router.post("/register",async (req,res)=>{
    const newUser = new User({
        userName:req.body.userName,
        mail:req.body.mail,
        password:req.body.password,
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