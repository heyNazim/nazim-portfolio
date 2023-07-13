import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    subject:String,
    message:String
},{timestamps:true});

export default mongoose.model('portfolio',userSchema)