import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// creating token using jsonwebtoken package
const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//route for user login
const loginUser= async (req,res) =>{

    try {
        
        const{ email , password}= req.body;
        const user= await userModel.findOne({email});

        //check either exists or not

        if(!email || !password){
            return res.json({success:false , message:"Email"})
        }
        if(!user){
            return res.json({success:false, message:"user not find"})
        }

            //checks password in database
        const isMatch= await bcrypt.compare(password,user.password);
        if(isMatch){

            const token=createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid email"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }


}


//route for user registration

const registerUser = async (req,res) =>{
   
    try {
        
        const {name,email,password}=req.body;

        // checking user already exist or not

        const exists= await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"}) // response using json
        }

        // validating email and password using validator package
        if(!name || !email || !password){
            return res.json({success:false,message:"Details missing"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"Too short"})
        }

        // hashing user password using bycrypt package

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // creating new user
        const newUser= new userModel({
            name,
            email,
            password:hashedPassword
        })

        //saving user in database
        const user= await newUser.save()

        // generating token for user to login in application

        const token= createToken(user._id)//id is auto genetated in mongodb
        res.json({success:true,token})



    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//route for admin login

const adminLogin = async (req,res) => {
    try {
        
        const{email,password}=req.body
        if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        }else{
            res.json({success:false,message:"Invalid user"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//route for getting user profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await userModel.findById(userId).select('-password -cartData');
        
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({ 
            success: true, 
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//route for getting all users (admin only)
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select('-password -cartData').sort({ createdAt: -1 });
        res.json({ 
            success: true, 
            users 
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export{ loginUser , registerUser , adminLogin , getUserProfile , getAllUsers }