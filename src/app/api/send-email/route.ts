// src/app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  // Validate the request body against our Zod schema
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const { fullName, email, phone, message } = validation.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // This must be a verified sender in Resend
      to: "your-company-email@example.com", // CHANGE THIS to your actual email
      subject: `New Message from ${fullName} via Infinite Dynamics Website`,
      html: `
        <p>You have received a new message from the contact form:</p>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
