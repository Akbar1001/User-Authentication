const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");

async function registerUser(req,res){
    const {username,email,password}=req.body;

    const isUserAlreadyExists= await userModel.findOne({username});

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"Username already exist"
        })
    }
    const user= await userModel.create({
        username,email,password
    })

    // creating token
    const token=jwt.sign(// user's data & it should be unique
        {id :user._id},process.env.JWT_SECRET)
    
    res.cookie("token",token);

    res.status(201).json({
        message: "User registered Successfully",
        user,
    })
}

module.exports={registerUser}