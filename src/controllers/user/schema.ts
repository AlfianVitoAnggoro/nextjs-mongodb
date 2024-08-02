'use server';
import mongoose, { Schema, model, Document } from 'mongoose';

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
}

interface UserDocument extends User, Document {}

// Define the User schema
const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true, bufferCommands: false, autoCreate: false },
);

// Check if the model is already compiled to avoid overwriting
const UserModel =
  mongoose.models.User || model<UserDocument>('User', userSchema);
export default UserModel;
