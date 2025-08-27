import { motion } from "framer-motion";
import Badge from "../components/Badge";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden bg-[#F5F7FA]"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Texte et boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge>
            <span className="h-2 w-2 rounded-full bg-[#F15A29]" /> Entreprise
            pluri-sectorielle
          </Badge>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            AMAZING GROUP
            <br />
            <span className="text-[#7A7A7A] text-lg md:text-xl">
              Publicité · Événementiel · Commerce · Transport · Construction
            </span>
          </h1>

          {/* ✅ Slogan ajouté */}
          <p className="mt-3 text-[#1C355E] text-base md:text-lg font-semibold">
            « Un seul groupe, toutes vos réussites. »
          </p>

          {/* ✅ Texte plus impactant */}
          <p className="mt-4 text-[#7A7A7A] text-sm md:text-base">
            De la créativité à la construction, du transport à la promotion :{" "}
            <span className="text-[#1C355E] font-medium">
              nous concevons, bâtissons et livrons avec exigence et résultats.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1C355E] text-white px-4 py-2 text-sm shadow"
            >
              Découvrir nos services <ChevronRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#1C355E] text-[#1C355E] px-4 py-2 text-sm hover:bg-[#F5F7FA]"
            >
              Nous contacter <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* ✅ Stats corrigées */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-[#F15A29]">
                5+
              </span>
              <span className="block text-sm text-[#7A7A7A]">
                Années d'expérience
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-[#F15A29]">
                50+
              </span>
              <span className="block text-sm text-[#7A7A7A]">
                Projets réalisés
              </span>
            </div>
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-[#F15A29]">
                100%
              </span>
              <span className="block text-sm text-[#7A7A7A]">
                Clients satisfaits
              </span>
            </div>
          </div>
        </motion.div>

        {/* Illustration / Image à droite */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://picsum.photos/600/400?random=50"
            alt="Hero illustration"
            className="rounded-3xl shadow-lg object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
