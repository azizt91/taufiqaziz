"use client";

import { User, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Profile, PersonalInfo } from "@/lib/queries";
import { PortableText } from "next-sanity";

interface AboutSectionProps {
  profile: Profile | null;
  personalInfo: PersonalInfo | null;
}

const defaultAbout = [
  "Sarjana Teknik Informatika dengan pengalaman lebih dari 12 tahun di bidang telekomunikasi, pembangunan jaringan FTTH (Fiber To The Home), dan pengendalian proyek infrastruktur jaringan.",
  "Berpengalaman sebagai Inspector NRO dan Project Controller Region dalam mengelola progres proyek, quality control, koordinasi vendor, serta memastikan pencapaian target pekerjaan sesuai standar perusahaan.",
  "Selain itu, saya juga mengelola usaha RT/RW Net berbasis MikroTik, mengembangkan aplikasi web berbasis Laravel, serta menyediakan layanan undangan digital berbasis website.",
];

export default function AboutSection({ profile, personalInfo }: AboutSectionProps) {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    try {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const infoItems = [
    {
      icon: <User className="w-4 h-4 text-cyan-400" />,
      label: "Nama",
      value: personalInfo?.fullName || profile?.name || "Taufiq Aziz",
    },
    {
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      label: "Tempat, Tanggal Lahir",
      value: personalInfo
        ? `${personalInfo.birthplace}, ${formatDate(personalInfo.birthdate)}`
        : "Pemalang, 16 Januari 1991",
    },
    {
      icon: <MapPin className="w-4 h-4 text-cyan-400" />,
      label: "Alamat",
      value:
        personalInfo?.address ||
        "Desa Dukuhdamu Rt.03/Rw.01\nKec. Lebaksiu, Tegal",
    },
    {
      icon: <Phone className="w-4 h-4 text-cyan-400" />,
      label: "Telepon",
      value: personalInfo?.phone || profile?.whatsappNumber || "0819-1417-0701",
    },
    {
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      label: "Email",
      value: personalInfo?.email || profile?.email || "azizt91@gmail.com",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <User className="w-5 h-5" />
          </div>
          TENTANG SAYA
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Left: About Text ── */}
          <div className="space-y-4">
            {profile?.aboutText ? (
              <div className="text-slate-400 leading-relaxed space-y-4 prose prose-invert max-w-none">
                <PortableText value={profile.aboutText} />
              </div>
            ) : (
              defaultAbout.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))
            )}
          </div>

          {/* ── Right: Personal Info Card ── */}
          <div className="glass-card rounded-2xl p-6 border border-slate-700/50 space-y-4">
            {infoItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start pb-4 border-b border-slate-700/40 last:border-b-0 last:pb-0"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-slate-200 text-sm font-medium whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
