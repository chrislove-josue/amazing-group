import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, PhoneCall, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10">
        
        {/* --- Infos de contact --- */}
        <div className="flex flex-col justify-center gap-6">
          <SectionTitle
            kicker="Contact"
            title="Parlons de votre projet"
            subtitle="Une question, un devis, une visite de site ? Laissez-nous un message."
          />
          
          <div className="space-y-6 text-[#1C355E]">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#F15A29]" />
              <p>123 Rue de l'Innovation, Cotonou, Bénin</p>
            </div>
            <div className="flex items-start gap-4">
              <PhoneCall className="h-6 w-6 text-[#F15A29]" />
              <p>+229 123 456 789</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#F15A29]" />
              <p>contact@amazinggroup.com</p>
            </div>
          </div>

          <div className="mt-4 text-sm text-[#7A7A7A]">
            Nous répondons généralement sous 24h ouvrées.
          </div>
        </div>

        {/* --- Formulaire --- */}
        <div>
          <div className="rounded-3xl border border-[#1C355E]/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />
              <input
                type="text"
                placeholder="Objet"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />
              <textarea
                rows={5}
                placeholder="Décrivez brièvement votre besoin"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#7A7A7A]">
                  En cliquant sur « Envoyer », vous acceptez notre politique de confidentialité.
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F15A29] text-white px-4 py-2 text-sm"
                >
                  Envoyer <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
