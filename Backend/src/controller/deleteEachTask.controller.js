import mongoose from "mongoose";
import { TaskCreation } from "../model/taskCreation.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const deleteOneTask = asyncHandler(async (req, res) => {
    console.log("Req body in controller ==>", req.body);

    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid Task ID");
    }

    const deleteOneTask = await TaskCreation.findOneAndUpdate(
        { "tasks._id": id },
        {
            $pull: {
                tasks: { _id: id }
            }
        },
         { new: true }
    );
    console.log("deleteOneTask go",deleteOneTask);
    
 // Step 2: Check if tasks array is now empty
    if (deleteOneTask.tasks.length === 0) {
        await TaskCreation.findByIdAndDelete(deleteOneTask._id);
        return res.status(200).json(
            new ApiResponse(200, "Task deleted, and empty group removed", null)
        );
    }
    if (!deleteOneTask || deleteOneTask.modifiedCount === 0) {
        throw new ApiError(404, "Task not found or already deleted");
    }

    return res.status(200).json(
        new ApiResponse(200, "Task deleted successfully", deleteOneTask)
    );
});

export default deleteOneTask;
