"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import RevealOnScroll from "../ui/RevealOnScroll";
import GlowCard from "../ui/GlowCard";
import GradientText from "../ui/GradientText";

const challenges = [
  {
    title: "La gestión invisible",
    description:
      "El trabajo legislativo es intenso pero rara vez llega a la ciudadanía. Votaciones, comisiones, gestiones territoriales: todo ocurre, pero pocos lo ven.",
    color: "#3b82f6",
  },
  {
    title: "El territorio desconectado",
    description:
      "Las necesidades del Maule no siempre llegan a tiempo al Senado. Y las respuestas del Senado no siempre llegan al Maule.",
    color: "#14b8a6",
  },
  {
    title: "El equipo sin herramientas",
    description:
      "Una oficina senatorial opera con múltiples frentes abiertos. Sin un sistema que ordene, se pierde tiempo, se duplican esfuerzos y se diluye el impacto.",
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
            Tres problemas reales{" "}
            <GradientText from="#3b82f6" to="#14b8a6">
              que esta propuesta resuelve.
            </GradientText>
          </h2>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted">
            Antes de hablar de herramientas, es importante entender los desafíos
            concretos que enfrenta una gestión senatorial moderna. Los tres convergen
            en un mismo punto: la necesidad de un sistema digital integrado.
          </p>
        </RevealOnScroll>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {challenges.map((challenge) => (
            <motion.div key={challenge.title} variants={staggerItem}>
              <GlowCard color={challenge.color} className="h-full">
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ backgroundColor: challenge.color }}
                />
                <h3 className="mb-3 text-xl font-semibold">{challenge.title}</h3>
                <p className="text-base leading-relaxed text-muted">
                  {challenge.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
