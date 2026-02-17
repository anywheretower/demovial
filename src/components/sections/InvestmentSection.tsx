"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { services } from "@/data/services";
import RevealOnScroll from "../ui/RevealOnScroll";
import AnimatedCounter from "../ui/AnimatedCounter";
import GradientText from "../ui/GradientText";

export default function InvestmentSection() {
  const total = services.reduce((sum, s) => sum + s.price, 0);

  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, #f59e0b, transparent)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        <RevealOnScroll variants={fadeUp}>
          <p className="mb-4 text-center text-sm font-medium tracking-widest uppercase text-accent-amber">
            Inversión mensual
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
            <GradientText from="#f59e0b" to="#f97316">
              El paquete completo
            </GradientText>
          </h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-base leading-relaxed text-muted">
            Una inversión única que cubre los cinco pilares del sistema.
            Sin piezas sueltas, sin costos ocultos.
          </p>
        </RevealOnScroll>

        {/* Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-12 overflow-hidden rounded-2xl border border-border bg-bg-elevated"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={staggerItem}
              className={`flex items-center justify-between px-6 py-5 ${
                i < services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                <div>
                  <p className="text-base font-medium">{service.title}</p>
                  <p className="text-sm text-muted">{service.subtitle}</p>
                </div>
              </div>
              <AnimatedCounter
                value={service.price}
                className="text-lg font-semibold"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Total */}
        <RevealOnScroll variants={fadeUp}>
          <div className="flex items-center justify-between rounded-2xl border border-accent-amber/30 bg-accent-amber/5 px-6 py-6">
            <p className="text-lg font-semibold">Total mensual</p>
            <AnimatedCounter
              value={total}
              className="text-3xl font-bold text-accent-amber md:text-4xl"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
