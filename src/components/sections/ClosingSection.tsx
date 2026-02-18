"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import RevealOnScroll from "../ui/RevealOnScroll";
import GradientText from "../ui/GradientText";

export default function ClosingSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, #3b82f6, transparent)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <RevealOnScroll variants={fadeUp}>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:text-6xl">
            <GradientText from="#3b82f6" to="#60a5fa">
              El Maule merece un senador visible
            </GradientText>
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted md:text-xl">
            Cada herramienta de esta propuesta tiene un solo propósito: que la gestión
            legislativa tenga el alcance y la claridad que la región necesita.
            La tecnología es el medio, el impacto en el Maule es el fin.
          </p>
        </RevealOnScroll>

        {/* Next steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-16 grid gap-4 text-left sm:grid-cols-3"
        >
          {[
            {
              step: "01",
              title: "Revisamos juntos",
              description: "Una reunión para recorrer esta propuesta, resolver dudas y escuchar sus prioridades.",
            },
            {
              step: "02",
              title: "Diseñamos el plan",
              description: "Definimos cómo activar servicios segun capital humano de la oficina parlamentaria.",
            },
            {
              step: "03",
              title: "Ponemos en marcha",
              description: "Implementación progresiva con resultados concretos desde las primeras semanas.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-bg-elevated p-6"
            >
              <p className="mb-2 text-2xl font-bold text-accent">{item.step}</p>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-base text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <RevealOnScroll variants={fadeUp}>
          <div className="rounded-2xl border border-border bg-bg-elevated p-8 md:p-12">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-muted">
              Siguiente paso
            </p>
            <p className="text-2xl font-bold md:text-3xl">
              Conversemos sobre su visión para el Maule
            </p>
            <p className="mt-4 text-lg text-muted">
              Cada senador tiene su estilo y sus prioridades. Quiero entender las suyas
              para que estas herramientas trabajen exactamente como la oficina necesita.
            </p>
          </div>
        </RevealOnScroll>

        {/* Footer */}
        <p className="mt-16 text-sm text-muted/50">
          Documento confidencial preparado para el senador Cristian Vial Ramírez.
        </p>
      </div>
    </section>
  );
}
