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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 6) {
      newErrors.name = "Le nom doit contenir au moins 6 caractères.";
    }

    if (!form.phone || form.phone.length < 6) {
      newErrors.phone = "Le numéro de téléphone doit contenir au moins 6 chiffres.";
    }

    if (!form.email || form.email.length < 6) {
      newErrors.email = "L’email doit contenir au moins 6 caractères.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Veuillez saisir un email valide.";
    }

    if (!form.message || form.message.length < 6) {
      newErrors.message = "Le message doit contenir au moins 6 caractères.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log("Demande de partenariat :", form);
    alert("Votre demande de partenariat a été envoyée ! ✅");

    setForm({
      name: "",
      phone: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
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
              <p>+229 0198123353</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#F15A29]" />
              <p>contact@amazinggroup.com</p>
            </div>
          </div>
        </div>

        {/* --- Formulaire --- */}
        <div>
          <div className="rounded-3xl border border-[#1C355E]/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              
              {/* Nom & Téléphone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Votre nom"
                    className="rounded-xl border border-[#1C355E]/20 px-3 py-2 w-full"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Téléphone"
                    className="rounded-xl border border-[#1C355E]/20 px-3 py-2 w-full"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2 w-full"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Type de projet */}
              <input
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                type="text"
                placeholder="Type de projet / collaboration"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />

              {/* Budget */}
              <input
                name="budget"
                value={form.budget}
                onChange={handleChange}
                type="text"
                placeholder="Budget (optionnel)"
                className="rounded-xl border border-[#1C355E]/20 px-3 py-2"
              />

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez brièvement votre projet ou idée de collaboration"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2 w-full"
                  required
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Footer formulaire */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#7A7A7A]">
                  En cliquant sur « Envoyer », vous acceptez notre politique de confidentialité.
                </div>

                <div className="flex gap-2">
                  {/* Bouton formulaire classique */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#F15A29] text-white px-4 py-2 text-sm"
                  >
                    Envoyer <ArrowUpRight className="h-4 w-4" />
                  </button>

                  {/* Bouton WhatsApp */}
                  <a
                    href={`https://wa.me/22998123353?text=Bonjour%20Amazing%20Group,%20je%20suis%20${encodeURIComponent(
                      form.name
                    )}%20(${encodeURIComponent(form.phone)}),%20Email:%20${encodeURIComponent(
                      form.email
                    )}.%20Projet:%20${encodeURIComponent(
                      form.projectType
                    )}.%20Budget:%20${encodeURIComponent(
                      form.budget
                    )}.%20Message:%20${encodeURIComponent(form.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white px-4 py-2 text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
