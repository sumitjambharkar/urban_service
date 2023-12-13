import mongoose from "mongoose"

const connectDatabase = async () => {
   try {
    await mongoose.connect("mongodb://localhost:27017/share")
    console.log("Database connected");
   } catch (error) {
    console.log("Database not connected");
   }
}

export default connectDatabase