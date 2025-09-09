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
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.error("RESEND_AUDIENCE_ID is not set.");
    return {
      success: false,
      message: "Subscription service is not configured.",
    };
  }

  try {
    await resend.contacts.create({
      email: email,
      audienceId: audienceId,
    });

    await resend.emails.send({
      from: "Infinite Dynamics Updates <updates@infinite-dynamics.com>",
      to: email,
      subject: "Welcome to Infinite Insights!",
      html: "<h1>Thank you for subscribing!</h1><p>You will now receive the latest insights in technology and design directly to your inbox.</p>",
      replyTo: "info@infinite-dynamics.com",
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

export async function sendContactEmail(formData: TContactForm) {
  const validation = contactFormSchema.safeParse(formData);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid input. Please check your form.",
    };
  }
  const { fullName, email, phone, message } = validation.data;

  const ip = (await headers()).get("x-forwarded-for");
  const { success } = await ratelimit.limit(ip ?? "anonymous");
  if (!success) {
    return {
      success: false,
      message: "Too many requests. Please try again later.",
    };
  }

  try {
    await resend.emails.send({
      from: "Website Contact Form <noreply@infinite-dynamics.com>",
      to: "info@infinite-dynamics.com",
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
      from: "Careers <careers@infinite-dynamics.com>",
      to: "info@infinite-dynamics.com",
      subject: `New Application for ${jobTitle}: ${fullName}`,
      replyTo: email,
      html: `
        <h1>New Application: ${jobTitle}</h1>
        <p><strong>Applicant:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Cover Letter:</h2>
        <p>${coverLetter.replace(/\n/g, "<br>")}</p>
      `,
      attachments: [
        {
          filename: `resume-${fullName.replace(/ /g, "_")}.pdf`,
          content: buffer,
        },
      ],
    });

    // Confirmation email to the candidate
    await resend.emails.send({
      from: "Infinite Dynamics Careers <noreply@infinite-dynamics.com>",
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
