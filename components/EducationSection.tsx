"use client";

import { GraduationCap } from "lucide-react";
import { Education } from "@/lib/queries";

interface EducationSectionProps {
  educations: Education[];
}

const defaultEducations: Education[] = [
  {
    _id: "1",
    institution: "UNIVERSITAS HARKAT NEGERI TEGAL",
    degree: "Sarjana Teknik Informatika (S. Kom.)",
    yearRange: "2021 – 2025",
    notes:
      "Judul Skripsi:\n• Implementasi Sistem Informasi Pembayaran Internet RT/RW Net Berbasis Web Studi Kasus Selinggonet di Pemalang",
    order: 1,
  },
  {
    _id: "2",
    institution: "SMA NEGERI 1 ULUJAMI",
    degree: "Jurusan IPS",
    yearRange: "2005 – 2008",
    notes: "",
    order: 2,
  },
];

export default function EducationSection({ educations }: EducationSectionProps) {
  const displayEducations =
    educations.length > 0 ? educations : defaultEducations;

  return (
    <section id="pendidikan" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <GraduationCap className="w-5 h-5" />
          </div>
          PENDIDIKAN
        </div>

        <div className="space-y-4">
          {displayEducations.map((edu) => (
            <div
              key={edu._id}
              className="glass-card rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(34,211,238,0.07)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                {/* Left: Institution + Degree */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base tracking-wide mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-cyan-400/80 text-sm font-medium mb-1">
                    {edu.degree}
                  </p>
                  {edu.notes && (
                    <div className="mt-2 space-y-1">
                      {edu.notes.split("\n").map((line, i) => {
                        const isBullet = line.startsWith("•");
                        const isLabel = line.endsWith(":");
                        return (
                          <p
                            key={i}
                            className={`text-sm leading-relaxed ${
                              isBullet
                                ? "text-slate-400 pl-3"
                                : isLabel
                                ? "text-slate-300 font-medium"
                                : "text-slate-400"
                            }`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Right: Year range badge */}
                <div className="sm:ml-6 flex-shrink-0">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-lg whitespace-nowrap">
                    {edu.yearRange}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
