// src/components/get-started/ProjectIntakeForm.tsx

"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { Motion } from "../layout/Motion";
import { TProjectIntake, projectIntakeSchema } from "@/lib/validators";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // 1. Import new form components
import { CheckCircle, Loader2 } from "lucide-react";

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

  // 2. The useForm hook is now assigned to a 'form' constant
  const form = useForm<TProjectIntake>({
    resolver: zodResolver(projectIntakeSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      projectName: "",
      projectDescription: "",
    },
  });

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as (keyof TProjectIntake)[], {
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
    console.log(data);
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

      {/* Stepper UI remains the same */}
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
              className={`ml-2 font-semibold ${
                currentStep >= index
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step.name}
            </p>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-border ml-4" />
            )}
          </div>
        ))}
      </div>

      {/* 3. The form is now wrapped in the Form provider */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            <Motion
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* 4. Each input is now wrapped in a FormField for proper state management */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {currentStep === 2 && (
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Budget (USD)</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a budget range..." />
                          </SelectTrigger>
                        </FormControl>
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
                          <SelectItem value="> $50,000">
                            &gt; $50,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </Motion>
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
      </Form>
    </div>
  );
};

export default ProjectIntakeForm;
