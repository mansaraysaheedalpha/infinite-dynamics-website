// src/components/careers/JobCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SanityJob } from "@/types";

const JobCard = ({ job, index }: { job: SanityJob; index: number }) => {
  return (
    // 1. Your fix: Use the unique _id for the motion key
    <motion.div
      key={job._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {/* 2. The related fix: Use slug.current for the href */}
      <Link
        href={`/careers/${job.slug.current}`}
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
            {/* 3. This will now work because of our fix in types/index.ts */}
            <span className="text-right text-muted-foreground">{job.type}</span>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand-yellow" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default JobCard;
