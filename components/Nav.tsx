"use client";

const TABS = ["About", "Resume", "Portfolio", "Contact"] as const;

export function Nav({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="bg-[#2b2b2c]/80 backdrop-blur-md border border-[#383839] rounded-2xl md:rounded-bl-3xl md:rounded-tr-3xl md:rounded-tl-none md:rounded-br-none px-6 py-4 mb-8 md:mb-0 md:absolute md:top-0 md:right-0 z-10">
      <ul className="flex justify-between md:justify-end gap-4 md:gap-8">
        {TABS.map((tab) => (
          <li key={tab}>
            <button
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-xs md:text-sm font-semibold transition-colors relative py-1 ${activeTab === tab ? "text-[#ffdb70]" : "text-[#d6d6d6] hover:text-[#d6d6d6]/70"}`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffdb70] rounded-full" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
