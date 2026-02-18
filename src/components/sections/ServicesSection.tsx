"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { services } from "@/data/services";
import { serviceIcons } from "../icons/ServiceIcons";
import RevealOnScroll from "../ui/RevealOnScroll";
import GradientText from "../ui/GradientText";
import GlowCard from "../ui/GlowCard";
import AnimatedCounter from "../ui/AnimatedCounter";

function ServiceAccordion({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={`servicio-${service.slug}`}
      className="overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-colors duration-300"
      style={{
        borderColor: isOpen ? `${service.color}40` : undefined,
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/[0.02] md:gap-6 md:px-8 md:py-6"
      >
        {Icon && (
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${service.color}15` }}
          >
            <Icon className="h-6 w-6" color={service.color} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold md:text-lg">{service.title}</p>
          <p className="text-sm text-muted">{service.subtitle}</p>
        </div>

        <span className="hidden shrink-0 text-sm font-medium sm:block" style={{ color: service.color }}>
          {isOpen ? "Cerrar" : "Ver detalles"}
        </span>

        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 h-5 w-5 shrink-0 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-border bg-bg/50 p-4"
                  >
                    <h4 className="mb-1.5 text-[15px] font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Demo access for Gestión NORA */}
              {service.slug === "nora" && (
                <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                  <p className="mb-3 text-sm font-semibold text-blue-400">
                    Acceso a plataforma de muestra
                  </p>
                  <div className="mb-4 space-y-1 text-sm text-muted">
                    <p>
                      <span className="text-muted/70">Usuario:</span>{" "}
                      <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">demo@nora.app</code>
                    </p>
                    <p>
                      <span className="text-muted/70">Clave:</span>{" "}
                      <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">demonoralabs</code>
                    </p>
                  </div>
                  <p className="mb-4 text-xs text-muted/60">
                    * Plataforma optimizada para versión de escritorio.
                  </p>
                  <a
                    href="https://clientes.jorgetorres.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                  >
                    Ingresar a la plataforma
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <RevealOnScroll variants={fadeUp}>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
            La solución
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
            Cinco pilares,{" "}
            <GradientText from="#3b82f6" to="#14b8a6">
              un solo sistema.
            </GradientText>
          </h2>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-muted">
            Estos cinco servicios no funcionan por separado. Forman un ecosistema
            integrado donde cada pieza alimenta a las demás: la escucha territorial
            informa la difusión, la plataforma ordena el flujo, el portal muestra
            los resultados y el asistente IA potencia todo el conjunto.
          </p>
        </RevealOnScroll>

        {/* Quick overview — icon strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-12 grid grid-cols-5 gap-2 md:gap-3"
        >
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
            return (
              <motion.button
                key={service.slug}
                variants={staggerItem}
                onClick={() => {
                  setOpenIndex(openIndex === i ? null : i);
                  // Scroll to accordion after a short delay for the animation
                  setTimeout(() => {
                    document
                      .getElementById(`servicio-${service.slug}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 100);
                }}
                className={`group flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-200 md:p-4 ${
                  openIndex === i
                    ? "border-border bg-bg-elevated"
                    : "border-transparent hover:border-border hover:bg-bg-elevated/50"
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 md:h-12 md:w-12"
                  style={{
                    backgroundColor:
                      openIndex === i ? `${service.color}20` : `${service.color}10`,
                  }}
                >
                  {Icon && (
                    <Icon
                      className="h-5 w-5 md:h-6 md:w-6"
                      color={service.color}
                    />
                  )}
                </div>
                <span className="text-center text-[11px] font-medium leading-tight text-muted md:text-xs">
                  {service.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Accordion list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col gap-3"
        >
          {services.map((service, i) => (
            <motion.div key={service.slug} variants={staggerItem}>
              <ServiceAccordion
                service={service}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
