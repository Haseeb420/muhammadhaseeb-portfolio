import Image from "next/image";
import { Mail, Phone, MapPin, User, Smartphone, FileDown } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import type { PortfolioData } from "@/lib/types";
import { ContactItem } from "./ContactItem";

export function Sidebar({ userData }: { userData: PortfolioData }) {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6">
      <div className="bg-[#1e1e1f] border border-[#383839] rounded-3xl p-6 lg:p-8 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-8 shadow-xl">
        <div className="flex w-full flex-col items-center gap-4 mb-6 lg:items-start">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border border-[#383839] bg-[#2b2b2c] lg:h-40 lg:w-40">
            {userData.photo ? (
              <Image
                src={userData.photo}
                alt={userData.name}
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <User size={80} className="text-[#ffdb70]" />
            )}
            <div className="absolute bottom-3 right-3 h-4 w-4 rounded-full border-2 border-[#1e1e1f] bg-green-500" />
          </div>

          <div className="w-full text-center lg:text-left">
            <h1 className="mb-2 text-2xl font-semibold text-white lg:text-3xl">
              {userData.name}
            </h1>
            <div className="flex justify-center lg:justify-start">
              <span className="inline-block rounded-xl border border-[#383839] bg-[#2b2b2c] px-4 py-1.5 text-xs font-medium text-[#ffdb70] lg:text-sm">
                {userData.title}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8 h-px w-full bg-[#383839]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full text-left">
          <ContactItem icon={<Mail size={18} />} label="EMAIL" value={userData.email} />
          <ContactItem icon={<Phone size={18} />} label="PHONE" value={userData.phone} />
          <ContactItem icon={<MapPin size={18} />} label="LOCATION" value={userData.location} />
          <ContactItem
            icon={<Smartphone size={18} />}
            label="SOCIALS"
            value="LinkedIn / GitHub"
          />
        </div>

        <div className="flex gap-4 mt-8 justify-center lg:justify-start w-full">
          <a
            href={userData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2c] p-3 rounded-xl text-[#d6d6d6] hover:text-[#ffdb70] transition-colors border border-[#383839]"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={userData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2c] p-3 rounded-xl text-[#d6d6d6] hover:text-[#ffdb70] transition-colors border border-[#383839]"
          >
            <GithubIcon size={20} />
          </a>
        </div>

        {userData.resumePdfPath ? (
          <a
            href={userData.resumePdfPath}
            download="Muhammad_Haseeb_Resume.pdf"
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl border border-[#ffdb70]/40 bg-[#2b2b2c] px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#ffdb70] hover:bg-[#ffdb70]/10 hover:border-[#ffdb70] transition-colors"
          >
            <FileDown size={18} aria-hidden />
            Download resume
          </a>
        ) : null}
      </div>
    </aside>
  );
}
