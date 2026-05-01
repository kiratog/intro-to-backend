import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: "string",
            required: true,
            inique: true,
            lowercase: true,
            trim: true,
            minLen: 3,
            maxLen: 32
        },
        password: {
            type: "string",
            requireed: true,
            minLen: 6,
            maxLen: 32
        },
        email: {
            type: "string",
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)