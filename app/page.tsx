"use client";

import { useState } from "react";
import { userData } from "@/data/portfolio";
import { Sidebar } from "@/components/Sidebar";
import { Nav } from "@/components/Nav";
import { OverviewSection } from "@/components/OverviewSection";
import { CareerExperienceSection } from "@/components/CareerExperienceSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview & Analytics");

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 lg:p-12 xl:p-20 font-sans selection:bg-[#ffdb70] selection:text-black">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 relative items-start">
        <Sidebar userData={userData} />

        <main className="flex-1 bg-[#1e1e1f] border border-[#383839] rounded-3xl p-6 md:p-10 lg:p-14 relative min-h-[85vh] shadow-2xl w-full overflow-hidden flex flex-col">
          <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1">
            {activeTab === "Overview & Analytics" && <OverviewSection userData={userData} />}
            {activeTab === "Career Experience" && (
              <CareerExperienceSection experience={userData.experience} />
            )}
            {activeTab === "Projects & Portfolio" && (
              <PortfolioSection projects={userData.projects} />
            )}
            {activeTab === "Contact" && <ContactSection />}
          </div>

          <footer className="mt-20 pt-8 border-t border-[#383839] text-[#d6d6d6]/30 text-xs text-center lg:text-left">
            © 2024 Muhammad Haseeb. All Rights Reserved.
          </footer>
        </main>
      </div>

      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-[#ffdb70]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffdb70]/2 blur-[150px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
