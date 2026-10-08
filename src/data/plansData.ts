export interface PlanItem {
  id: string;
  name: string;
  speedOrService: string;
  priceMonthly: string;
  priceNumeric: number;
  featured?: boolean;
  notes?: string;
}

export interface ZoneGroup {
  id: string;
  number: string;
  name: string;
  color: string;
  textColor: string;
  lightBg: string;
  municipalities: string[];
  affiliationFee?: string;
  installationFee?: string;
  specialPhone?: string;
  tvBenefitHighlight?: string;
  equipmentCondition?: string;
  plans: PlanItem[];
}

export const ZONES_DATA: ZoneGroup[] = [
  {
    id: "zona-01",
    number: "01",
    name: "Santa Rosa de Osos, Entrerríos y Don Matías",
    color: "#FFB70B",
    textColor: "#000000",
    lightBg: "#FFF9E6",
    municipalities: ["Santa Rosa de Osos", "Entrerríos", "Don Matías"],
    affiliationFee: "$125.000",
    installationFee: "+$50.000 por instalación",
    equipmentCondition: "Equipo en comodato",
    tvBenefitHighlight: "Más de 500 canales, series y películas",
    plans: [
      {
        id: "z1-5m",
        name: "Plan 5 Megas",
        speedOrService: "5 MEGAS",
        priceMonthly: "$75.000",
        priceNumeric: 75000,
        notes: "Ideal para navegación básica y redes sociales",
      },
      {
        id: "z1-8m",
        name: "Plan 8 Megas",
        speedOrService: "8 MEGAS",
        priceMonthly: "$85.000",
        priceNumeric: 85000,
        featured: true,
        notes: "Excelente equilibrio para teletrabajo y educación",
      },
      {
        id: "z1-10m",
        name: "Plan 10 Megas",
        speedOrService: "10 MEGAS",
        priceMonthly: "$125.000",
        priceNumeric: 125000,
        notes: "Máxima velocidad para streaming y múltiples dispositivos",
      },
    ],
  },
  {
    id: "zona-02",
    number: "02",
    name: "Cisneros y Santo Domingo",
    color: "#8E68FB",
    textColor: "#FFFFFF",
    lightBg: "#F4F0FF",
    municipalities: ["Cisneros", "Santo Domingo"],
    affiliationFee: "$150.000",
    installationFee: "+$50.000 por instalación",
    tvBenefitHighlight: "Más de 500 canales, series y películas",
    plans: [
      {
        id: "z2-3m",
        name: "Plan 3 Megas",
        speedOrService: "3 MEGAS",
        priceMonthly: "$65.000",
        priceNumeric: 65000,
        notes: "Conexión estable para mensajería y navegación",
      },
      {
        id: "z2-5m",
        name: "Plan 5 Megas",
        speedOrService: "5 MEGAS",
        priceMonthly: "$85.000",
        priceNumeric: 85000,
        notes: "Conexión confiable para el hogar",
      },
      {
        id: "z2-8m",
        name: "Plan 8 Megas",
        speedOrService: "8 MEGAS",
        priceMonthly: "$100.000",
        priceNumeric: 100000,
        featured: true,
        notes: "Mayor velocidad para familias y pequeñas fincas",
      },
      {
        id: "z2-10m",
        name: "Plan 10 Megas",
        speedOrService: "10 MEGAS",
        priceMonthly: "$125.000",
        priceNumeric: 125000,
        notes: "Velocidad óptima y estabilidad continua",
      },
    ],
  },
  {
    id: "zona-03",
    number: "03",
    name: "San Pablo, Aragón y Labores",
    color: "#E41F66",
    textColor: "#FFFFFF",
    lightBg: "#FDF0F5",
    municipalities: ["San Pablo", "Aragón", "Labores"],
    installationFee: "$60.000",
    plans: [
      {
        id: "z3-internet",
        name: "Plan Internet",
        speedOrService: "INTERNET",
        priceMonthly: "$55.000",
        priceNumeric: 55000,
        notes: "Conexión dedicada a internet de alta calidad",
      },
      {
        id: "z3-internet-tv",
        name: "Plan Internet + TV",
        speedOrService: "INTERNET + TV",
        priceMonthly: "$75.000",
        priceNumeric: 75000,
        featured: true,
        notes: "Combo completo: internet y entretenimiento de televisión",
      },
      {
        id: "z3-tv",
        name: "Plan Solo TV",
        speedOrService: "SOLO TV",
        priceMonthly: "$35.000",
        priceNumeric: 35000,
        notes: "Señal de televisión para el hogar rural",
      },
    ],
  },
  {
    id: "zona-04",
    number: "04",
    name: "San José de la Montaña",
    color: "#235BCC",
    textColor: "#FFFFFF",
    lightBg: "#EEF4FD",
    municipalities: ["San José de la Montaña"],
    specialPhone: "+57 324 453 0266",
    plans: [
      {
        id: "z4-tv",
        name: "Plan Solo TV",
        speedOrService: "SOLO TV",
        priceMonthly: "$30.000",
        priceNumeric: 30000,
        notes: "Señal de televisión con variedad de canales",
      },
      {
        id: "z4-internet",
        name: "Plan Internet",
        speedOrService: "INTERNET",
        priceMonthly: "$45.000",
        priceNumeric: 45000,
        notes: "Conexión estable y dedicada",
      },
      {
        id: "z4-internet-tv",
        name: "Plan Internet + TV",
        speedOrService: "INTERNET + TV",
        priceMonthly: "$79.000",
        priceNumeric: 79000,
        featured: true,
        notes: "Combo integral de internet de alta estabilidad y televisión",
      },
    ],
  },
];

// Highlighted plans for Home page preview
export const FEATURED_HOME_PLANS = [
  {
    zoneName: "Zona 01 — Santa Rosa, Entrerríos, Don Matías",
    planName: "Plan 8 Megas + TV",
    speed: "8 MEGAS",
    price: "$85.000",
    period: "/ mes",
    highlightBadge: "Incluye TV (+500 canales)",
    zoneId: "zona-01",
    color: "#FFB70B",
    textColor: "#000000",
    features: [
      "Tecnología de fibra óptica / microondas",
      "Más de 500 canales, series y películas",
      "Equipo en comodato",
      "Soporte técnico cercano y directo",
    ],
  },
  {
    zoneName: "Zona 03 — San Pablo, Aragón, Labores",
    planName: "Internet + TV",
    speed: "INTERNET + TV",
    price: "$75.000",
    period: "/ mes",
    highlightBadge: "Instalación $60.000",
    zoneId: "zona-03",
    color: "#E41F66",
    textColor: "#FFFFFF",
    features: [
      "Conexión estable para zonas rurales",
      "Televisión incluida en el paquete",
      "Baja latencia para estudio y trabajo",
      "Instalación ágil en fincas y veredas",
    ],
  },
  {
    zoneName: "Zona 04 — San José de la Montaña",
    planName: "Internet + TV",
    speed: "INTERNET + TV",
    price: "$79.000",
    period: "/ mes",
    highlightBadge: "Línea: +57 324 453 0266",
    zoneId: "zona-04",
    color: "#235BCC",
    textColor: "#FFFFFF",
    features: [
      "Atención directa desde la sede principal",
      "Internet de alta disponibilidad",
      "Servicio de televisión completa",
      "Atención especializada para hogares y fincas",
    ],
  },
];
