import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data/services";
import SectionTitle from "../components/SectionTitle";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
       <SectionTitle
  kicker="Nos services d’excellence"
  title="Polyvalence, performance et résultats garantis"
  subtitle="Découvrez nos solutions complètes pour transformer vos projets en succès concrets, de la conception à la livraison."
/>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="rounded-3xl border border-[#1C355E]/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-[#1C355E] text-white grid place-items-center shrink-0">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1C355E]">{s.title}</h3>
                  <p className="text-sm text-[#7A7A7A] mt-1">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[#1C355E]">
                    <CheckCircle2 className="h-4 w-4 text-[#F15A29]" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
