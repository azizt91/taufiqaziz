"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Download, Send } from "lucide-react";
import { Profile } from "@/lib/queries";
import { urlFor } from "@/lib/urlFor";

interface HeroSectionProps {
  profile: Profile | null;
}

// Animated counter khusus untuk badge hero
function HeroBadgeCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    // Mulai animasi setelah komponen mount (hero langsung visible)
    const timer = setTimeout(() => {
      if (started.current) return;
      started.current = true;
      let current = 0;
      const duration = 1800; // ms
      const steps = 60;
      const interval = duration / steps;
      const increment = target / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);
    }, 800); // delay 0.8s setelah page load

    return () => clearTimeout(timer);
  }, [target]);

  return (
    <span ref={ref} className="text-cyan-400 font-black text-xl leading-none">
      {count}
      <span>{suffix}</span>
    </span>
  );
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const profileImageUrl =
    profile?.heroImage
      ? urlFor(profile.heroImage).width(600).height(700).fit("crop").url()
      : "/foto_profile.png";

  const roles = profile?.roles ?? [
    "Project Controller Region",
    "Network Administrator",
    "Web Developer",
  ];

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero_background.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">

          {/* ── Left: Profile Image ── */}
          <div className="flex justify-center order-2 lg:order-1 pt-4 pb-10 lg:pb-0">
            {/*
              pb-10 = ruang untuk badge -bottom-4 agar tidak terpotong
              Wrapper ini memastikan badge terlihat sempurna di mobile
            */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blur-xl animate-pulse-cyan" />

              {/* Image container */}
              <div className="relative w-56 h-72 xs:w-64 xs:h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[430px] rounded-2xl overflow-hidden border-2 border-cyan-400/40 animate-float">
                <Image
                  src={profileImageUrl}
                  alt={profile?.name ?? "Taufiq Aziz"}
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Experience badge — sekarang dengan margin yang cukup */}
              <div
                className="absolute -bottom-5 -right-2 sm:-right-4 glass-card rounded-xl px-3 py-2 sm:px-4 sm:py-2 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.25)] z-10"
              >
                <HeroBadgeCounter target={12} suffix="+" />
                <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-5 lg:space-y-6 order-1 lg:order-2">
            <div className="animate-fadeInUp">
              <p className="text-slate-400 text-base lg:text-lg font-light mb-1">Halo, Saya</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-white">{profile?.firstName ?? "TAUFIQ"} </span>
                <span className="text-cyan-400 cyan-glow-text">
                  {profile?.lastName ?? "AZIZ"}
                </span>
              </h1>
            </div>

            {/* Roles */}
            <div className="animate-fadeInUp delay-100">
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm sm:text-base font-semibold text-slate-300">
                {roles.map((role, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-cyan-400/50">|</span>}
                    <span className="hover:text-cyan-400 transition-colors cursor-default">
                      {role}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl animate-fadeInUp delay-200">
              Profesional di bidang telekomunikasi, jaringan FTTH, pengendalian proyek,
              administrasi jaringan dan pengembangan web dengan pengalaman{" "}
              <strong className="text-slate-200">lebih dari 12 tahun.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 animate-fadeInUp delay-300">
              <a
                href="/CV Taufiq Aziz.pdf"
                download="CV Taufiq Aziz.pdf"
                className="btn-primary text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href={`https://wa.me/${profile?.whatsappNumber ?? "6281941700701"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                Hubungi Saya
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-1 animate-fadeInUp delay-400">
              {profile?.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  GitHub
                </a>
              )}
              {profile?.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              )}
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {profile.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-cyan-400 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>
    </section>
  );
}
