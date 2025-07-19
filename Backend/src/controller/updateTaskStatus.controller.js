import mongoose from "mongoose";
import { TaskCreation } from "../model/taskCreation.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";



const updateTaskStatus = asyncHandler(async (req, res) => {
    const { taskId, isCompleted } = req.body;


    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Invalid Task ID");
    }
    const updateTaskStatus = await TaskCreation.updateOne(
        { "tasks._id": taskId },
        { $set: { "tasks.$.isCompleted": isCompleted } }
    )
    console.log("Update task status response:", updateTaskStatus);

    if (!updateTaskStatus) {
        throw new ApiError(404, "Task not found");
    }
    return res.status(200).json(
        new ApiResponse(200, "Task status updated successfully", updateTaskStatus)
    );
})

export default updateTaskStatus;