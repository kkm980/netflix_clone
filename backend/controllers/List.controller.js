
const router = require("express").Router();

const List = require("../models/List.model");

const verify = require("../verifyToken");


// CREATE LIST

router.post("/",verify, async(req,res)=>{
    if(req.user.isAdmin){
       const newList = new List(req.body);
       try{
          const ourList = await newList.save();
          res.status(201).json(ourList);
       }catch(err){
           res.status(500).json(err)
       }
    }  else{
        res.status(403).json("Not allowed")
    }
});

// DELETE LIST

router.delete("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin){
       
       try{
          await List.findByIdAndDelete(req.params.id);
          res.status(201).json("deletion was successful");
       }catch(err){
           res.status(500).json(err);
       }
    }  else{
        res.status(403).json("Not allowed")
    }
});


 





// GET ALL LISTS

router.get("/",verify, async(req,res)=>{
     const typeQuery = req.query.type;
     const genreQuery = req.query.genere;
     let list = [];
     try{
         if(typeQuery){
             if(genreQuery){
                 list = await List.aggregate([{$samle:{size:10}},
                {$match:{type:typeQuery, genre:genreQuery}}
                ]);
             }else{
                 list = await List.aggregate([{$sample:{size:10}},
                {$match:{type:typeQuery}},]);
             }
         }else{
             list = await List.aggregate([{$samle:{size:10}}]);
         }
         res.status(200).json(list);
     }catch(err){
         res.status(500).json(err);
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
