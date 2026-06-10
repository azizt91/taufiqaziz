"use client";

import Image from "next/image";
import { MessageCircle, Mail, MapPin, Link2, GitBranch, Share2 } from "lucide-react";
import { Profile } from "@/lib/queries";

interface FooterProps {
  profile: Profile | null;
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsapp = profile?.whatsappNumber ?? "6281941700701";
  const email = profile?.email ?? "azizt91@gmail.com";
  const location = profile?.location ?? "Tegal, Jawa Tengah";

  return (
    <footer id="kontak" className="bg-slate-900 border-t border-slate-800">
      {/* CTA Bar */}
      <div className="bg-gradient-to-r from-slate-800 via-cyan-900/30 to-slate-800 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* CTA Text */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Tertarik untuk bekerja sama?
              </h2>
              <p className="text-slate-400">
                Saya siap membantu perusahaan Anda mencapai hasil terbaik.
              </p>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 glass-card px-4 py-3 rounded-xl border border-slate-700/50 hover:border-cyan-400/40 transition-all hover:-translate-y-0.5 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">
                    {whatsapp.startsWith("62") ? "0" + whatsapp.slice(2) : whatsapp}
                  </p>
                  <p className="text-slate-400 text-xs">WhatsApp</p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2.5 glass-card px-4 py-3 rounded-xl border border-slate-700/50 hover:border-cyan-400/40 transition-all hover:-translate-y-0.5 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">{email}</p>
                  <p className="text-slate-400 text-xs">Email</p>
                </div>
              </a>

              <div className="flex items-center gap-2.5 glass-card px-4 py-3 rounded-xl border border-slate-700/50 text-sm">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-xs">{location}</p>
                  <p className="text-slate-400 text-xs">Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 overflow-hidden">
              <Image src="/icon.png" alt="TA" width={32} height={32} className="object-cover" />
            </div>
            <div>
              <p className="font-bold text-sm text-white leading-none">TAUFIQ AZIZ</p>
              <p className="text-xs text-cyan-400 leading-none">
                Project Controller Region | Network | Web Dev
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs text-center">
            © {currentYear} Taufiq Aziz. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <Link2 className="w-4 h-4" />
              </a>
            )}
            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <GitBranch className="w-4 h-4" />
              </a>
            )}
            {profile?.instagram && (
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
              >
                <Share2 className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
