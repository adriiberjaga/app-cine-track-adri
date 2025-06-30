import { z } from 'zod/v4';

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, 'Username is required')
      .min(3, 'At least 3 characters long')
      .max(20, 'Maximum 20 characters long'),
    email: z
      .email()
      .min(1, 'Email is required')
      .max(100, 'Maximum 100 characters long'),
    password: z
      .string()
      .min(1, 'Password is required')
      .regex(/^[a-zA-Z0-9]{8,16}$/, 'Password must be 8-16 characters long'),
    confirmPassword: z.string().min(1, 'You need to complete the password'),
  })
  .refine((values) => values.password === values.confirmPassword, {
    error: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
