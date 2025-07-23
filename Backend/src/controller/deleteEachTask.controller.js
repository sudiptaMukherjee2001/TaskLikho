import mongoose from "mongoose";
import { TaskCreation } from "../model/taskCreation.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const deleteOneTask = asyncHandler(async (req, res) => {
    const { taskId } = req.body;
    console.log("taskId",taskId);
    
    if (mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Invalid Task Id");
    }
    const deleteOneTask = await TaskCreation.updateOne(
        { "tasks._id": taskId },
        {
            $pull: {
                tasks: { _id: taskId }
            }
        }
    )
    if (!deleteOneTask) {
        throw new ApiError(404, "Task not found");
    }
    return res.status(200).json(
        new ApiResponse(200, "Task deleted successfully", deleteOneTask)
    );
})

export default deleteOneTask;