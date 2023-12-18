import mongoose from "mongoose";
require('dotenv').config()
const dbConnection = async () => { 
    try {
        await mongoose.connect(process.env.MONGODB_URL || '');
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log({error: "Error connecting to MongoDB", message: error.message || "Error connecting to MongoDB (no error message)"})
    }
}
export default dbConnection;