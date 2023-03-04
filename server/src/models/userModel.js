import mongoose from "mongoose";
import validator from 'validator'
import jwt from 'jsonwebtoken'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Name is required'],
    },
    email:{
        type:String,
        required:[true , 'Email is required'],
        unique:true,
        validate:validator.isEmail,
    },
    password:{
        type:String,
        required:[true , 'Email is required'],
        minlength:[8 , 'Password should be greater than 8 character'],
        select:false,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user',
    },
    subscription:{
        id:String,
        status:String,
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    playlist:[
        {
            course:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course"
            },
            poster:{
                type:String,
            }
        },
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },
    ResetPasswordToken:String,
    ResetPasswordExpire:String,

})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

}

const User = mongoose.model('User' , userSchema)

export default User