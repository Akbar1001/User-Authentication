const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        unique : true 
    },
    email: String,
    password : String
}) 

const userModel=mongoose.model('user',userSchema)

module.exports= userModel;