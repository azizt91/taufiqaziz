import { getAllPortfolioData } from "@/lib/queries";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// ISR: revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  const {
    profile,
    personalInfo,
    stats,
    experiences,
    educations,
    projects,
    skills,
    certifications,
    services,
  } = await getAllPortfolioData();

  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar resumeLink={profile?.resumeLink} />
      <HeroSection profile={profile} />
      <StatsBar stats={stats} />
      <AboutSection profile={profile} personalInfo={personalInfo} />
      <ExperienceSection experiences={experiences} />
      <EducationSection educations={educations} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <CertificationsSection certifications={certifications} />
      <ServicesSection services={services} />
      <Footer profile={profile} />
      <WhatsAppFloat phoneNumber={profile?.whatsappNumber ?? "6281914170701"} />
    </main>
  );
}
