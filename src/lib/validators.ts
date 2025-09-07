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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  coverLetter: z
    .string()
    .min(20, "Please provide a brief cover letter (at least 20 characters)."),
  resume: z
    .any()
    .refine((files) => files?.length === 1, "CV / Resume is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".pdf, .doc, and .docx files are accepted."
    ),
});

export type TApplicationForm = z.infer<typeof applicationSchema>;

