import { Code, Terminal, Cloud, Briefcase } from "lucide-react";
import type { PortfolioData } from "@/lib/types";
import type { ServiceIconKey } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

const ICON_MAP: Record<ServiceIconKey, React.ReactNode> = {
  Code: <Code size={32} />,
  Terminal: <Terminal size={32} />,
  Cloud: <Cloud size={32} />,
  Briefcase: <Briefcase size={32} />,
};

export function AboutSection({ userData }: { userData: PortfolioData }) {
  return (
    <div className="portfolio-section-animate">
      <div className="hidden lg:block mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">{userData.name}</h1>
        <p className="text-[#ffdb70] text-xl font-medium tracking-wide">{userData.title}</p>
        <div className="w-20 h-1.5 bg-[#ffdb70] mt-6 rounded-full" />
      </div>

      <SectionHeading>About Me</SectionHeading>
      <div className="text-[#d6d6d6] leading-relaxed space-y-4 mb-12 text-lg">
        <p>{userData.summary}</p>
      </div>

      <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userData.services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#212123] border border-[#383839] p-6 rounded-3xl flex gap-5 hover:border-[#ffdb70]/30 transition-colors group"
          >
            <div className="text-[#ffdb70] shrink-0 group-hover:scale-110 transition-transform">
              {ICON_MAP[service.icon]}
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">{service.title}</h4>
              <p className="text-[#d6d6d6] text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
