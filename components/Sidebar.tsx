import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Github, User, Smartphone, FileDown } from "lucide-react";
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
            <Linkedin size={20} />
          </a>
          <a
            href={userData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2b2c] p-3 rounded-xl text-[#d6d6d6] hover:text-[#ffdb70] transition-colors border border-[#383839]"
          >
            <Github size={20} />
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
