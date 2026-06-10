import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Services / Business",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service Name", type: "string", description: "e.g. SELINGGONET" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 2 }),
    defineField({
      name: "icon",
      title: "Lucide Icon Name",
      type: "string",
      description: "e.g. Wifi, Heart, Code, Globe",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
