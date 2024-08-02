'use server';
import { User } from '@/types';
import UserModel from './schema';
import { connectDB } from '@/lib/db';

const getUsersModel = async () => {
  try {
    await connectDB();
    const users = await UserModel.find();
    // Convert each Mongoose document to a plain JavaScript object
    const plainUsers = users.map(user => ({
      ...user.toObject(),
      _id: user._id.toString(), // Convert _id to string
    }));

    return plainUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const getUserModel = async (id: string) => {
  try {
    await connectDB();
    const user = await UserModel.findOne({ _id: id });
    return user.toObject();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

const createUserModel = async (data: User) => {
  try {
    await connectDB();
    const user = await UserModel.create(data);
    return user.toObject();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const updateUserModel = async (id: string, data: User) => {
  try {
    await connectDB();
    const user = await UserModel.updateOne({ _id: id }, data);
    return user;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const deleteUserModel = async (id: string) => {
  try {
    await connectDB();
    await UserModel.deleteOne({ _id: id });
    return true;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export {
  getUsersModel,
  createUserModel,
  getUserModel,
  updateUserModel,
  deleteUserModel,
};
