// src/components/careers/ApplicationForm.tsx

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { TApplicationForm, applicationSchema } from "@/lib/validators";
import { applyForJob } from "@/app/actions";

export const ApplicationForm = ({
  jobTitle,
  closeDialog,
}: {
  jobTitle: string;
  closeDialog: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: TApplicationForm) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("coverLetter", data.coverLetter);
    formData.append("resume", data.resume[0]);
    formData.append("jobTitle", jobTitle);

    try {
      const result = await applyForJob(formData);

      if (result.success) {
        toast.success("Application Sent!", { description: result.message });
        reset();
        closeDialog();
      } else {
        toast.error("Submission Failed", { description: result.message });
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          {...register("fullName")}
          aria-invalid={!!errors.fullName}
          aria-describedby="fullName-error"
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-red-500 text-sm mt-1">
            {errors.fullName.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          {...register("coverLetter")}
          aria-invalid={!!errors.coverLetter}
          aria-describedby="coverLetter-error"
        />
        {errors.coverLetter && (
          <p id="coverLetter-error" className="text-red-500 text-sm mt-1">
            {errors.coverLetter.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="resume">{"CV / Resume (PDF, DOC, DOCX, <5MB)"}</Label>
        <Input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          {...register("resume")}
          aria-invalid={!!errors.resume}
          aria-describedby="resume-error"
        />
        {errors.resume && (
          <p id="resume-error" className="text-red-500 text-sm mt-1">
            {errors.resume.message as string}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};
