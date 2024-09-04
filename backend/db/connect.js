import mongoose from "mongoose"

export const connectdb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected:${conn.connection.host}`)
    } catch (error) {
       console.log(`Error:`,error.message)
       process.exit(1)//failure,0 is success 
    }
}