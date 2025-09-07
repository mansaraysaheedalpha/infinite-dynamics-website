// src/components/forms/ContactForm.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactForm, contactFormSchema } from "@/lib/validators";
import { Button } from "@/components/ui/Button";
import { sendContactEmail } from "@/app/actions";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  // This is the updated submission logic
  const onSubmit = async (data: TContactForm) => {
    setSubmissionStatus("submitting");
    setServerMessage(""); // Clear previous messages

    const result = await sendContactEmail(data); // Call the Server Action

    if (result.success) {
      setSubmissionStatus("success");
      setServerMessage(result.message);
      reset(); // Clear the form fields
    } else {
      setSubmissionStatus("error");
      setServerMessage(result.message);
    }
  };

  // The success message is now handled by the main form to avoid layout shifts
  if (submissionStatus === "success") {
    return (
      <div className="rounded-md bg-green-100 p-4 text-center text-green-800">
        <h4 className="font-bold">Message Sent!</h4>
        <p>
          {serverMessage ||
            "Thank you for reaching out. We'll get back to you shortly."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-brand-primary placeholder:text-gray-500 focus:border-brand-yellow focus:ring-brand-yellow"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Work Email"
            className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-brand-primary placeholder:text-gray-500 focus:border-brand-yellow focus:ring-brand-yellow"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone (Optional)"
            className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-brand-primary placeholder:text-gray-500 focus:border-brand-yellow focus:ring-brand-yellow"
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          rows={5}
          className="w-full rounded-md border-gray-300 bg-white/80 p-3 text-brand-primary placeholder:text-gray-500 focus:border-brand-yellow focus:ring-brand-yellow"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={submissionStatus === "submitting"}
      >
        {submissionStatus === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {submissionStatus === "error" && (
        <p className="mt-2 text-center text-sm text-red-400">
          {serverMessage || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
