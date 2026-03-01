"use client";

import { useState, useMemo } from "react";
import { Briefcase, BookOpen, Gem, GraduationCap } from "lucide-react";
import type {
  PortfolioExperience,
  PortfolioEducation,
  PortfolioSkill,
} from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

function getCompanyInitial(company: string) {
  const words = company.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return company.slice(0, 2).toUpperCase();
}

function getInstitutionInitial(institution: string) {
  const words = institution.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return institution.slice(0, 2).toUpperCase();
}

function getUsedAt(
  skillName: string,
  experience: PortfolioExperience[],
  education: PortfolioEducation[]
): { type: "experience" | "education"; label: string }[] {
  const usedAt: { type: "experience" | "education"; label: string }[] = [];
  const expMatches = experience.filter(
    (exp) => exp.skills?.some((s) => s.toLowerCase() === skillName.toLowerCase())
  );
  const eduMatches = education.filter(
    (edu) =>
      edu.skills?.some((s) => s.toLowerCase() === skillName.toLowerCase())
  );
  if (expMatches.length === 1) {
    usedAt.push({
      type: "experience",
      label: `${expMatches[0].role} at ${expMatches[0].company}`,
    });
  } else if (expMatches.length > 1) {
    const companies = [...new Set(expMatches.map((e) => e.company))];
    usedAt.push({
      type: "experience",
      label:
        companies.length === 1
          ? `${expMatches.length} experiences at ${companies[0]}`
          : `${expMatches.length} experiences across ${companies.join(" and ")}`,
    });
  }
  if (eduMatches.length === 1) {
    usedAt.push({
      type: "education",
      label: eduMatches[0].institution,
    });
  } else if (eduMatches.length > 1) {
    const institutions = [...new Set(eduMatches.map((e) => e.institution))];
    usedAt.push({
      type: "education",
      label:
        institutions.length === 1
          ? `${eduMatches.length} educational experiences at ${institutions[0]}`
          : `${eduMatches.length} educational experiences at ${institutions.join(" and ")}`,
    });
  }
  return usedAt;
}

export function ResumeSection({
  experience,
  education,
  skills,
}: {
  experience: PortfolioExperience[];
  education: PortfolioEducation[];
  skills: PortfolioSkill[];
}) {
  const [skillCategory, setSkillCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = [...new Set(skills.map((s) => s.category))].sort();
    return cats;
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (skillCategory === "All") return skills;
    return skills.filter((s) => s.category === skillCategory);
  }, [skills, skillCategory]);

  const experienceByCompany = useMemo(() => {
    const map = new Map<string, PortfolioExperience[]>();
    for (const exp of experience) {
      const list = map.get(exp.company) ?? [];
      list.push(exp);
      map.set(exp.company, list);
    }
    return Array.from(map.entries());
  }, [experience]);

  return (
    <div className="portfolio-section-animate">
      <SectionHeading>Resume</SectionHeading>

      <div className="space-y-14">
        {/* Experience */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#202022] border border-[#383839] p-3 rounded-xl text-[#ffdb70]">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>
          <div className="space-y-6">
            {experienceByCompany.map(([company, roles]) => (
              <div key={company} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 bg-[#2b2b2c] border border-[#383839] rounded-xl flex items-center justify-center text-[#ffdb70] font-bold text-sm">
                    {getCompanyInitial(company)}
                  </div>
                  {roles.length > 1 && (
                    <div className="w-px flex-1 min-h-[8px] bg-[#383839] mt-2" />
                  )}
                </div>
                <div className="flex-1 min-w-0 space-y-6">
                  {roles.map((exp, idx) => (
                    <div
                      key={`${exp.company}-${exp.role}-${idx}`}
                      className="pb-6 border-b border-[#383839] last:border-0 last:pb-0"
                    >
                      <h4 className="text-white font-bold text-lg leading-tight">
                        {exp.role}
                      </h4>
                      <p className="text-[#ffdb70] text-sm mt-1 font-semibold">
                        {exp.company}
                        {exp.employmentType && ` · ${exp.employmentType}`}
                      </p>
                      <p className="text-[#d6d6d6] text-sm mt-1 opacity-90">
                        {exp.period}
                        {exp.duration && ` · ${exp.duration}`}
                      </p>
                      {(exp.location || exp.workType) && (
                        <p className="text-[#d6d6d6] text-sm mt-0.5 opacity-80">
                          {[exp.location, exp.workType].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <ul className="mt-3 text-[#d6d6d6] text-sm list-disc pl-4 space-y-2 opacity-80">
                        {exp.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#d6d6d6]">
                          <Gem
                            size={14}
                            className="text-[#ffdb70] shrink-0 opacity-90"
                          />
                          <span className="opacity-90">
                            {exp.skills.slice(0, 5).join(", ")}
                            {exp.skills.length > 5 &&
                              ` and +${exp.skills.length - 5} skills`}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#202022] border border-[#383839] p-3 rounded-xl text-[#ffdb70]">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={`${edu.institution}-${idx}`}
                className="flex gap-6 pb-6 border-b border-[#383839] last:border-0 last:pb-0"
              >
                <div className="w-12 h-12 bg-[#2b2b2c] border border-[#383839] rounded-xl flex items-center justify-center text-[#ffdb70] font-bold text-sm shrink-0">
                  {getInstitutionInitial(edu.institution)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold text-lg">{edu.institution}</h4>
                  <p className="text-[#d6d6d6] text-sm mt-1 opacity-90">
                    {edu.degree}
                  </p>
                  <p className="text-[#ffdb70] text-sm mt-1 font-semibold">
                    {edu.period}
                  </p>
                  {edu.skills && edu.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#d6d6d6]">
                      <Gem
                        size={14}
                        className="text-[#ffdb70] shrink-0 opacity-90"
                      />
                      <span className="opacity-90">
                        {edu.skills.slice(0, 5).join(", ")}
                        {edu.skills.length > 5 &&
                          ` and +${edu.skills.length - 5} skills`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills with categories */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              onClick={() => setSkillCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                skillCategory === "All"
                  ? "bg-[#ffdb70] text-black"
                  : "bg-transparent border border-[#383839] text-[#d6d6d6] hover:border-[#ffdb70]/50 hover:text-[#ffdb70]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSkillCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  skillCategory === cat
                    ? "bg-[#ffdb70] text-black"
                    : "bg-transparent border border-[#383839] text-[#d6d6d6] hover:border-[#ffdb70]/50 hover:text-[#ffdb70]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="bg-[#212123] border border-[#383839] rounded-3xl overflow-hidden">
            <ul className="divide-y divide-[#383839]">
              {filteredSkills.map((skill) => {
                const usedAt = getUsedAt(skill.name, experience, education);
                return (
                  <li
                    key={`${skill.name}-${skill.category}`}
                    className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                  >
                    <div>
                      <span className="font-bold text-white">{skill.name}</span>
                      {usedAt.length > 0 && (
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#d6d6d6]">
                          {usedAt.map((u, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-1.5 opacity-90"
                            >
                              {u.type === "experience" ? (
                                <Briefcase size={14} className="text-[#ffdb70] shrink-0" />
                              ) : (
                                <GraduationCap size={14} className="text-[#ffdb70] shrink-0" />
                              )}
                              {u.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
