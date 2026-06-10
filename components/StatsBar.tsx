"use client";

import { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";
import { Stat } from "@/lib/queries";

interface StatsBarProps {
  stats: Stat[];
}

const defaultStats: Stat[] = [
  { _id: "1", title: "Tahun Pengalaman", value: 12, suffix: "+", icon: "Briefcase", order: 1 },
  { _id: "2", title: "Proyek Besar", value: 5, suffix: "+", icon: "Network", order: 2 },
  { _id: "3", title: "Sertifikasi Profesional", value: 2, suffix: "", icon: "Award", order: 3 },
  { _id: "4", title: "Usaha & Layanan", value: 3, suffix: "", icon: "Rocket", order: 4 },
];

/**
 * AnimatedCounter — smooth count-up dengan easing effect.
 * - Durasi tetap 1.5s apapun nilai-nya (cocok untuk 2, 3, 5, 12)
 * - Menggunakan requestAnimationFrame untuk smooth 60fps
 * - Dipicu oleh IntersectionObserver saat card masuk viewport
 */
function AnimatedCounter({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setVisible(true);

          // Delay animasi per-card untuk efek stagger
          setTimeout(() => {
            const duration = 1500; // ms — konsisten apapun nilai
            const startTime = performance.now();

            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease-out cubic: lambat di akhir → terasa dramatis
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * value));

              if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
              } else {
                setCount(value); // pastikan tepat di angka akhir
              }
            };

            rafRef.current = requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, delay]);

  return (
    <div ref={ref} className="relative">
      {/* Angka counter */}
      <span
        className={`text-4xl sm:text-3xl lg:text-4xl font-black text-white transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ display: "inline-block", transition: "opacity 0.4s, transform 0.4s" }}
      >
        {count}
        <span className="text-cyan-400">{suffix}</span>
      </span>
    </div>
  );
}

// Dynamic Lucide icon renderer
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return <LucideIcons.Star className={className} />;
  return <Icon className={className} />;
}

export default function StatsBar({ stats }: StatsBarProps) {
  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <section className="py-8 bg-slate-900 border-y border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayStats.map((stat, index) => (
            <div
              key={stat._id}
              className="glass-card rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,211,238,0.1)] group"
            >
              {/* Icon dengan glow pulse on hover */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                <DynamicIcon name={stat.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix || ""}
                  delay={index * 120} // stagger 120ms antar card
                />
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-tight">
                  {stat.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
