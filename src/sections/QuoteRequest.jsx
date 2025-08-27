import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function QuoteRequest() {
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

  const handleSubmit = () => {
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log("Demande de devis :", form);
    alert("Votre demande de devis a été envoyée !");
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionTitle
            kicker="Demande de devis"
            title="Obtenez un devis personnalisé"
            subtitle="Remplissez le formulaire ci-dessous pour recevoir une estimation adaptée à votre projet."
          />
          <div className="rounded-3xl border border-[#1C355E]/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                  placeholder="Nom et prénom"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                  placeholder="Téléphone"
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                placeholder="Email"
              />

              <input
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                placeholder="Type de projet"
              />

              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                placeholder="Budget estimé"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
                placeholder="Décrivez votre projet"
              />

              <div className="flex items-center justify-between">
                <div className="text-xs text-[#7A7A7A]">
                  En cliquant sur « Demander un devis », vous acceptez notre politique de confidentialité.
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F15A29] text-white px-4 py-2 text-sm"
                >
                  Demander un devis <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
