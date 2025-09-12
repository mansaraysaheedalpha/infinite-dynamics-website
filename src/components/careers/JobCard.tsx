// src/components/careers/JobCard.tsx
"use client";

import Link from "next/link";
import { Motion } from "../layout/Motion";
import { ArrowRight } from "lucide-react";
import { SanityJob } from "@/types";

const JobCard = ({ job, index }: { job: SanityJob; index: number }) => {
  return (
    <Motion
      key={job.slug.current}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        href={`/careers/${job.slug}`}
        className="block bg-card border rounded-lg p-6 transition-all group hover:border-brand-yellow hover:shadow-lg"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-foreground group-hover:text-brand-yellow transition-colors">
              {job.title}
            </h3>
            <p className="text-muted-foreground mt-1">
              {job.department} &middot; {job.location}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <span className="text-right text-muted-foreground">{job.type}</span>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-yellow" />
          </div>
        </div>
      </Link>
    </Motion>
  );
};

export default JobCard;
