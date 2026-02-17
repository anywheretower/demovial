"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import RevealOnScroll from "../ui/RevealOnScroll";
import GlowCard from "../ui/GlowCard";
import GradientText from "../ui/GradientText";

const credentials = [
  {
    title: "IA Aplicada",
    description:
      "Desarrollo de agentes inteligentes y automatizaciones con modelos de lenguaje de última generación.",
    color: "#6366f1",
  },
  {
    title: "Entornos Digitales",
    description:
      "Plataformas web, dashboards y experiencias interactivas construidas con tecnología de punta.",
    color: "#06b6d4",
  },
  {
    title: "Conocimiento Político",
    description:
      "Comprensión profunda del ecosistema político chileno, comunicación estratégica y gestión territorial.",
    color: "#10b981",
  },
];

export default function IntroSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll variants={fadeUp}>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
            Una nueva forma de presentar
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Esto no es un PDF.{" "}
            <GradientText from="#6366f1" to="#06b6d4">
              Es una demostración.
            </GradientText>
          </h2>
          <p className="mb-16 max-w-2xl text-lg text-muted">
            Esta propuesta es, en sí misma, una muestra de lo que podemos construir
            juntos. Cada animación, cada interacción, cada detalle está pensado
            para comunicar con impacto en la era digital.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {credentials.map((cred) => (
            <motion.div key={cred.title} variants={staggerItem}>
              <GlowCard color={cred.color} className="h-full">
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ backgroundColor: cred.color }}
                />
                <h3 className="mb-2 text-lg font-semibold">{cred.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {cred.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
