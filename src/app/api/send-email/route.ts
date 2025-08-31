// src/app/api/send-email/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

// Initialize the Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Initialize the Rate Limiter
// This allows 3 requests from a single IP address in a 1-minute sliding window.
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // --- RATE LIMITING LOGIC START ---
  const ip = headers().get("x-forwarded-for");
  const { success, limit, remaining, reset } = await ratelimit.limit(
    ip ?? "anonymous"
  );

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  // --- RATE LIMITING LOGIC END ---

  const body = await req.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const { fullName, email, phone, message } = validation.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-company-email@example.com", // Remember to change this
      subject: `New Message from ${fullName} via Infinite Dynamics Website`,
      html: `...`, // Your email HTML content
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
