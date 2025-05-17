import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    age: Number,
    createdAt:{
        type: Date,
        default: Date.now,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
})

const User = mongoose.model('User', userSchema)

export default User