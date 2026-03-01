"use client";

import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import type { PortfolioExperience } from "@/lib/types";

export function CareerExperienceSection({
  experience,
}: {
  experience: PortfolioExperience[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = experience[selectedIndex];

  return (
    <div className="portfolio-section-animate">
      <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
        Career Experience
        <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#ffdb70] rounded-full" />
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 min-h-[400px]">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {experience.map((exp, index) => (
            <button
              key={`${exp.company}-${exp.role}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                selectedIndex === index
                  ? "bg-[#2b2b2c] border-[#ffdb70] scale-[1.02]"
                  : "bg-[#212123] border-[#383839] hover:border-[#d6d6d6]/50"
              }`}
            >
              <h4 className="text-white font-bold text-lg">{exp.role}</h4>
              <p className="text-[#ffdb70] text-sm font-semibold">
                {exp.company}
              </p>
              <p className="text-[#d6d6d6]/60 text-xs mt-1 uppercase tracking-wider">
                {exp.period}
              </p>
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 bg-[#212123] border border-[#383839] rounded-2xl p-6 lg:p-8">
          {selected ? (
            <div className="animate-[fadeIn_0.3s_ease-in-out]">
              <h3 className="text-2xl font-bold text-white mb-1">
                {selected.role} at {selected.company}
              </h3>
              <p className="text-[#d6d6d6] text-sm mb-6 flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-[#ffdb70]" />
                  {selected.period}
                </span>
                {selected.location && (
                  <>
                    <span className="mx-2">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#ffdb70]" />
                      {selected.location}
                    </span>
                  </>
                )}
              </p>
              <ul className="text-[#d6d6d6] leading-relaxed text-sm space-y-3">
                {selected.points.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#ffdb70] before:rounded-full"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-[#d6d6d6]/50 text-center">
              <span className="text-4xl mb-4">←</span>
              <p>
                Select a role from the timeline
                <br />
                to view detailed achievements.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
