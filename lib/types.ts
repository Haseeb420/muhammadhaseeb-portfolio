export type ServiceIconKey = "Code" | "Terminal" | "Cloud" | "Briefcase";

export interface PortfolioSocials {
  linkedin: string;
  github: string;
}

export interface PortfolioService {
  icon: ServiceIconKey;
  title: string;
  desc: string;
}

export interface PortfolioExperience {
  company: string;
  role: string;
  period: string;
  points: string[];
  employmentType?: string;
  location?: string;
  workType?: string;
  skills?: string[];
  duration?: string;
  logo?: string;
}

export interface PortfolioEducation {
  institution: string;
  degree: string;
  period: string;
  skills?: string[];
}

export interface PortfolioSkill {
  name: string;
  category: string;
}

export interface PortfolioProject {
  title: string;
  category: string;
  url?: string;
  description?: string;
  tech?: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  socials: PortfolioSocials;
  summary: string;
  services: PortfolioService[];
  experience: PortfolioExperience[];
  education: PortfolioEducation[];
  skills: PortfolioSkill[];
  projects: PortfolioProject[];
}

export interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}
