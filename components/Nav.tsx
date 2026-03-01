"use client";

const TABS = [
  "Overview & Analytics",
  "Career Experience",
  "Projects & Portfolio",
  "Contact",
] as const;

export function Nav({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="flex overflow-x-auto scrollbar-hide border-b border-[#383839] mb-8 gap-6 md:gap-8 pb-2">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`tab-btn text-sm font-bold uppercase tracking-wider pb-2 whitespace-nowrap transition-colors relative ${
            activeTab === tab
              ? "text-[#ffdb70] border-b-2 border-[#ffdb70]"
              : "text-[#d6d6d6] hover:text-white border-b-2 border-transparent"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
