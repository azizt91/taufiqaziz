import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Certification Title", type: "string" }),
    defineField({ name: "publisher", title: "Publisher / Issuer", type: "string" }),
    defineField({
      name: "publisherLogo",
      title: "Publisher Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "year", title: "Year Issued", type: "number", description: "e.g. 2025" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "publisher", media: "publisherLogo" },
  },
});
