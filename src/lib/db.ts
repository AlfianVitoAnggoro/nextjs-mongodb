'use server';
import * as mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export async function connectDB() {
  try {
    await mongoose.connect(process.env.NEXT_MONGODB_URI!, options as any);
    mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}
