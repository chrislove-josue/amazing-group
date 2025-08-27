export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-10">
      {kicker && (
        <p className="uppercase tracking-widest text-xs md:text-sm text-[#7A7A7A]">{kicker}</p>
      )}
      <h2 className="text-2xl md:text-4xl font-semibold mt-2 leading-tight text-[#1C355E]">{title}</h2>
      {subtitle && (
        <p className="text-[#7A7A7A] mt-3 text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  );
}
