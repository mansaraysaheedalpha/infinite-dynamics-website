// src/components/careers/JobListings.tsx
"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "./JobCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SanityJob } from "@/types";

const JobListings = ({ jobs }: { jobs: SanityJob[] }) => {
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
   const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const departmentMatch =
        departmentFilter === "All" || job.department === departmentFilter;
      const locationMatch =
        locationFilter === "All" || job.location === locationFilter;
      const searchMatch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase());
      return departmentMatch && locationMatch && searchMatch;
    });
  }, [jobs, departmentFilter, locationFilter, searchTerm]);

   const departments = [
     "All",
     ...Array.from(new Set(jobs.map((j) => j.department))),
   ];
   const locations = [
     "All",
     ...Array.from(new Set(jobs.map((j) => j.location))),
   ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Input
            placeholder="Search by job title..."
            className="pl-10 h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Filter by department..." />
          </SelectTrigger>
          <SelectContent>
            {departments.map((d) => (
              <SelectItem key={d} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Filter by location..." />
          </SelectTrigger>
          <SelectContent>
            {locations.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard key={job._id} job={job} index={index} />
            ))
          ) : (
            <p className="text-center text-muted-foreground py-10">
              No open positions match your criteria. Please check back later.
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobListings;
