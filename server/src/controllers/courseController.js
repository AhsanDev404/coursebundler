import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import Course from "../models/courseModel.js";

export const getAllCourse = catchAsyncError(async(req,res,next)=>{
    const course = await Course.find()
    res.status(200).json({
        success:true,
        course
    })
})

