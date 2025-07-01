import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        default: null,
    }

},
{
    timestamps: true,
   
}
);


export const Register = mongoose.model("Register", registerSchema);