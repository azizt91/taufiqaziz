import { defineField, defineType } from "sanity";

export default defineType({
  name: "stat",
  title: "Statistics",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Label", type: "string", description: "e.g. Tahun Pengalaman" }),
    defineField({ name: "value", title: "Number Value", type: "number", description: "e.g. 12" }),
    defineField({ name: "suffix", title: "Suffix", type: "string", description: "e.g. + (optional)" }),
    defineField({
      name: "icon",
      title: "Lucide Icon Name",
      type: "string",
      description: "e.g. Briefcase, Network, Award, Rocket",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "value" },
  },
});
