// src/app/actions.ts

"use server";

import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import {
  applicationSchema,
  contactFormSchema,
  TContactForm,
} from "@/lib/validators";

const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Redis and Ratelimiter for both functions
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
});

export async function subscribeUser(email: string) {
  if (!email) {
    return { success: false, message: "Email is required." };
  }

  try {
    // 1. Add the user to your Resend audience/contact list
    await resend.contacts.create({
      email: email,
      audienceId: "03f28832-e3dd-4a33-85c8-05cd42e02800", // Get this from your Resend dashboard
    });

    // 2. (Optional) Send a welcome email
    await resend.emails.send({
      from: "Infinite Dynamics <updates@infinite-dynamics.com>", // Use your verified domain
      to: email,
      subject: "Welcome to Infinite Insights!",
      html: "<h1>Thank you for subscribing!</h1><p>You will now receive the latest insights in technology and design directly to your inbox.</p>",
    });

    return { success: true, message: "Thank you for subscribing!" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

// === FUNCTION 2: SEND CONTACT EMAIL (Now with server-side validation) ===
export async function sendContactEmail(formData: TContactForm) {
  // 2. Validate the data on the server
  const validation = contactFormSchema.safeParse(formData);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid input. Please check your form.",
    };
  }
  const { fullName, email, phone, message } = validation.data;

  // 3. Rate limiting logic
  const ip = (await headers()).get("x-forwarded-for");
  const { success } = await ratelimit.limit(ip ?? "anonymous");
  if (!success) {
    return {
      success: false,
      message: "Too many requests. Please try again later.",
    };
  }

  // 4. Send the email
  try {
    await resend.emails.send({
      from: "Infinite Dynamics <contact@infinite-dynamics.com>", // IMPORTANT: Use a verified domain
      to: "saheedamansaray@gmail.com", // Your actual receiving email
      subject: `New Message from ${fullName} via Website`,
      replyTo: email,
      html: `
        <p>You received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to send the message. Please try again.",
    };
  }
}

// === FUNCTION 3: HANDLE JOB APPLICATION ===
export async function applyForJob(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validation = applicationSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your submission.",
    };
  }
  const { fullName, email, coverLetter, resume } = validation.data;
  const jobTitle = formData.get("jobTitle") as string;

  try {
    const buffer = Buffer.from(await resume.arrayBuffer());

    // Email to the company
    await resend.emails.send({
      from: "Infinite Dynamics Careers <careers@yourverifieddomain.com>",
      to: "saheedamansaray@gmail.com",
      subject: `New Application for ${jobTitle}: ${fullName}`,
      replyTo: email,
      html: `...`, // Your existing HTML content
      attachments: [
        {
          filename: `resume-${fullName.replace(/ /g, "_")}.pdf`,
          content: buffer,
        },
      ],
    });

    // Confirmation email to the candidate
    await resend.emails.send({
      from: "Infinite Dynamics <noreply@yourverifieddomain.com>",
      to: email,
      subject: `We've Received Your Application for ${jobTitle}`,
      html: `
        <h1>Thank you for applying, ${fullName}!</h1>
        <p>We have successfully received your application for the <strong>${jobTitle}</strong> position at Infinite Dynamics.</p>
        <p>Our team will review your submission carefully. If your profile is a match, we will be in touch shortly to discuss the next steps.</p>
        <p>Best regards,<br>The Infinite Dynamics Team</p>
      `,
    });

    return {
      success: true,
      message: `Thank you for applying! A confirmation email has been sent.`,
    };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      message: "Failed to submit application. Please try again.",
    };
  }
}
