export function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#202022] shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-[#383839] p-3 rounded-xl text-[#ffdb70] shrink-0">
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-[#d6d6d6]/50 text-[10px] uppercase font-bold tracking-wider">
          {label}
        </p>
        <p className="text-white text-sm truncate font-medium">{value}</p>
      </div>
    </div>
  );
}
