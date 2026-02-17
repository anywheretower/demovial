"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { Service } from "@/data/services";
import { serviceIcons } from "../icons/ServiceIcons";
import GlowCard from "../ui/GlowCard";
import AnimatedCounter from "../ui/AnimatedCounter";

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const isReversed = index % 2 !== 0;
  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];

  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse 60% 40% at ${isReversed ? "30%" : "70%"} 50%, ${service.color}, transparent)`,
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className={`mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Info */}
        <div className="flex-1">
          <motion.div variants={staggerItem}>
            {Icon && (
              <Icon
                className="mb-6 h-12 w-12"
                color={service.color}
              />
            )}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mb-2 text-sm font-medium tracking-widest uppercase"
            style={{ color: service.color }}
          >
            Servicio {String(service.id).padStart(2, "0")}
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            {service.title}
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mb-5 text-lg text-muted"
          >
            {service.subtitle}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mb-8 max-w-lg text-base leading-relaxed text-muted"
          >
            {service.description}
          </motion.p>

          {/* Price */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-baseline gap-1"
          >
            <AnimatedCounter
              value={service.price}
              className="text-4xl font-bold"
              prefix="$"
            />
            <span className="text-base text-muted">/ {service.priceLabel}</span>
          </motion.div>
        </div>

        {/* Right: Features */}
        <div className="flex-1">
          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {service.features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <GlowCard color={service.color} className="h-full">
                  <h4 className="mb-2 text-base font-semibold">{feature.title}</h4>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
