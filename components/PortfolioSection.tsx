import { Monitor } from "lucide-react";
import type { PortfolioProject } from "@/lib/types";

export function PortfolioSection({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="portfolio-section-animate">
      <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
        Projects & Portfolio
        <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#ffdb70] rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#212123] border border-[#383839] rounded-2xl p-6 hover:border-[#ffdb70]/50 transition-all flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-[#ffdb70] transition-colors">
                {project.title}
              </h3>
              <Monitor size={24} className="text-[#d6d6d6]/50 shrink-0" />
            </div>
            {project.description ? (
              <p className="text-[#d6d6d6] text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
            ) : (
              <p className="text-[#d6d6d6]/60 text-sm mb-6 flex-grow uppercase tracking-wider">
                {project.category}
              </p>
            )}
            {project.tech && project.tech.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#1e1e1f] text-[#ffdb70] px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border border-[#383839]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffdb70] text-sm font-medium hover:underline mt-auto"
                >
                  View project →
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
