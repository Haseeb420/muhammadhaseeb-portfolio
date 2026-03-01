import { Code, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="portfolio-section-animate">
      <SectionHeading>Portfolio</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url ?? "#"}
            target={project.url ? "_blank" : undefined}
            rel={project.url ? "noopener noreferrer" : undefined}
            className="group cursor-pointer block"
          >
            <div className="relative aspect-[4/3] bg-[#2b2b2c] rounded-3xl mb-4 overflow-hidden border border-[#383839]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-[#ffdb70] p-4 rounded-2xl text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <ExternalLink size={24} />
                </div>
              </div>
              <div className="p-8 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#383839] flex items-center justify-center mb-4">
                  <Code size={32} className="text-[#ffdb70]/40" />
                </div>
                <span className="text-[#ffdb70] text-[10px] font-bold tracking-widest uppercase opacity-40">
                  {project.category}
                </span>
              </div>
            </div>
            <h4 className="text-white font-bold group-hover:text-[#ffdb70] transition-colors text-lg">
              {project.title}
            </h4>
            <p className="text-[#d6d6d6]/50 text-xs mt-1 uppercase tracking-widest">
              {project.category}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
