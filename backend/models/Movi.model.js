const mongoose=require("mongoose");

const MovieSchema= new mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailer:{type:String},
    video:{type:String},
    year:{type:String},
    limit:{type:Number},
    genre:{type:String},
    isMovie:{type:Boolean, default:true},
    searchTimes:{type:Number}
},
 {
     timestamps:true
});

module.exports=mongoose.model("Movie", MovieSchema);