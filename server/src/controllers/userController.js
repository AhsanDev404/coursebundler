import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import User from "../models/userModel.js";
import Errorhandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async(req,res,next)=>{
    const {name , email , password} = req.body

    // const file = req.file

    if (!name || !email || !password){
        return(next(new Errorhandler("Please enter all fields" , 400)))
    }

    let user = await User.findOne({email})
    if(user){
        return(next(new Errorhandler("User already exist" , 409)))
    }
    else{
        user = await User.create({
            name,
            email,
            password,
            avatar:{
                public_id:'temp',
                url:"temp"
            }
        })
    }
    sendToken(res,user,"Register Successfully",201)
})

export const login  = catchAsyncError(async(req,res,next)=>{
    const {email , password} = req.body

    if(!email || !password){
        return(next(new Errorhandler('Please Enter Email and Password' , 400)))
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return(next(new Errorhandler('User Not exist' , 401)))
    }

    const isMatched = await user.comparePassword(password)

    if(!isMatched){
        return(next(new Errorhandler('Wrong Email Password' , 401)))
    }

    sendToken(res,user,`Welcome Back ${user.name}`,200)

})

export const logout = catchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token" , null , {
        expires: new Date(Date.now())
    }).json({
        success:true,
        message:'Logout Successfully'
    })
})

export const getMyProfile = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id)
    res.status(200).json({
        success:true,
        user,
    })
})

export const changePassword = catchAsyncError(async(req,res,next)=>{
    const {newPassword , oldPassword} = req.body
    if(!newPassword || !oldPassword){
        return(next(new Errorhandler('Please Enter required fields' , 401)))
    }
    const user = await User.findById(req.user._id).select('+password')

    const isMatched = await user.comparePassword(oldPassword)

    if(!isMatched){
        return(next(new Errorhandler('Please Enter Correct Password', 401)))
    }
    user.password = newPassword

    await user.save()

    res.status(200).json({
        success:true,
        message:'Password updated'
    })
})

export const changeProfile = catchAsyncError(async(re,res,next)=>{
    const user = await User.findById(req.user._id)
    const {name , email} = req.body
    if(!name || !email){
        return(next(new Errorhandler('Please Enter name and email' , 400)))
    }

    user.name = name
    user.email = email

    await user.save()

    res.status(200).json({
        success:true,
        message:'Name and Password is updated Successfully'
    })

})

export const updatePicture = catchAsyncError(async(req,res,next)=>{
    const user = User.findById(req.user._id)

    res.status(200).json({
        success:true,
        message:"profile picture updated successfully"
    })
})