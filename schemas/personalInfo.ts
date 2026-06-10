import { defineField, defineType } from "sanity";

export default defineType({
  name: "personalInfo",
  title: "Personal Information",
  type: "document",
  fields: [
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({ name: "birthplace", title: "Birthplace", type: "string", description: "e.g. Pemalang" }),
    defineField({ name: "birthdate", title: "Birth Date", type: "date", options: { dateFormat: "DD MMMM YYYY" } }),
    defineField({ name: "address", title: "Address", type: "text", rows: 2 }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
  ],
  preview: {
    select: { title: "fullName" },
  },
});
