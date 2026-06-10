"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { Certification } from "@/lib/queries";
import { urlFor } from "@/lib/urlFor";

interface CertificationsSectionProps {
  certifications: Certification[];
}

// Mapping publisher → logo lokal
const localLogoMap: Record<string, { src: string; bg: string }> = {
  BNSP: { src: "/bnsp.png", bg: "bg-white" },
  MikroTik: { src: "/mikrotik_logo.svg", bg: "bg-white" },
};

const defaultCertifications: Certification[] = [
  {
    _id: "1",
    title: "JUNIOR WEB DEVELOPER BNSP",
    publisher: "BNSP",
    publisherLogo: null as unknown as Certification["publisherLogo"],
    year: 2025,
    order: 1,
  },
  {
    _id: "2",
    title: "MIKROTIK CERTIFIED NETWORK ASSOCIATE (MTCNA)",
    publisher: "MikroTik",
    publisherLogo: null as unknown as Certification["publisherLogo"],
    year: 2025,
    order: 2,
  },
];

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  const displayCerts =
    certifications.length > 0 ? certifications : defaultCertifications;

  return (
    <section id="sertifikasi" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <Award className="w-5 h-5" />
          </div>
          SERTIFIKASI
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayCerts.map((cert) => {
            // Prioritaskan logo Sanity, fallback ke logo lokal berdasarkan publisher
            const sanityLogoUrl = cert.publisherLogo
              ? urlFor(cert.publisherLogo).width(120).height(120).fit("crop").url()
              : null;

            const localLogo = localLogoMap[cert.publisher];

            return (
              <div
                key={cert._id}
                className="glass-card rounded-xl p-5 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)] flex gap-4 items-center"
              >
                {/* Publisher Logo */}
                <div
                  className={`w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 p-2 ${
                    sanityLogoUrl || localLogo ? localLogo?.bg || "bg-white" : "bg-slate-700"
                  }`}
                >
                  {sanityLogoUrl ? (
                    <Image
                      src={sanityLogoUrl}
                      alt={cert.publisher}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : localLogo ? (
                    <Image
                      src={localLogo.src}
                      alt={cert.publisher}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : (
                    <Award className="w-8 h-8 text-cyan-400" />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-1">{cert.publisher}</p>
                  <span className="inline-block px-2 py-0.5 text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full font-medium">
                    {cert.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
