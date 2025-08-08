import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
        type: String, required: [true, "Please provide your name"]
    },
    email: {
        type: String, required: [true, "Please provide your email"], unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: [true, "Please provide your role"],
        default: "Camper"
    }
})

const User = mongoose.model("User", userSchema);
export default User;


