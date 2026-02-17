"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export default function GlowCard({
  children,
  color = "#3b82f6",
  className = "",
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-border bg-bg-elevated p-6 transition-shadow duration-300 ${className}`}
      whileHover={{
        boxShadow: `0 0 30px ${color}25, 0 0 60px ${color}10`,
      }}
    >
      {children}
    </motion.div>
  );
}
