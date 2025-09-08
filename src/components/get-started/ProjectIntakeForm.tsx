// src/components/get-started/ProjectIntakeForm.tsx

"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { TProjectIntake, projectIntakeSchema } from "@/lib/validators";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
// We will create this server action next
// import { sendProjectBrief } from "@/app/actions";

const steps = [
  { id: 1, name: "Your Details", fields: ["fullName", "companyName", "email"] },
  {
    id: 2,
    name: "Project Info",
    fields: ["projectName", "service", "projectDescription"],
  },
  { id: 3, name: "Budget", fields: ["budget"] },
];

const ProjectIntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    control, // For the Select component
  } = useForm<TProjectIntake>({
    resolver: zodResolver(projectIntakeSchema),
  });

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as (keyof TProjectIntake)[], {
      shouldFocus: true,
    });
    if (!output) return;
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<TProjectIntake> = async (data) => {
    setSubmissionStatus("submitting");
    console.log(data); // For now, we'll just log the data
    // const result = await sendProjectBrief(data);
    // setSubmissionStatus(result.success ? "success" : "error");

    // Simulating API call
    setTimeout(() => setSubmissionStatus("success"), 2000);
  };

  if (submissionStatus === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h2 className="mt-4 text-3xl font-bold text-foreground">Thank You!</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Your project brief has been submitted. Our team will review it and get
          back to you within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Let&apos;s Talk About Your Project
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          This helps us understand your needs so we can have a productive first
          conversation.
        </p>
      </div>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${
                currentStep >= index
                  ? "bg-brand-yellow text-brand-primary"
                  : "bg-card-foreground/20 text-muted-foreground"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`ml-2 font-semibold ${currentStep >= index ? "text-foreground" : "text-muted-foreground"}`}
            >
              {step.name}
            </p>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-border ml-4" />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" {...register("fullName")} />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="companyName">Company Name (Optional)</Label>
                  <Input id="companyName" {...register("companyName")} />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input id="projectName" {...register("projectName")} />
                  {errors.projectName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.projectName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Service Needed</Label>
                  {/* Note: This requires a custom component setup for react-hook-form with shadcn/ui Select */}
                  <Select
                    onValueChange={(value) =>
                      control._setValue("service", value)
                    }
                    name="service"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web & Mobile Development">
                        Web & Mobile Development
                      </SelectItem>
                      <SelectItem value="UI/UX & Graphics Design">
                        UI/UX & Graphics Design
                      </SelectItem>
                      <SelectItem value="Cloud & DevOps">
                        Cloud & DevOps
                      </SelectItem>
                      <SelectItem value="Corporate Training">
                        Corporate Training
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="projectDescription">
                    Project Description
                  </Label>
                  <Textarea
                    id="projectDescription"
                    rows={6}
                    {...register("projectDescription")}
                  />
                  {errors.projectDescription && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <Label>Estimated Budget (USD)</Label>
                <Select
                  onValueChange={(value) => control._setValue("budget", value)}
                  name="budget"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a budget range..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="< $5,000">&lt; $5,000</SelectItem>
                    <SelectItem value="$5,000 - $10,000">
                      $5,000 - $10,000
                    </SelectItem>
                    <SelectItem value="$10,000 - $25,000">
                      $10,000 - $25,000
                    </SelectItem>
                    <SelectItem value="$25,000 - $50,000">
                      $25,000 - $50,000
                    </SelectItem>
                    <SelectItem value="> $50,000">&gt; $50,000</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 pt-5">
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={prevStep}
              variant="outline"
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={submissionStatus === "submitting"}
              >
                {submissionStatus === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit Project Brief"
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectIntakeForm;
