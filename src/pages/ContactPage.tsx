import { useState } from "react";
import { ArrowUpRight, Phone, MapPin, Instagram, Facebook, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";

export function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    municipioVereda: "",
    servicio: "Internet Rural",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.telefono.trim()) return;

    // Build personalized WhatsApp text
    const message = `Hola FM T&T, mi nombre es ${formData.nombre}.
Teléfono: ${formData.telefono}
Ubicación / Vereda: ${formData.municipioVereda || "No especificada"}
Interés: ${formData.servicio}
Mensaje adicional: ${formData.mensaje || "Deseo recibir información"}`;

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="relative py-20 sm:py-28 border-b border-neutral-900 bg-black text-white text-center overflow-hidden">
        {/* Background Image with transparency overlay for text legibility */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <picture>
            <source srcSet="/contact-hero-bg.webp" type="image/webp" />
            <img
              src="/contact-hero-bg.jpg"
              alt="Fondo Canales de Atención"
              className="w-full h-full object-cover object-center opacity-85 scale-105 transition-transform duration-1000"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-300 mb-3 inline-block border border-neutral-700 px-3 py-1 bg-black/60 backdrop-blur-xs font-bold drop-shadow-sm">
            CANALES DE ATENCIÓN
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] mb-8 max-w-4xl mx-auto drop-shadow-md">
            HABLEMOS
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 font-normal max-w-2xl mx-auto drop-shadow-sm">
            ¿Necesitas internet, televisión o cámaras de seguridad? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-2 block font-bold">
                  LÍNEAS DE COMUNICACIÓN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight mb-4">
                  TELÉFONOS & ATENCIÓN
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Llámanos o escríbenos a cualquiera de nuestras líneas oficiales para solicitar viabilidad de instalación, soporte o asesoría comercial.
                </p>
              </div>

              {/* Phone Cards */}
              <div className="space-y-4">
                {/* Principal / WhatsApp */}
                <div className="p-6 bg-white border-2 border-black flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-bold">
                        LÍNEA PRINCIPAL — WHATSAPP
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-black font-mono">
                        {SITE_CONFIG.PHONE_2}
                      </div>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl("Hola, deseo comunicarme con la línea principal de FM T&T.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black text-white hover:bg-neutral-800 transition-colors shadow-xs"
                    aria-label="Abrir WhatsApp"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Secondary Phone 1 */}
                <div className="p-6 bg-white border border-neutral-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 text-black flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-bold">
                        LÍNEA TELEFÓNICA 1
                      </div>
                      <div className="text-lg font-bold text-black font-mono">
                        {SITE_CONFIG.PHONE_1}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.PHONE_1}`}
                    className="p-3 border border-neutral-300 hover:border-black text-black hover:bg-neutral-100 transition-colors"
                    aria-label="Llamar teléfono 1"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                {/* Secondary Phone 3 (San José de la Montaña) */}
                <div className="p-6 bg-white border border-neutral-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 text-black flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-bold">
                        LÍNEA SAN JOSÉ DE LA MONTAÑA
                      </div>
                      <div className="text-lg font-bold text-black font-mono">
                        {SITE_CONFIG.PHONE_3}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.PHONE_3}`}
                    className="p-3 border border-neutral-300 hover:border-black text-black hover:bg-neutral-100 transition-colors"
                    aria-label="Llamar teléfono San José de la Montaña"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                {/* Headquarters Location Card */}
                <div className="p-6 bg-white border border-neutral-200 flex items-start gap-4 shadow-xs">
                  <div className="w-12 h-12 border border-neutral-200 bg-neutral-50 text-black flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 font-bold">
                      SEDE PRINCIPAL
                    </div>
                    <div className="text-base font-bold text-black uppercase mt-0.5">
                      {SITE_CONFIG.HEADQUARTERS}
                    </div>
                    <p className="text-xs text-neutral-600 mt-1">
                      Centro de operaciones e ingeniería para el Norte y Nordeste antioqueño.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-neutral-200">
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-4 block font-bold">
                  REDES SOCIALES OFICIALES
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 text-xs text-neutral-800">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 text-xs text-neutral-800">
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Direct Lead / Information Form */}
            <div className="p-8 sm:p-10 bg-black border border-neutral-800 text-white shadow-xl">
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2 block font-bold">
                SOLICITUD INMEDIATA
              </span>
              <h2 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-3">
                ENVIAR MENSAJE
              </h2>
              <p className="text-xs text-neutral-400 mb-8">
                Completa tus datos y serás dirigido automáticamente a WhatsApp con tu información lista para ser atendida por un asesor.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-neutral-900 border border-neutral-700 text-xs text-white flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-white" />
                  <span>Se abrió la ventana de WhatsApp. Si no cargó, presiona el botón nuevamente.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-bold">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Carlos Restrepo"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-bold">
                    Teléfono celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="Ej. 305 123 4567"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-bold">
                    Municipio o Vereda
                  </label>
                  <input
                    type="text"
                    value={formData.municipioVereda}
                    onChange={(e) => setFormData({ ...formData, municipioVereda: e.target.value })}
                    placeholder="Ej. Vereda San Isidro, Santa Rosa de Osos"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-bold">
                    Servicio de interés
                  </label>
                  <select
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                  >
                    <option value="Internet Rural" className="bg-white text-neutral-900">Internet Rural</option>
                    <option value="Combo Internet + Televisión" className="bg-white text-neutral-900">Combo Internet + Televisión</option>
                    <option value="Solo Televisión" className="bg-white text-neutral-900">Solo Televisión</option>
                    <option value="Cámaras de Seguridad" className="bg-white text-neutral-900">Cámaras de Seguridad</option>
                    <option value="Consulta de Cobertura" className="bg-white text-neutral-900">Consulta de Cobertura</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-300 mb-2 font-bold">
                    Comentario o detalle adicional
                  </label>
                  <textarea
                    rows={3}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Indícanos si tienes finca, requerimientos de velocidad o dudas técnicas..."
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR SOLICITUD POR WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 23. GOOGLE MAPS — ENCUÉNTRANOS */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
              UBICACIÓN GEOGRÁFICA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase font-display mb-4">
              ENCUÉNTRANOS
            </h2>
            <div className="flex items-center gap-2 text-neutral-700 text-base font-medium">
              <MapPin className="w-5 h-5 text-black shrink-0" />
              <span>Sede principal: <strong className="text-black">{SITE_CONFIG.HEADQUARTERS}</strong></span>
            </div>
          </div>

          {/* Responsive Map Container without dark inversion filter */}
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 bg-neutral-100 border border-neutral-300 overflow-hidden shadow-sm">
            <iframe
              src={SITE_CONFIG.GOOGLE_MAPS_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FM T&T ASSOCIATED GROUP en San José de la Montaña, Antioquia"
              className="w-full h-full"
            />

            {/* Overlay badge with location details */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 p-4 sm:p-5 bg-white/95 backdrop-blur-md border border-neutral-300 max-w-sm pointer-events-auto shadow-lg">
              <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold block mb-1">
                SEDE CENTRAL
              </span>
              <h4 className="text-sm font-bold text-black uppercase mb-1">
                FM T&T ASSOCIATED GROUP
              </h4>
              <p className="text-xs text-neutral-600 mb-3">
                San José de la Montaña, Antioquia · Colombia
              </p>
              <a
                href={SITE_CONFIG.GOOGLE_MAPS_EXTERNAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-black font-bold hover:underline"
              >
                <span>Abrir en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
