import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const projects = [
  {
    title: "Construction d’un immeuble moderne",
    mainImage: "https://picsum.photos/450/300?random=1",
    gallery: [
      "https://picsum.photos/450/300?random=11",
      "https://picsum.photos/450/300?random=12",
      "https://picsum.photos/450/300?random=13",
    ],
    description:
      "Ce projet clé en main a été réalisé avec précision et innovation. Nous avons supervisé chaque étape, de la planification à la livraison finale, en veillant à la qualité et à la durabilité des matériaux utilisés.",
    bullets: ["Planification complète", "Matériaux durables", "Suivi qualité"],
  },
  {
    title: "Campagne publicitaire nationale",
    mainImage: "https://picsum.photos/450/300?random=2",
    gallery: [
      "https://picsum.photos/450/300?random=21",
      "https://picsum.photos/450/300?random=22",
    ],
    description:
      "Création et diffusion de supports visuels impactants. La campagne a couvert tous les canaux médiatiques et a respecté les délais stricts du client.",
    bullets: ["Stratégie marketing", "Design créatif", "Diffusion ciblée"],
  },
  {
    title: "Organisation d’un grand événement",
    mainImage: "https://picsum.photos/450/300?random=8",
    gallery: [
      "https://picsum.photos/450/300?random=31",
      "https://picsum.photos/450/300?random=32",
      "https://picsum.photos/450/300?random=33",
    ],
    description:
      "Un rassemblement réussi grâce à une logistique impeccable. Chaque détail a été soigneusement planifié pour garantir une expérience fluide et mémorable pour tous les participants.",
    bullets: ["Gestion logistique", "Animation", "Communication efficace"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
       <h2 className="text-3xl font-bold text-[#1C355E] mb-4 text-center">
  Nos Réalisations
</h2>
<p className="text-center text-[#7A7A7A] mb-12 max-w-3xl mx-auto">
  Découvrez l'excellence de nos projets à travers la construction, la publicité, le commerce, le transport et l’événementiel. 
  Chaque réalisation illustre notre savoir-faire, notre rigueur et notre passion pour créer des expériences mémorables et des solutions sur-mesure.
</p>
        {/* --- Grille de projets --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1C355E]">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description.slice(0, 60)}...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full p-6 relative m-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#F15A29]"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image principale */}
              <img
                src={selectedProject.mainImage}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />

              {/* Galerie supplémentaire */}
              {selectedProject.gallery && (
                <div className="flex gap-2 mb-4 overflow-x-auto">
                  {selectedProject.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Gallery ${i}`}
                      className="h-24 w-32 object-cover rounded-xl flex-shrink-0"
                    />
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-bold text-[#1C355E] mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>

              {/* Liste des points clés */}
              <ul className="space-y-2 text-sm text-[#1C355E]">
                {selectedProject.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F15A29]" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
