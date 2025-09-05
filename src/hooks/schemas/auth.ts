import { z } from "zod";

export const FormRegisterSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
    confirm_password: z.string().min(5, {
      message: "Password must be at least 5 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const FormLoginSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

export const EmailVerificationSchema = z.object({
  token: z.string({
    message: "Please enter a valid token",
  }),
});
