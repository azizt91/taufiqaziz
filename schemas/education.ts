import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education / Pendidikan",
  type: "document",
  fields: [
    defineField({ name: "institution", title: "Nama Institusi", type: "string", description: "e.g. Universitas Harkat Negeri Tegal" }),
    defineField({ name: "degree", title: "Gelar / Jurusan", type: "string", description: "e.g. Sarjana Teknik Informatika (S. Kom.)" }),
    defineField({ name: "yearRange", title: "Tahun", type: "string", description: "e.g. 2021 – 2025" }),
    defineField({ name: "notes", title: "Catatan Tambahan", type: "text", rows: 3, description: "e.g. Judul Skripsi" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "institution", subtitle: "yearRange" },
  },
});
