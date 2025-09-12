// src/components/careers/JobDetailClientView.tsx

"use client";
import { Motion } from "../layout/Motion";
import PortableTextComponent from "../PortableTextComponent";
import { Button } from "@/components/ui/Button";
import { MapPin, Building, Clock } from "lucide-react"; // Added missing icon imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ApplicationForm } from "./ApplicationForm";
import { ShareButton } from "./ShareButton";
import { SanityJob } from "@/types";

const JobDetailClientView = ({ job }: { job: SanityJob }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="bg-background text-foreground">
      {/* === Immersive Animated Header === */}
      <Motion
        type="section"
        className="relative py-24 md:py-32 text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-brand-primary z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-transparent to-brand-secondary opacity-50 animate-pulse-slow" />
        </div>
        <div className="container mx-auto relative z-10">
          <p className="text-brand-yellow font-semibold">{job.department}</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold">
            {job.title}
          </h1>
        </div>
      </Motion>

      {/* === Main Content Layout === */}
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- Left Column: Job Description --- */}
          <Motion
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* === Floating Details Panel (This was the missing piece) === */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-6 bg-card border rounded-lg">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-brand-yellow flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">
                    {job.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-6 w-6 text-brand-yellow flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-semibold text-foreground">
                    {job.department}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-brand-yellow flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-semibold text-foreground">{job.type}</p>
                </div>
              </div>
            </div>

            {/* Art-Directed Typography for Job Description */}
            <article
              className="prose prose-invert lg:prose-xl max-w-none 
                                prose-headings:text-foreground prose-headings:font-bold 
                                prose-p:text-muted-foreground 
                                prose-strong:text-foreground prose-ul:text-muted-foreground
                                prose-ol:text-muted-foreground prose-li:marker:text-brand-yellow"
            >
              <PortableTextComponent value={job.description} />
            </article>
          </Motion>

          {/* --- Right Column: Sticky Apply Card --- */}
          <Motion
            type="aside"
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="sticky top-28 bg-card border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground">
                Apply for this role
              </h3>
              <p className="mt-2 text-muted-foreground">
                Ready to make an impact? We&apos;d love to hear from you.
              </p>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full mt-6">
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Apply for: {job.title}</DialogTitle>
                    <DialogDescription>
                      Please fill out the form below. We look forward to
                      reviewing your application.
                    </DialogDescription>
                  </DialogHeader>
                  {/* 4. Pass the close function to the form */}
                  <ApplicationForm
                    jobTitle={job.title}
                    closeDialog={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="border-t pt-6">
              <ShareButton title={job.title} slug={job.slug.current} />
            </div>
          </Motion>
        </div>
      </main>
    </div>
  );
};

export default JobDetailClientView;
