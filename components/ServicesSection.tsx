"use client";

import * as LucideIcons from "lucide-react";
import { Store } from "lucide-react";
import { Service } from "@/lib/queries";

interface ServicesSectionProps {
  services: Service[];
}

const defaultServices: Service[] = [
  {
    _id: "1",
    title: "SELINGGONET",
    description:
      "RT/RW Net Provider. Mengelola layanan internet RT/RW Net berbasis MikroTik, monitoring jaringan dan pelanggan.",
    icon: "Wifi",
    order: 1,
  },
  {
    _id: "2",
    title: "DIGITAL INVITATION",
    description:
      "Undangan Digital Berbasis Website. Menyediakan layanan pembuatan undangan digital modern dan responsif.",
    icon: "Heart",
    order: 2,
  },
  {
    _id: "3",
    title: "FREELANCE WEB DEVELOPER",
    description:
      "Web Aplikasi & Sistem Informasi. Mengembangkan aplikasi web berbasis Laravel dan sistem informasi sesuai kebutuhan.",
    icon: "Code",
    order: 3,
  },
];

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Store className={className} />;
  return <Icon className={className} />;
}


export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section id="bisnis" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <Store className="w-5 h-5" />
          </div>
          USAHA & LAYANAN
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayServices.map((service) => (
            <div
              key={service._id}
              className="glass-card rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.08)] flex gap-4"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <DynamicIcon name={service.icon} className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-cyan-400 font-bold text-sm tracking-wider mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
