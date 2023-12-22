import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

// let DB_URL:string;

// if (typeof process.env.DB_URL == "string") {
//     DB_URL = process.env.DB_URL
    
// }


// console.log(DB_URL);


const connectDb = () => {
        mongoose
        .connect('mongodb://0.0.0.0:27017/gst', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        .then(() => console.log(`MONGODB CONNECTED SUCCESSFULLY`))
        .catch(error => {
            console.log(`DB CONNECTION FAILED`);
            console.log(error);
            process.exit(1);
        })
}


app.listen(3000, () => {
    connectDb();
    console.log(`Server running 3000`);
})