import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, PhoneCall, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // éviter le reload
    console.log("Demande de partenariat :", form);
    alert("Votre demande de partenariat a été envoyée !");
    setForm({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    }); // reset formulaire
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10">

        {/* --- Infos de contact --- */}
        <div className="flex flex-col justify-center gap-6">
          <SectionTitle
            kicker="Partenariat & Collaboration"
            title="Construisons l’avenir ensemble"
            subtitle="Vous souhaitez collaborer, devenir partenaire ou lancer un projet commun ? Parlons-en !"
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
            Notre équipe est disponible et réactive pour explorer avec vous toutes les synergies possibles.
          </div>
        </div>

        {/* --- Formulaire --- */}
        <div>
          <div className="rounded-3xl border border-[#1C355E]/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Votre nom"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Téléphone"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                  required
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                required
              />

              <input
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                type="text"
                placeholder="Type de projet / collaboration"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />

              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                type="text"
                placeholder="Budget (optionnel)"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez brièvement votre projet ou idée de collaboration"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />

              <div className="flex items-center justify-between">
                <div className="text-xs text-[#7A7A7A]">
                  En cliquant sur « Envoyer », vous acceptez notre politique de confidentialité.
                </div>
                <button
                  type="submit"
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
