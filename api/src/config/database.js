import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('>DB is connected')
    } catch (error) {
        console.log(error)
    }
};