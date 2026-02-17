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
            "radial-gradient(ellipse 60% 40% at 50% 60%, #6366f1, transparent)",
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <RevealOnScroll variants={fadeUp}>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:text-6xl">
            <GradientText from="#6366f1" to="#a855f7">
              Construyamos juntos
            </GradientText>
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted md:text-xl">
            Esta propuesta es solo el comienzo. Cada herramienta, cada estrategia
            está diseñada para potenciar tu conexión con el Maule y posicionarte
            como un referente en comunicación política digital.
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
              title: "Conversemos",
              description: "Agendar una reunión para revisar esta propuesta en detalle.",
            },
            {
              step: "02",
              title: "Definimos alcance",
              description: "Ajustamos servicios y prioridades según tus necesidades.",
            },
            {
              step: "03",
              title: "Comenzamos",
              description: "Implementación inmediata con resultados desde el día uno.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-bg-elevated p-6"
            >
              <p className="mb-2 text-2xl font-bold text-accent">{item.step}</p>
              <h3 className="mb-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact */}
        <RevealOnScroll variants={fadeUp}>
          <div className="rounded-2xl border border-border bg-bg-elevated p-8 md:p-12">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-muted">
              Contacto
            </p>
            <p className="text-2xl font-bold md:text-3xl">
              ¿Listo para dar el siguiente paso?
            </p>
            <p className="mt-4 text-muted">
              Agenda una reunión y conversemos sobre cómo podemos transformar
              tu presencia digital.
            </p>
          </div>
        </RevealOnScroll>

        {/* Footer */}
        <p className="mt-16 text-xs text-muted/50">
          Propuesta confidencial preparada exclusivamente para Cristian Vial.
        </p>
      </div>
    </section>
  );
}
