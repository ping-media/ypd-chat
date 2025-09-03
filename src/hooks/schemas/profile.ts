import { z } from "zod";

export const ProfileSetupSchema = z.object({
  full_name: z.string({
    message: "Please enter a valid full name",
  }),
  email_id: z.email({
    message: "Please enter a valid email address.",
  }),
  grade: z.string({
    message: "Please enter a valid grade",
  }),
  school_name: z.string({
    message: "Please enter a school name",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  city: z.string({
    message: "Please enter a valid city number",
  }),
  city_tier: z.string({
    message: "Please enter a valid city tier",
  }),
  subject_stream: z.string({
    message: "Please enter a valid city tier",
  }),
  aspiration_vision: z.string({
    message: "Please enter a valid city tier",
  }),
  describe_future_self: z.string({
    message: "Please enter a valid city tier",
  }),
});
