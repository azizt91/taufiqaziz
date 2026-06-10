import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Telekomunikasi & Jaringan, Networking, Web Development",
    }),
    defineField({ name: "name", title: "Skill Name", type: "string" }),
    defineField({
      name: "progress",
      title: "Progress (%)",
      type: "number",
      description: "Value between 0 and 100",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [
    { title: "Category then Order", name: "categoryOrder", by: [{ field: "category", direction: "asc" }, { field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
