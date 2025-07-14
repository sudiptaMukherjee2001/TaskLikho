import mongoose from 'mongoose';

const taskCreationSchema = new mongoose.Schema({
    tasks: [
        {
            taskName: { type: String, required: true },
            isCompleted: { type: Boolean, default: false },
            priority: {
                type: String,
                enum: ['High', 'Medium', 'Low'],
                default: 'Low',
            },
        }
    ],
    dueDate: {
        type: String,
        required: true,
    }
});


export const TaskCreation = mongoose.model('TaskCreation', taskCreationSchema);
