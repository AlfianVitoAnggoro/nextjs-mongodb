import { ROLES_OPTIONS } from '@/constants';
import { z } from 'zod';
export const userFormSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  role: z.enum(ROLES_OPTIONS, {
    required_error: 'Role is required',
  }),
  password: z.string({ required_error: 'Password is required' }).min(6, {
    message: 'Password must be at least 6 characters',
  }),
});
