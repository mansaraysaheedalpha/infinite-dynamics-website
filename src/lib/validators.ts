// src/lib/validators.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(), // Phone is optional
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export type TContactForm = z.infer<typeof contactFormSchema>;
