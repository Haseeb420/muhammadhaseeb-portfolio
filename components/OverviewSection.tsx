"use client";

import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import type { PortfolioData } from "@/lib/types";

const radarData = {
  labels: [
    "Backend Logic",
    "Frontend UI",
    "Cloud / AWS",
    "CI/CD & DevOps",
    "Team Leadership",
  ],
  datasets: [
    {
      label: "Proficiency Focus",
      data: [95, 80, 90, 85, 85],
      backgroundColor: "rgba(255, 219, 112, 0.2)",
      borderColor: "rgba(255, 219, 112, 1)",
      pointBackgroundColor: "#1e1e1f",
      pointBorderColor: "#ffdb70",
      pointHoverBackgroundColor: "#ffdb70",
      pointHoverBorderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: { color: "rgba(255, 255, 255, 0.1)" },
      grid: { color: "rgba(255, 255, 255, 0.1)" },
      pointLabels: {
        color: "#d6d6d6",
        font: { family: "Inter", size: 12, weight: "bold" as const },
      },
      ticks: { display: false, min: 0, max: 100 },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#2b2b2c",
      titleColor: "#ffdb70",
      bodyColor: "#fff",
      borderColor: "#383839",
      borderWidth: 1,
      padding: 10,
      displayColors: false,
    },
  },
};

export function OverviewSection({ userData }: { userData: PortfolioData }) {
  const education = userData.education[0];

  return (
    <div className="portfolio-section-animate">
      <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
        Professional Overview
        <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#ffdb70] rounded-full" />
      </h2>

      <p className="text-lg leading-relaxed mb-10 text-white font-light">
        {userData.summary.split(/(\d+\.?\d*\+?\s*years?\s*of\s*experience)/i).map((part, i) =>
          /\d+\.?\d*\+?\s*years?\s*of\s*experience/i.test(part) ? (
            <span key={i} className="text-[#ffdb70] font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-[#212123] border border-[#383839] rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Skill Focus Distribution
          </h3>
          <div
            className="relative w-full max-w-[600px] mx-auto"
            style={{ height: 350, maxHeight: 400 }}
          >
            <Radar data={radarData} options={radarOptions} />
          </div>
          <p className="text-xs text-center mt-4 text-[#d6d6d6]/70">
            Interaction: Hover over the chart segments to view the thematic
            areas of expertise derived from the resume&apos;s skills matrix.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill) => (
              <span
                key={`${skill.name}-${skill.category}`}
                className="bg-[#1e1e1f] text-[#d6d6d6] border border-[#383839] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:text-[#ffdb70] hover:border-[#ffdb70]/50 transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>

          {education && (
            <div className="mt-8 bg-[#2b2b2c] border border-[#383839] rounded-2xl p-6">
              <h4 className="text-[#ffdb70] font-bold mb-2 uppercase text-xs tracking-wider">
                Education Highlight
              </h4>
              <p className="text-white font-bold">{education.degree}</p>
              <p className="text-sm text-[#d6d6d6]">
                {education.institution}, {education.period}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
