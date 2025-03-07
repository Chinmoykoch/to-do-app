import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    }
}, { timestamps: true, })

const User = mongoose.model("User", userSchema);
export default User;

