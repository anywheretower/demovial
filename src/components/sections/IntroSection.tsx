"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import RevealOnScroll from "../ui/RevealOnScroll";
import GlowCard from "../ui/GlowCard";
import GradientText from "../ui/GradientText";

const pillars = [
  {
    title: "Gestión eficiente",
    description:
      "Ordenar el flujo de trabajo de la oficina senatorial con herramientas que permitan al equipo operar con claridad, agilidad y trazabilidad.",
    color: "#3b82f6",
  },
  {
    title: "Conexión territorial",
    description:
      "Escuchar al Maule y que el Maule lo escuche. Canales directos para entender las necesidades reales de la región y comunicar la respuesta.",
    color: "#14b8a6",
  },
  {
    title: "Visibilidad legislativa",
    description:
      "Que el trabajo en el Senado sea conocido. Traducir la actividad legislativa en mensajes claros que lleguen a quienes representa.",
    color: "#10b981",
  },
];

export default function IntroSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll variants={fadeUp}>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
            El desafío
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Un senado moderno requiere{" "}
            <GradientText from="#3b82f6" to="#14b8a6">
              herramientas a la altura.
            </GradientText>
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted">
            La labor legislativa es compleja y muchas veces invisible para la ciudadanía.
            Esta propuesta reúne las herramientas necesarias para que la gestión sea
            ordenada, su voz llegue al territorio y el trabajo hable por sí mismo.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={staggerItem}>
              <GlowCard color={pillar.color} className="h-full">
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ backgroundColor: pillar.color }}
                />
                <h3 className="mb-3 text-xl font-semibold">{pillar.title}</h3>
                <p className="text-base leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
