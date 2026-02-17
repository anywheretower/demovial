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
    title: "Gestión NORA",
    subtitle: "Panel de gestión senatorial",
    description:
      "Una plataforma propia donde su equipo coordina contenidos, aprueba piezas de comunicación y mide el impacto de cada acción. Todo el flujo de trabajo de la oficina senatorial, ordenado en un solo lugar.",
    color: "#3b82f6",
    colorClass: "text-service-blue",
    features: [
      {
        title: "Flujo de aprobación",
        description:
          "Cada pieza de comunicación pasa por un proceso claro: solicitud, diseño, revisión y publicación.",
      },
      {
        title: "Calendario editorial",
        description:
          "Planificación semanal y mensual de contenidos alineada con la agenda legislativa.",
      },
      {
        title: "Indicadores de gestión",
        description:
          "Métricas claras sobre alcance, recepción ciudadana y rendimiento de cada publicación.",
      },
      {
        title: "Coordinación de equipo",
        description:
          "Roles y permisos para que cada miembro de la oficina trabaje de forma ordenada y autónoma.",
      },
    ],
    price: 200000,
    priceLabel: "mensual",
  },
  {
    id: 2,
    slug: "portal",
    title: "Portal Senatorial",
    subtitle: "Vitrina pública de la gestión",
    description:
      "Un sitio web institucional que refleje la seriedad de la labor senatorial. Proyectos de ley, intervenciones en sala, trabajo territorial y canales de contacto directo con la ciudadanía del Maule.",
    color: "#14b8a6",
    colorClass: "text-service-teal",
    features: [
      {
        title: "Perfil legislativo",
        description:
          "Historial de votaciones, proyectos presentados y comisiones. Una trayectoria visible y actualizada.",
      },
      {
        title: "Agenda territorial",
        description:
          "Calendario público con actividades en terreno, audiencias y reuniones en la región.",
      },
      {
        title: "Canal ciudadano",
        description:
          "Formularios de contacto y solicitudes para que los vecinos del Maule lleguen directamente a la oficina.",
      },
      {
        title: "Actualización permanente",
        description:
          "Mantenimiento continuo del contenido, seguridad del sitio y optimización para buscadores.",
      },
    ],
    price: 200000,
    priceLabel: "mensual",
  },
  {
    id: 3,
    slug: "escucha",
    title: "Escucha Territorial",
    subtitle: "El pulso del Maule en tiempo real",
    description:
      "Saber qué piensa, qué necesita y qué preocupa a los habitantes del Maule. Monitoreo permanente de conversaciones en medios y redes sociales para tomar decisiones informadas.",
    color: "#10b981",
    colorClass: "text-service-emerald",
    features: [
      {
        title: "Monitoreo de opinión pública",
        description:
          "Seguimiento continuo de lo que se dice sobre la gestión, la región y los temas legislativos clave.",
      },
      {
        title: "Análisis de percepción",
        description:
          "Inteligencia artificial que identifica el tono de las conversaciones: apoyo, crítica o indiferencia.",
      },
      {
        title: "Alertas de contingencia",
        description:
          "Notificaciones inmediatas cuando surge un tema urgente o una crisis que requiere pronunciamiento.",
      },
      {
        title: "Informes ejecutivos",
        description:
          "Reportes semanales con los temas más relevantes del territorio y recomendaciones de acción.",
      },
    ],
    price: 200000,
    priceLabel: "mensual",
  },
  {
    id: 4,
    slug: "difusion",
    title: "Difusión Legislativa",
    subtitle: "La labor senatorial, visible para todos",
    description:
      "Que el trabajo en el Senado no quede entre cuatro paredes. Producción de contenido que traduzca la actividad legislativa en mensajes claros, cercanos y relevantes para la gente del Maule.",
    color: "#f59e0b",
    colorClass: "text-service-amber",
    features: [
      {
        title: "Contenido legislativo",
        description:
          "Piezas que explican proyectos de ley, votaciones y debates de forma accesible para la ciudadanía.",
      },
      {
        title: "Cobertura territorial",
        description:
          "Registro y difusión de actividades en terreno: visitas, reuniones, inauguraciones y gestiones.",
      },
      {
        title: "Producción audiovisual",
        description:
          "Videos, gráficas e infografías con estándar profesional para redes sociales y medios.",
      },
      {
        title: "Distribución estratégica",
        description:
          "Publicación segmentada por comuna y temática para llegar a quien más le importa cada mensaje.",
      },
    ],
    price: 200000,
    priceLabel: "mensual",
  },
  {
    id: 5,
    slug: "agente-ia",
    title: "Asistente Institucional IA",
    subtitle: "Inteligencia al servicio de la oficina senatorial",
    description:
      "Un asistente con inteligencia artificial entrenado con la información pública del senador, su agenda y el contexto del Maule. Responde consultas, genera borradores y apoya la operación diaria del equipo.",
    color: "#64748b",
    colorClass: "text-service-slate",
    features: [
      {
        title: "Conocimiento especializado",
        description:
          "Entrenado con el historial legislativo, discursos, datos regionales y documentos de la oficina.",
      },
      {
        title: "Atención ciudadana permanente",
        description:
          "Responde consultas frecuentes de los vecinos del Maule las 24 horas, los 7 días de la semana.",
      },
      {
        title: "Apoyo a la redacción",
        description:
          "Borradores de comunicados, minutas y respuestas formales con el tono institucional adecuado.",
      },
      {
        title: "Disponible en múltiples canales",
        description:
          "Integración en el sitio web, WhatsApp y las redes sociales de la oficina senatorial.",
      },
    ],
    price: 200000,
    priceLabel: "mensual",
  },
];
