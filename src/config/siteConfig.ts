/**
 * Centralized Configuration for FM T&T ASSOCIATED GROUP
 * Easily update phone numbers, social media links, Google Maps URL, and company data here.
 */

export const SITE_CONFIG = {
  companyName: "FM T&T ASSOCIATED GROUP",
  tagline: "Internet donde otros no llegan",
  description:
    "Proveedor de internet especializado en llevar conexión de alta calidad a veredas, fincas y pueblos de Antioquia donde el internet convencional no llega.",

  // Primary numbers & contact
  WHATSAPP_NUMBER: "+573058339331", // Formato internacional sin espacios para enlaces
  WHATSAPP_DISPLAY: "+57 305 833 9331", // Línea principal — WhatsApp

  PHONE_1: "+57 320 783 7849",
  PHONE_2: "+57 305 833 9331", // Línea principal — WhatsApp
  PHONE_3: "+57 324 453 0266", // Línea especial San José de la Montaña

  // Sede Principal
  HEADQUARTERS: "San José de la Montaña - Antioquia",

  // Redes Sociales (Variables configurables, no inventadas)
  INSTAGRAM_URL: "", // Configurar cuando el cliente proporcione el enlace oficial
  FACEBOOK_URL: "",  // Configurar cuando el cliente proporcione el enlace oficial
  TIKTOK_URL: "",    // Configurar cuando el cliente proporcione el enlace oficial

  // Google Maps (San José de la Montaña - Antioquia)
  // Embed interactivo centrado en la cabecera municipal de San José de la Montaña
  GOOGLE_MAPS_URL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.124808381273!2d-75.6888496!3d6.848805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441398c8c4a923%3A0x6b63d91cf3fe4fa2!2sSan%20Jos%C3%A9%20de%20la%20Monta%C3%B1a%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco",
  GOOGLE_MAPS_EXTERNAL_LINK:
    "https://maps.google.com/?q=San+Jose+de+la+Montana+Antioquia",

  // Zonas de cobertura actual
  COVERAGE_ZONES: [
    "Santa Rosa de Osos",
    "Entrerríos",
    "Don Matías",
    "Cisneros",
    "Santo Domingo",
    "San Pablo",
    "Aragón",
    "Labores",
    "San José de la Montaña",
  ],
};

/**
 * Utility helper to build WhatsApp redirection URLs with contextual prefilled messages.
 */
export function getWhatsAppUrl(customMessage?: string, phoneNumber = SITE_CONFIG.WHATSAPP_NUMBER): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const defaultMessage =
    "Hola, quiero consultar la cobertura y los planes disponibles de FM T&T ASSOCIATED GROUP.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}
