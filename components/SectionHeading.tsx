export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
        {children}
        <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#ffdb70] rounded-full" />
      </h2>
    </div>
  );
}
