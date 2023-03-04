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

export const login  = catchAsyncError((req,res,next)=>{
    const {email , password} = req.body


})