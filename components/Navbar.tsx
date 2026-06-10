"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Saya" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#proyek", label: "Proyek" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#sertifikasi", label: "Sertifikasi" },
  { href: "#bisnis", label: "Bisnis" },
  { href: "#kontak", label: "Kontak" },
];

interface NavbarProps {
  resumeLink?: string | null;
}

export default function Navbar({ resumeLink }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 overflow-hidden">
              <Image src="/icon.png" alt="TA Logo" width={36} height={36} className="object-cover" />
            </div>
            <div>
              <p className="font-bold text-sm text-white leading-tight">TAUFIQ AZIZ</p>
              <p className="text-xs text-cyan-400 leading-tight">Portfolio</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="hidden lg:flex">
            <a
              href="/CV Taufiq Aziz.pdf"
              download="CV Taufiq Aziz.pdf"
              className="btn-primary text-sm"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV Taufiq Aziz.pdf"
              download="CV Taufiq Aziz.pdf"
              className="btn-primary mt-2 justify-center text-sm"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
