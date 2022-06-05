const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
      
    },
    profilepic:{
        type:String,
        default:""
    },
   
    
},
{timestamps:true}
, {
    writeConcern: {
       w: 'majority',
       j: true,
       wtimeout: 1000
    }
 }
);
module.exports=mongoose.model("User",UserSchema);
