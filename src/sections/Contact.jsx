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

    if (!form.projectType || form.projectType.length < 3) {
      newErrors.projectType = "Le type de projet est obligatoire (au moins 3 caractères).";
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

  // Vérifie si tous les champs obligatoires sont valides
  const isFormValid =
    form.name.length >= 6 &&
    form.phone.length >= 6 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.projectType.length >= 3 &&
    form.message.length >= 6;

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
              <div>
                <input
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  type="text"
                  placeholder="Type de projet / collaboration"
                  className="rounded-xl border border-[#1C355E]/20 px-3 py-2 w-full"
                  required
                />
                {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
              </div>

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

<div className="text-xs text-[#7A7A7A]">
                  En cliquant sur « Envoyer », vous acceptez notre politique de confidentialité.
                </div>
              {/* Footer formulaire */}
              <div className="flex items-center justify-between">
                
                <div className="flex gap-2">
                  {/* Bouton formulaire classique */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
                      isFormValid
                        ? "bg-[#F15A29] text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Envoyer <ArrowUpRight className="h-4 w-4" />
                  </button>

                  {/* Bouton WhatsApp */}
                 <a
  href={`https://wa.me/22998123353?text=${encodeURIComponent(
    `Bonjour Amazing Group,\n\n` +
    `Je suis ${form.name}.\n` +
    `Téléphone: ${form.phone}\n` +
    `Email: ${form.email}\n` +
    `Projet: ${form.projectType}\n` +
    `Budget: ${form.budget}\n` +
    `Message: ${form.message}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition ${
    isFormValid
      ? "bg-green-500 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
  }`}
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
