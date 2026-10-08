import { ArrowUpRight, GraduationCap, Briefcase, MessageSquare, TrendingUp, Sparkles, Wifi } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";

export function AboutPage() {
  const aboutWhatsAppUrl = getWhatsAppUrl(
    "Hola, he leído sobre FM T&T ASSOCIATED GROUP y me gustaría consultar información sobre sus servicios para mi comunidad/finca."
  );

  return (
    <div className="w-full bg-white text-black">
      {/* HERO NOSOTROS */}
      <section className="relative py-24 sm:py-32 border-b border-neutral-200 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-600 mb-4 inline-block border border-neutral-300 px-3 py-1 bg-neutral-50 font-bold">
            QUIÉNES SOMOS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black uppercase font-display mb-8 max-w-4xl mx-auto leading-[1.1]">
            CONECTAMOS ZONAS RURALES CON EL MUNDO
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 font-normal max-w-3xl mx-auto leading-relaxed">
            En FM T&T ASSOCIATED GROUP somos un proveedor de internet especializado en llevar conexión de alta calidad a veredas, fincas y pueblos donde el internet convencional no llega.
          </p>
        </div>
      </section>

      {/* NUESTRA HISTORIA / PROPÓSITO (Presentado mediante bloques visuales estructurados) */}
      <section className="py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
              HISTORIA & PROPÓSITO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black uppercase font-display">
              NUESTRA RAZÓN DE SER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bloque 1 */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 font-bold">
                  01. ESPECIALIZACIÓN RURAL
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tight mb-4">
                  Conexión donde el internet convencional no llega
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  En FM T&T ASSOCIATED GROUP somos un proveedor de internet especializado en llevar conexión de alta calidad a veredas, fincas y pueblos donde el internet convencional no llega.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-mono text-neutral-500">
                Infraestructura adaptada al relieve antioqueño
              </div>
            </div>

            {/* Bloque 2 */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 font-bold">
                  02. NUESTRO ORIGEN
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tight mb-4">
                  Tecnología de fibra óptica y microondas (WISP)
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Nacimos con el propósito de conectar las zonas rurales de Antioquia con el mundo, ofreciendo tecnología de fibra óptica y microondas (WISP) que garantizan estabilidad, velocidad y un servicio confiable.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-mono text-neutral-500">
                Estabilidad · Velocidad · Confianza
              </div>
            </div>

            {/* Bloque 3 */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 font-bold">
                  03. NUESTRO PÚBLICO
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tight mb-4">
                  Compromiso con el campo y sus familias
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Nuestro compromiso con las familias, estudiantes, ganaderos, agricultores y emprendedores que necesitan un internet estable para estudiar, trabajar, comunicarse y crecer.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-mono text-neutral-500">
                Estudiantes · Familias · Productores
              </div>
            </div>

            {/* Bloque 4 */}
            <div className="p-8 sm:p-10 bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 font-bold">
                  04. TRANSFORMACIÓN
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tight mb-4">
                  Oportunidades, educación y desarrollo
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  En FM T&T no solo llevamos internet, llevamos oportunidades, educación y desarrollo a cada rincón.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 text-xs font-mono text-neutral-500">
                Impulso al desarrollo regional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SECCIÓN MISIÓN / COMPROMISO (NEGRO PROFUNDO) */}
      <section className="py-24 border-b border-neutral-900 bg-black text-white relative overflow-hidden">
        {/* Subtle tech background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3 block font-bold">
              FILOSOFÍA EMPRESARIAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
              NUESTRO COMPROMISO
            </h2>
          </div>

          {/* Composición visual de los 6 pilares requeridos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <Wifi className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                CONECTIVIDAD
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <GraduationCap className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                EDUCACIÓN
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <Briefcase className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                TRABAJO
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <MessageSquare className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                COMUNICACIÓN
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <TrendingUp className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                DESARROLLO
              </div>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-neutral-600 transition-colors shadow-lg">
              <Sparkles className="w-8 h-8 text-white mb-3" />
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                OPORTUNIDADES
              </div>
            </div>
          </div>

          {/* Frase destacada requerida */}
          <div className="p-10 sm:p-16 bg-neutral-100 border border-neutral-200 text-neutral-900 text-center max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase font-display leading-tight mb-6">
              NO SOLO LLEVAMOS INTERNET. LLEVAMOS OPORTUNIDADES.
            </h3>
            <p className="text-base text-neutral-700 max-w-2xl mx-auto mb-8 font-normal">
              Creemos firmemente que la distancia física nunca debe ser una barrera para acceder al conocimiento, a nuevos mercados y al contacto con los seres queridos.
            </p>
            <a
              href={aboutWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>SOLICITAR SERVICIO PARA TU ZONA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
