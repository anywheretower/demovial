export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  colorClass: string;
  features: ServiceFeature[];
  price: number;
  priceLabel: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "nora",
    title: "Plataforma NORA",
    subtitle: "Centro de comando digital",
    description:
      "Dashboard integral para gestionar toda la presencia digital del senador. Creatividades, publicaciones, tareas y métricas en un solo lugar.",
    color: "#6366f1",
    colorClass: "text-service-indigo",
    features: [
      {
        title: "Gestión de creatividades",
        description:
          "Flujo completo de aprobación: briefing → diseño → revisión → publicación.",
      },
      {
        title: "Calendario de publicaciones",
        description:
          "Planificación y programación de contenido en todas las redes sociales.",
      },
      {
        title: "Panel de métricas",
        description:
          "KPIs en tiempo real: engagement, alcance, crecimiento de audiencia.",
      },
      {
        title: "Gestión de equipo",
        description:
          "Roles, permisos y flujos de trabajo para el equipo de comunicaciones.",
      },
    ],
    price: 0,
    priceLabel: "mensual",
  },
  {
    id: 2,
    slug: "soporte",
    title: "Soporte Plataforma Online",
    subtitle: "Presencia web profesional",
    description:
      "Desarrollo y mantenimiento de la plataforma web oficial. Diseño responsivo, SEO optimizado y actualizaciones continuas.",
    color: "#06b6d4",
    colorClass: "text-service-cyan",
    features: [
      {
        title: "Sitio web oficial",
        description:
          "Diseño moderno y profesional que refleja la identidad del senador.",
      },
      {
        title: "Optimización SEO",
        description:
          "Posicionamiento orgánico para búsquedas relevantes en la región del Maule.",
      },
      {
        title: "Mantenimiento continuo",
        description:
          "Actualizaciones de contenido, seguridad y rendimiento garantizado.",
      },
      {
        title: "Analytics avanzado",
        description:
          "Tracking de visitantes, fuentes de tráfico y comportamiento de usuarios.",
      },
    ],
    price: 0,
    priceLabel: "mensual",
  },
  {
    id: 3,
    slug: "escucha",
    title: "Escucha Activa",
    subtitle: "Inteligencia ciudadana en tiempo real",
    description:
      "Monitoreo continuo de conversaciones digitales, medios y redes sociales para entender el pulso de la opinión pública en el Maule.",
    color: "#10b981",
    colorClass: "text-service-emerald",
    features: [
      {
        title: "Monitoreo de redes sociales",
        description:
          "Tracking de menciones, hashtags y conversaciones relevantes 24/7.",
      },
      {
        title: "Análisis de sentimiento",
        description:
          "IA que clasifica opiniones como positivas, negativas o neutras en tiempo real.",
      },
      {
        title: "Alertas tempranas",
        description:
          "Notificaciones inmediatas ante crisis o temas emergentes.",
      },
      {
        title: "Reportes periódicos",
        description:
          "Informes semanales con insights accionables y tendencias del territorio.",
      },
    ],
    price: 0,
    priceLabel: "mensual",
  },
  {
    id: 4,
    slug: "campanas",
    title: "Campañas Interactivas",
    subtitle: "Engagement que genera impacto",
    description:
      "Diseño y ejecución de campañas digitales interactivas que conectan al senador con la ciudadanía del Maule de forma innovadora.",
    color: "#f59e0b",
    colorClass: "text-service-amber",
    features: [
      {
        title: "Estrategia de contenido",
        description:
          "Planificación editorial alineada con la agenda legislativa y territorial.",
      },
      {
        title: "Producción multimedia",
        description:
          "Videos, infografías y piezas interactivas de alto impacto.",
      },
      {
        title: "Campañas segmentadas",
        description:
          "Publicidad digital dirigida por comuna, edad e intereses.",
      },
      {
        title: "Medición de resultados",
        description:
          "ROI claro: alcance, interacciones, conversiones y sentimiento.",
      },
    ],
    price: 0,
    priceLabel: "mensual",
  },
  {
    id: 5,
    slug: "agente-ia",
    title: "Agente IA Personalizado",
    subtitle: "Inteligencia artificial a tu servicio",
    description:
      "Un asistente virtual con IA entrenado específicamente con la información del senador, su agenda y el contexto del Maule.",
    color: "#a855f7",
    colorClass: "text-service-purple",
    features: [
      {
        title: "Base de conocimiento propia",
        description:
          "Entrenado con discursos, votaciones, proyectos de ley y datos del Maule.",
      },
      {
        title: "Atención ciudadana 24/7",
        description:
          "Responde consultas frecuentes de los ciudadanos de forma automática.",
      },
      {
        title: "Generación de contenido",
        description:
          "Borradores de comunicados, respuestas y documentos con el tono del senador.",
      },
      {
        title: "Integración multicanal",
        description:
          "Disponible en web, WhatsApp y redes sociales del senador.",
      },
    ],
    price: 0,
    priceLabel: "mensual",
  },
];
