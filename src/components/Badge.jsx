export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm bg-white/70 backdrop-blur border-[#1C355E]/20">
      {children}
    </span>
  );
}
