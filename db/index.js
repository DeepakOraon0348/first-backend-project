import mongoose from "mongoose";
import { BD_NAME } from "../src/constants.js";

const connectDB = async() => {
    try{
        console.log("MONGODB_URI = ", process.env.MONGODB_URI);

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${BD_NAME}`)
        console.log(`\n  Mongodb  connected !! DB HOST: ${connectionInstance.connection.host}`);
        //console.log(`✅ MongoDB connected: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("MONGODB Connection error",error);
        process.exit(1)
        
    }

}

export default connectDB;