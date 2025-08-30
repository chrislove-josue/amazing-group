export default function Footer() {
  return (
    <footer className="py-10 border-t border-[#1C355E]/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-[#1C355E]">AMAZING GROUP</p>
            <p className="text-xs text-[#7A7A7A]">© {new Date().getFullYear()} – Tous droits réservés</p>
          </div>
        </div>
        <div className="text-xs text-[#7A7A7A]">
          <a href="#" className="hover:underline">Mentions légales</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
