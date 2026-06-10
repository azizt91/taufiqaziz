"use client";

import { useEffect, useRef } from "react";
import { Settings2 } from "lucide-react";
import { Skill } from "@/lib/queries";

interface SkillsSectionProps {
  skills: Skill[];
}

const defaultSkills: Skill[] = [
  { _id: "1", category: "Telekomunikasi & Jaringan", name: "FTTH & Open Access Network", progress: 90, order: 1 },
  { _id: "2", category: "Telekomunikasi & Jaringan", name: "Project Control & Monitoring", progress: 85, order: 2 },
  { _id: "3", category: "Telekomunikasi & Jaringan", name: "Quality Control", progress: 88, order: 3 },
  { _id: "4", category: "Telekomunikasi & Jaringan", name: "Vendor Management", progress: 80, order: 4 },
  { _id: "5", category: "Networking", name: "MikroTik", progress: 85, order: 5 },
  { _id: "6", category: "Networking", name: "TCP/IP & Routing", progress: 80, order: 6 },
  { _id: "7", category: "Networking", name: "Troubleshooting", progress: 82, order: 7 },
  { _id: "8", category: "Web Development", name: "Laravel (PHP)", progress: 75, order: 8 },
  { _id: "9", category: "Web Development", name: "MySQL", progress: 70, order: 9 },
  { _id: "10", category: "Web Development", name: "HTML, CSS, JavaScript", progress: 72, order: 10 },
];

function SkillBar({ name, progress }: { name: string; progress: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setTimeout(() => {
            if (fillRef.current) {
              fillRef.current.style.width = `${progress}%`;
            }
          }, 200);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div ref={barRef} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-cyan-400 text-xs font-medium">{progress}%</span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  // Group by category
  const grouped = displaySkills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <section id="keahlian" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <Settings2 className="w-5 h-5" />
          </div>
          KEAHLIAN
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category} className="glass-card rounded-xl p-6 border border-slate-700/50">
              {/* Category title */}
              <h3 className="text-cyan-400 font-bold text-base mb-5 pb-3 border-b border-slate-700/50">
                {category}
              </h3>
              <div className="space-y-4">
                {grouped[category].map((skill) => (
                  <SkillBar
                    key={skill._id}
                    name={skill.name}
                    progress={skill.progress}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
