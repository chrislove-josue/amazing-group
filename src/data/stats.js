import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Années d'expérience", value: 5, suffix: "+" },
    { label: "Projets réalisés", value: 50, suffix: "+" },
    { label: "Clients satisfaits", value: 100, suffix: "%" },
  ];

  return (
    <section id="stats" className="p-10 bg-[#F5F7FA] text-center">
      <h2 className="text-3xl font-bold text-[#1C355E] mb-8">Nos Chiffres Clés</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-[#F15A29]">
              {stat.value}
              {stat.suffix}
            </h3>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
