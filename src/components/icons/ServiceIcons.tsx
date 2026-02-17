interface IconProps {
  className?: string;
  color?: string;
}

// Dashboard icon for NORA platform
export function DashboardIcon({ className = "w-10 h-10", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}

// Globe icon for web platform support
export function GlobeIcon({ className = "w-10 h-10", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// Ear icon for escucha activa
export function EarIcon({ className = "w-10 h-10", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6.5-6 10.5" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 0 0 4 0" />
      <circle cx="13" cy="22" r="1" fill={color} />
    </svg>
  );
}

// Megaphone icon for campaigns
export function MegaphoneIcon({ className = "w-10 h-10", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}

// Brain icon for AI agent
export function BrainIcon({ className = "w-10 h-10", color = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 1 4.9 4 4.5 4.5 0 0 1 2.1 4 5 5 0 0 1-2.5 4.3A4 4 0 0 1 12 18" />
      <path d="M12 2a5 5 0 0 0-4.9 4 4.5 4.5 0 0 0-2.1 4 5 5 0 0 0 2.5 4.3A4 4 0 0 0 12 18" />
      <path d="M12 2v16" />
      <path d="M12 18v4" />
      <circle cx="12" cy="9" r="1" fill={color} />
    </svg>
  );
}

export const serviceIcons = {
  nora: DashboardIcon,
  soporte: GlobeIcon,
  escucha: EarIcon,
  campanas: MegaphoneIcon,
  "agente-ia": BrainIcon,
} as const;
