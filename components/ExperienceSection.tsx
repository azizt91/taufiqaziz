"use client";

import { Briefcase } from "lucide-react";
import { Experience } from "@/lib/queries";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    _id: "1",
    yearRange: "2024 – Sekarang",
    jobTitle: "Project Controller Region (Leader City)",
    company: "PT Link Net Tbk",
    description:
      "Mengendalikan pelaksanaan proyek FTTH, Open Access, dan infrastruktur telekomunikasi di wilayah Tegal, Pemalang dan Pekalongan.",
    order: 1,
  },
  {
    _id: "2",
    yearRange: "2020 – 2024",
    jobTitle: "Inspector NRO (New Roll Out)",
    company: "PT Link Net Tbk",
    description:
      "Melakukan inspeksi, quality control pembangunan jaringan FTTH, monitoring progres, dan acceptance pekerjaan.",
    order: 2,
  },
  {
    _id: "3",
    yearRange: "2013 – 2019",
    jobTitle: "PT Industri Telekomunikasi Indonesia (INTI)",
    company: "Waspang FTTH / Teknisi FTTH",
    description:
      "Terlibat dalam pembangunan dan migrasi jaringan FTTH Telkom di Magelang, Semarang, dan Pekalongan.",
    order: 3,
  },
  {
    _id: "4",
    yearRange: "2012 – 2013",
    jobTitle: "Staff Operasional",
    company: "Fotocopy Brayan Usaha 1610",
    description:
      "Pelayanan pelanggan, administrasi, fotokopi, pengetikan, dan penjilidan.",
    order: 4,
  },
  {
    _id: "5",
    yearRange: "2011 – 2012",
    jobTitle: "Operator Warnet",
    company: "EJ.Net Tangerang",
    description:
      "Operasional warnet, pemeliharaan komputer, dan troubleshooting jaringan.",
    order: 5,
  },
];

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const displayExperiences =
    experiences.length > 0 ? experiences : defaultExperiences;

  return (
    <section
      id="pengalaman"
      className="py-20 bg-slate-800/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <Briefcase className="w-5 h-5" />
          </div>
          PENGALAMAN KERJA
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {displayExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp._id}
                  className="relative md:grid md:grid-cols-2 md:gap-8 md:mb-10"
                >
                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-slate-900 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                  </div>

                  {isLeft ? (
                    <>
                      {/* Left content */}
                      <div className="md:text-right md:pr-10">
                        <div className="glass-card rounded-xl p-5 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                          <span className="inline-block text-cyan-400 text-sm font-semibold mb-2">
                            {exp.yearRange}
                          </span>
                          <h3 className="text-white font-bold text-base">
                            {exp.jobTitle}
                          </h3>
                          <p className="text-cyan-400/80 text-sm font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      {/* Right content */}
                      <div className="md:text-left md:pl-10">
                        <div className="glass-card rounded-xl p-5 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                          <span className="inline-block text-cyan-400 text-sm font-semibold mb-2">
                            {exp.yearRange}
                          </span>
                          <h3 className="text-white font-bold text-base">
                            {exp.jobTitle}
                          </h3>
                          <p className="text-cyan-400/80 text-sm font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
