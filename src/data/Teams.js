import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Chrislove Josué",
    role: "Directrice Générale",
    photo: "https://picsum.photos/200/200?random=21",
    bio: "Experte en stratégie et gestion de projets pluridisciplinaires.",
  },
  {
    name: "Marc Prudencio",
    role: "Chef de Projet Construction",
    photo: "https://picsum.photos/200/200?random=22",
    bio: "Architecte et ingénieur, passionné par les bâtiments durables.",
  },
  {
    name: "Sophie Martin",
    role: "Responsable Marketing & Communication",
    photo: "https://picsum.photos/200/200?random=23",
    bio: "Créative et orientée résultats, elle transforme vos idées en campagnes percutantes.",
  },
  {
    name: "Pauline Ngoma",
    role: "Logistique & Transport",
    photo: "https://picsum.photos/200/200?random=24",
    bio: "Optimise chaque livraison et coordonne les opérations avec précision.",
  },
];

export default function Team() {
  return (
    <section id="teams" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C355E] mb-4">Notre Équipe</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Une équipe pluridisciplinaire, passionnée et experte dans son domaine, dédiée à transformer vos projets en succès concrets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              className="bg-[#F5F7FA] rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-[#1C355E]">{member.name}</h3>
              <p className="text-sm text-[#F15A29] mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
