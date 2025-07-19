import { TaskCreation } from "../model/taskCreation.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";



const updateTaskStatus = asyncHandler(async (req, res) => {
    const { taskId, isCompleted } = req.body;

    if (!mongoose.Types.ObjectId.isValid(taskId)) {
        throw new ApiError(400, "Invalid Task ID");
    }
  const updateTaskStatus =  TaskCreation.findOneAndUpdate(
        { _id: taskId },//filter
        { $set: { isCompleted: isCompleted } }, //update
        { new: true } //options
    )
    if (!updateTaskStatus) {
        throw new ApiError(404, "Task not found");
    }
    return res.status(200).json(
        new ApiResponse(200, "Task status updated successfully", updateTaskStatus)
    );
})

export default updateTaskStatus;