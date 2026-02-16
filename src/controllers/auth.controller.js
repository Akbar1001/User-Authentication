const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");

async function registerUser(req,res){
    const {username,email,password}=req.body;

    const user= await userModel.create({
        username,email,password
    })

    // creating token
    const token=jwt.sign(// user's data & it should be unique
        {id :user._id},process.env.JWT_SECRET)

    res.status(201).json({
        message: "User registered Successfully",
        user,
        token
    })
}

module.exports={registerUser}