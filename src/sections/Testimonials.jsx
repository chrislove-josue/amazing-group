import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Jean Dupont",
    role: "PDG, Entreprise ABC",
    photo: "https://picsum.photos/100/100?random=31",
    message:
      "Amazing Group a transformé notre projet de construction. Qualité irréprochable et équipe très professionnelle !",
  },
  {
    name: "Marie Petit",
    role: "Directrice Marketing, Startup XYZ",
    photo: "https://picsum.photos/100/100?random=32",
    message:
      "La campagne publicitaire réalisée a dépassé nos attentes. Très réactifs et créatifs, je recommande vivement.",
  },
  {
    name: "Oumar Sissoko",
    role: "Responsable Logistique, TransportCo",
    photo: "https://picsum.photos/100/100?random=33",
    message:
      "Grâce à leur gestion de la logistique et du transport, nos délais ont été respectés à la perfection.",
  },
];

const PARTNERS = [
  "https://picsum.photos/150/80?random=41",
  "https://picsum.photos/150/80?random=42",
  "https://picsum.photos/150/80?random=43",
  "https://picsum.photos/150/80?random=44",
  "https://picsum.photos/150/80?random=45",
  "https://picsum.photos/150/80?random=46",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        {/* --- Témoignages --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C355E] mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Des retours authentiques et enthousiastes de nos clients qui
          témoignent de notre expertise et de notre engagement.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <p className="text-gray-700 mb-4">&quot;{t.message}&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-[#1C355E]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#F15A29]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Partenaires (Carousel) --- */}
        <h3 className="text-2xl font-semibold text-[#1C355E] mb-8">
          Nos partenaires de confiance
        </h3>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...PARTNERS, ...PARTNERS].map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Partenaire ${i}`}
                  className="h-16 w-auto object-contain transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
