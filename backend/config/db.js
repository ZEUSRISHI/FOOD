import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://Rishi:asdf@cluster0.pgubl.mongodb.net').then(()=>console.log("DB Connected"));
}