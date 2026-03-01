import { Mail, Phone, MapPin, Linkedin, Github, User, Smartphone } from "lucide-react";
import type { PortfolioData } from "@/lib/types";
import { ContactItem } from "./ContactItem";

export function Sidebar({ userData }: { userData: PortfolioData }) {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-6">
      <div className="bg-[#1e1e1f] border border-[#383839] rounded-3xl p-6 lg:p-8 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-8 shadow-xl">
        <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#2b2b2c] rounded-3xl flex items-center justify-center mb-6 overflow-hidden relative border border-[#383839]">
          <User size={80} className="text-[#ffdb70]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 border-2 border-[#1e1e1f] rounded-full" />
        </div>

        <div className="lg:hidden mb-6">
          <h1 className="text-2xl font-semibold text-white mb-2">{userData.name}</h1>
          <span className="bg-[#2b2b2c] text-[#ffdb70] px-4 py-1.5 rounded-xl text-xs font-medium border border-[#383839]">
            {userData.title}
          </span>
        </div>

        <div className="w-full h-[1px] bg-[#383839] mb-8 hidden lg:block" />

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
      </div>
    </aside>
  );
}
