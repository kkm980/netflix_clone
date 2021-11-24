const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    userName:{type:String, required:true, unique:true},
    mail:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    profilePic:{type:String, default:""},
    isAdmin:{tpe:Boolean, default:false},
    favs:{type:Array, required:false},
    myMovi:{type:Array, required:false},
    watched:{type:Array, required:false}
},
 {
    timestamps:true
});

module.export=mongoose.model("User", UserSchema);