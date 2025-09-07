// schemaTypes/job.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "job",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: ["Engineering", "Design", "Marketing", "Product", "Operations"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Freetown, Sierra Leone",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-time", "Part-time", "Contract", "Internship"],
        layout: "radio",
      },
      initialValue: "Full-time",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
