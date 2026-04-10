export interface Profession {
  id: string
  name: string
  nameShort: string
  description: string
  icon: string
  color: string
}

export const PROFESSIONS: Profession[] = [
  {
    id: "electricista",
    name: "Electricista",
    nameShort: "Electricista",
    description: "Electricistas autorizados para averias, instalaciones completas y emergencias electricas en Zaragoza.",
    icon: "Zap",
    color: "#f59e0b",
  },
  {
    id: "fontanero",
    name: "Fontanero",
    nameShort: "Fontanero",
    description: "Fontaneros cualificados para fugas, roturas de tuberia e instalaciones de agua y gas en Zaragoza.",
    icon: "Droplets",
    color: "#3b82f6",
  },
  {
    id: "cerrajero",
    name: "Cerrajero",
    nameShort: "Cerrajero",
    description: "Cerrajeros expertos en aperturas, cambios de cerradura y sistemas de seguridad en Zaragoza.",
    icon: "KeyRound",
    color: "#ef4444",
  },
  {
    id: "desatascos",
    name: "Desatascos",
    nameShort: "Desatascos",
    description: "Servicio profesional de desatascos con maquinaria industrial en Zaragoza y provincia.",
    icon: "Waves",
    color: "#10b981",
  },
  {
    id: "calderas",
    name: "Calderas",
    nameShort: "Calderas",
    description: "Tecnicos de calderas para revisiones, averias, instalacion y sustitucion en Zaragoza.",
    icon: "Flame",
    color: "#f97316",
  },
]

export const VALID_PROFESSIONS = PROFESSIONS.map((p) => p.id)

export const KNOWN_MODIFIERS = [
  "rapido",
  "profesional",
  "economico",
  "urgente",
  "nocturno",
  "autorizado",
  "cerca-de-mi",
  "a-domicilio",
  "de-guardia",
  "con-garantia",
  "de-confianza",
  "homologado",
  "disponible-hoy",
  "fin-de-semana",
  "inmediato",
  "industrial",
  "residencial",
] as const

export const KNOWN_PREFIXES = ["precio", "presupuesto"] as const

export type ModifierType = (typeof KNOWN_MODIFIERS)[number]
export type PrefixType = (typeof KNOWN_PREFIXES)[number]
