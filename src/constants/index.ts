import { EnumValues } from 'zod';
import { Payment, User } from '@/types';

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
];

export const users: User[] = [
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Amelia Tria Agustina',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
  {
    _id: '728ed52f',
    image: 'image.png',
    name: 'Alfian Vito Anggoro',
    email: 'm@example.com',
    role: 'admin',
    password: '123456',
  },
];

export const ROLES_OPTIONS: EnumValues = ['admin', 'member'];
