import { TaskCreation } from "../model/taskCreation.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllTask=asyncHandler(async(req,res)=>{

    const allTask=await TaskCreation.find({});

    if(!allTask || allTask.length === 0){
        throw new ApiError("No tasks found", 404);
    }

    return res.status(200).json(
        new ApiResponse(200, "All tasks retrieved successfully", allTask)
    )

})

export default getAllTask;