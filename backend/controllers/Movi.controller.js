
const router = require("express").Router();

const Movie = require("../models/Movi.model");

const verify = require("../verifyToken");
const Uploadings = require("./FileUpload.jsx");
const express = require("express");
const app = express();

// var fileupload = require("express-fileupload");
// app.use();

// CREATE MOVIE
const cpUpload = Uploadings.fields([{ name: 'img' }, { name: 'trailer' }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {

router.post("/", verify, cpUpload, async(req, res, next)=>{
    if(req.user.isAdmin){
       const newMovie = new Movie({

        title:req.body.title,
        trailer:req.body.trailer,
        img:req.body.img
        // imgTitle:{type:String},
        // imgSm:{type:String},
        // trailer:{type:String},
        // video:{type:String},
        // year:{type:String},
        // limit:{type:Number},
        // genre:{type:String},
        // isMovie:{type:Boolean, default:true},
        // searchTimes:{type:Number}

       });
       try{
          const ourMovie = await newMovie.save();
          console.log(req.files);
          res.status(201).json(ourMovie);
       }catch(err){
           res.status(500).json(err)
       }
    }  else{
        res.status(403).json("Updating others account is not appreciated!")
    }
});

// UPDATE MOVIE

router.put("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin){
      
       try{
          const updatedMovie = await Movie.findByIdAndUpdate(
              req.params.id, 
              {
                  $set: req.body,
              },
              {new: true}
          );
          res.status(200).json(updatedMovie);
       }catch(err){
           res.status(500).json(err)
       }
    }  else{
        res.status(403).json("Updating others account is not appreciated!")
    }
});


// DELETE MOVIE

router.delete("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin){
      
       try{
          await Movie.findByIdAndDelete(req.params.id);
          res.status(200).json("Deletion of movie successful");
       }catch(err){
           res.status(500).json(err)
       }
    }  else{
        res.status(403).json("Updating others account is not appreciated!")
    }
});





// GET ONE MOVIE

router.get("/find/:id",verify, async(req,res)=>{
       try{
         const movieOne =  await Movie.findById(req.params.id);
          res.status(200).json(movieOne);
       }catch(err){
           res.status(500).json(err)
       }
});


// GET ALL MOVIES

router.get("/",verify, async(req,res)=>{
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("Not allowed");
    }
    
    
});



// GET FEATURED MOVIE

router.get("/featured", verify, async(req,res)=>{
    const type = req.query.type;
    let movie;
        try{
            if(type==="series"){
                movie = await Movie.aggregate([
                    {$match:{isMovi:false}},
                    {$sample: {size:1}},
                ])
            }else{
                movie = await Movie.aggregate([
                    {$match:{isMovi:true}},
                    {$sample:{size:1}},
                ]);
            }
            res.status(200).json(movie);
        }catch(err){
            res.status(500).json(err);
        }
    
});

module.exports = router;
