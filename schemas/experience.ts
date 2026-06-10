import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({ name: "yearRange", title: "Year Range", type: "string", description: "e.g. 2024 – Sekarang" }),
    defineField({ name: "jobTitle", title: "Job Title", type: "string" }),
    defineField({ name: "company", title: "Company Name", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "jobTitle", subtitle: "company" },
  },
});
