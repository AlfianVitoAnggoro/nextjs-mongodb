import { User } from '@/types';
import {
  createUserModel,
  deleteUserModel,
  getUserModel,
  getUsersModel,
  updateUserModel,
} from './model';

const getUsers = async () => {
  try {
    const users = await getUsersModel();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUser = async (id: string) => {
  try {
    const user = await getUserModel(id);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (data: User) => {
  try {
    const user = await createUserModel(data);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateUser = async (id: string, data: User) => {
  try {
    const user = await updateUserModel(id, data);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const status = await deleteUserModel(id);
    return status;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getUsers, createUser, getUser, updateUser, deleteUser };
