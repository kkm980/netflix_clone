
const router = require("express").Router();

const User = require("../models/User.model");

const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// UPDATE USER 

router.put("/:id",verify, async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password, process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new:true});
            res.status(200).json(updatedUser)
        }catch(err){
            req.statusCode(500).json(err);
        }
    }   else{

    }
});

// DELETE USER 


router.delete("/:id", verify, async(req,res)=>{
    if(req.user.id === req.params.id|| req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successful");
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Updating others account is not appreciated!")
    }
});


// GET USER 

router.get("/find/:id", verify, async(req,res)=>{
    if(req.user.id === req.params.id|| req.user.isAdmin){
        try{
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Updating others account is not appreciated!")
    }
});

// GET ALL USERS 

router.get("/", verify, async(req,res)=>{
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find();
            res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("Only admin can access")
    }
});

// GET USER STATS

// still left to do


module.exports = router;
