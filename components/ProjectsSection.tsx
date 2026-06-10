"use client";

import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { Project } from "@/lib/queries";
import { urlFor } from "@/lib/urlFor";

interface ProjectsSectionProps {
  projects: Project[];
}

// Default projects dengan thumbnail lokal dan link live demo
const defaultProjects: Project[] = [
  {
    _id: "1",
    title: "Sistem Informasi Pembayaran Internet RT/RW Net",
    image: null as unknown as Project["image"],
    techStack: [],
    previewLink: "https://selinggonet.web.id/",
    order: 1,
  },
  {
    _id: "2",
    title: "Aplikasi Kasir Berbasis Web (Point Of Sale)",
    image: null as unknown as Project["image"],
    techStack: [],
    previewLink: "https://pos.suratulem.my.id/",
    order: 2,
  },
  {
    _id: "3",
    title: "Aplikasi Pencatat Keuangan (Finance Management)",
    image: null as unknown as Project["image"],
    techStack: [],
    previewLink: "https://artoku.suratulem.my.id/",
    order: 3,
  },
  {
    _id: "4",
    title: "Aplikasi Manajemen Gudang (Warehouse Management System)",
    image: null as unknown as Project["image"],
    techStack: [],
    previewLink: "https://gudang.apikcorporation.my.id/",
    order: 4,
  },
];

// Thumbnail lokal untuk default projects (urutan sesuai defaultProjects)
const localThumbnails: string[] = [
  "/thumbnail_selinggonet.png",
  "/thumbnail_pos.png",
  "/thumbnail_artoku.png",
  "/thumbnail_wms.png",
];

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const isUsingDefault = projects.length === 0;
  const displayProjects = isUsingDefault ? defaultProjects : projects;

  return (
    <section id="proyek" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-title">
          <div className="section-title-icon">
            <Code2 className="w-5 h-5" />
          </div>
          PROYEK IT & APLIKASI
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayProjects.map((project, index) => {
            // Sanity image jika ada, fallback ke thumbnail lokal
            const imageUrl = project.image
              ? urlFor(project.image).width(400).height(250).fit("crop").url()
              : isUsingDefault
              ? localThumbnails[index]
              : null;

            return (
              <div
                key={project._id}
                className="group glass-card rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,211,238,0.1)] flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-slate-600" />
                    </div>
                  )}
                  {/* Hover overlay dengan tombol preview */}
                  {project.previewLink && (
                    <div className="absolute inset-0 bg-slate-900/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-cyan-400 text-slate-900 font-bold text-sm rounded-lg px-5 py-2.5 hover:bg-cyan-300 transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Preview
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-sm leading-snug line-clamp-3 flex-1">
                    {project.title}
                  </h3>
                  {/* Tombol Preview di bawah judul */}
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1.5 text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Lihat Preview
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
