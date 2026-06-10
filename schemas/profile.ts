import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "firstName", title: "First Name", type: "string" }),
    defineField({ name: "lastName", title: "Last Name", type: "string", description: "Usually displayed in accent color" }),
    defineField({
      name: "roles",
      title: "Roles / Titles",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. Project Controller Region, Network Administrator, Web Developer",
    }),
    defineField({
      name: "heroImage",
      title: "Hero / Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutText",
      title: "About Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "resumeLink", title: "Resume/CV Download URL", type: "url" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number (with country code)", type: "string", description: "e.g. 6281914170701" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
  ],
  preview: {
    select: { title: "name", media: "heroImage" },
  },
});
