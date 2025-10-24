import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vaibhavrai143361karnai_db_user:resume123@cluster0.budsotx.mongodb.net/ResumeBuilder')
    .then(() => {
        console.log('MongoDB connected');
    })
}