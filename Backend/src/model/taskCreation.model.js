import mongoose from 'mongoose';

const taskCreationSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    dueDate:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        enum: ['High', 'Medium', 'Low'],
        required:true,
        default: 'low',
    },
    isCompleted:{
        type:Boolean,
        default:false,
    }
})

export const TaskCreation= mongoose.model('TaskCreation', taskCreationSchema);
