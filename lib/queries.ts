import { client } from "./sanity";

// ─── TypeScript Interfaces ─────────────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  heroImage: SanityImage;
  aboutText: { _type: string; children: { text: string }[] }[];
  resumeLink: string;
  whatsappNumber: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface PersonalInfo {
  fullName: string;
  birthplace: string;
  birthdate: string;
  address: string;
  phone: string;
  email: string;
}

export interface Stat {
  _id: string;
  title: string;
  value: number;
  suffix: string;
  icon: string;
  order: number;
}

export interface Experience {
  _id: string;
  yearRange: string;
  jobTitle: string;
  company: string;
  description: string;
  order: number;
}

export interface Project {
  _id: string;
  title: string;
  image: SanityImage;
  techStack: string[];
  previewLink: string;
  order: number;
}

export interface Skill {
  _id: string;
  category: string;
  name: string;
  progress: number;
  order: number;
}

export interface Certification {
  _id: string;
  title: string;
  publisher: string;
  publisherLogo: SanityImage;
  year: number;
  order: number;
}

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  yearRange: string;
  notes: string;
  order: number;
}

export interface PortfolioData {
  profile: Profile | null;
  personalInfo: PersonalInfo | null;
  stats: Stat[];
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  services: Service[];
}

// ─── GROQ Queries ─────────────────────────────────────────────────────────
const profileQuery = `*[_type == "profile"][0]{
  name, firstName, lastName, roles,
  heroImage, aboutText, resumeLink,
  whatsappNumber, email, location,
  github, linkedin, instagram
}`;

const personalInfoQuery = `*[_type == "personalInfo"][0]{
  fullName, birthplace, birthdate,
  address, phone, email
}`;

const statsQuery = `*[_type == "stat"] | order(order asc){
  _id, title, value, suffix, icon, order
}`;

const experiencesQuery = `*[_type == "experience"] | order(order asc){
  _id, yearRange, jobTitle, company, description, order
}`;

const projectsQuery = `*[_type == "project"] | order(order asc){
  _id, title, image, techStack, previewLink, order
}`;

const skillsQuery = `*[_type == "skill"] | order(category asc, order asc){
  _id, category, name, progress, order
}`;

const certificationsQuery = `*[_type == "certification"] | order(order asc){
  _id, title, publisher, publisherLogo, year, order
}`;

const educationsQuery = `*[_type == "education"] | order(order asc){
  _id, institution, degree, yearRange, notes, order
}`;

const servicesQuery = `*[_type == "service"] | order(order asc){
  _id, title, description, icon, order
}`;

// ─── Main Data Fetcher ────────────────────────────────────────────────────
export async function getAllPortfolioData(): Promise<PortfolioData> {
  const [profile, personalInfo, stats, experiences, educations, projects, skills, certifications, services] =
    await Promise.all([
      client.fetch<Profile | null>(profileQuery),
      client.fetch<PersonalInfo | null>(personalInfoQuery),
      client.fetch<Stat[]>(statsQuery),
      client.fetch<Experience[]>(experiencesQuery),
      client.fetch<Education[]>(educationsQuery),
      client.fetch<Project[]>(projectsQuery),
      client.fetch<Skill[]>(skillsQuery),
      client.fetch<Certification[]>(certificationsQuery),
      client.fetch<Service[]>(servicesQuery),
    ]);

  return {
    profile: profile ?? null,
    personalInfo: personalInfo ?? null,
    stats: stats ?? [],
    experiences: experiences ?? [],
    educations: educations ?? [],
    projects: projects ?? [],
    skills: skills ?? [],
    certifications: certifications ?? [],
    services: services ?? [],
  };
}
