import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string" }),
    defineField({
      name: "image",
      title: "Project Screenshot",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Laravel, MySQL, React",
    }),
    defineField({ name: "previewLink", title: "Demo / Preview URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", media: "image" },
  },
});
