import { ArrowRight, ArrowUpRight, Wifi, Radio, Shield, Users, CheckCircle2, ChevronRight, Zap, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../config/siteConfig";
import { FEATURED_HOME_PLANS } from "../data/plansData";
import { CAMERAS_DATA } from "../data/camerasData";
import { CameraIllustration } from "../components/CameraIllustration";
import { PageId } from "../components/Navbar";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const heroWhatsAppUrl = getWhatsAppUrl(
    "Hola, deseo solicitar el servicio de internet de FM T&T ASSOCIATED GROUP para mi finca/hogar."
  );

  const finalCtaWhatsAppUrl = getWhatsAppUrl(
    "Hola, necesito internet donde otros no llegan. ¿Qué plan me recomiendan para mi zona?"
  );

  // Take first 3 cameras for preview
  const previewCameras = CAMERAS_DATA.slice(0, 3);

  return (
    <div className="w-full bg-white text-black">
      {/* 5. HERO PRINCIPAL (85-90vh) - NEGRO PROFUNDO */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-neutral-900 bg-black text-white">
        {/* Abstract technological connectivity backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
          
          {/* Radar / Signal wave rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full border border-neutral-800/70 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[650px] sm:h-[650px] rounded-full border border-neutral-800 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border border-neutral-700/80 pointer-events-none" />

          {/* Vertical light beam / antenna center */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-neutral-700 to-transparent opacity-50" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          {/* Subtle network badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 border border-neutral-800 bg-neutral-950 text-neutral-300 text-xs font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>FIBRA ÓPTICA & MICROONDAS (WISP) · ANTIOQUIA</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] mb-8 max-w-4xl mx-auto">
            INTERNET DONDE OTROS NO LLEGAN
          </h1>

          {/* Secondary Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Conectamos veredas, fincas y pueblos de Antioquia con internet estable, tecnología y oportunidades.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-white shadow-lg"
            >
              <span>SOLICITAR SERVICIO</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => {
                onNavigate("servicios");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-950 text-white hover:bg-neutral-900 text-sm font-bold tracking-wider uppercase transition-all duration-200 border border-neutral-700 cursor-pointer"
            >
              <span>CONOCER NUESTROS PLANES</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN DE PROPUESTA DE VALOR — INICIO */}
      <section className="py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
              PROPUESTA DE VALOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase font-display mb-6">
              CONECTAMOS MÁS QUE INTERNET
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              En FM T&T ASSOCIATED GROUP llevamos conectividad de alta calidad a zonas rurales donde el internet convencional no llega.
              Nuestra tecnología permite que familias, estudiantes, ganaderos, agricultores y emprendedores puedan estar conectados, estudiar, trabajar, comunicarse y crecer.
            </p>
          </div>

          {/* 4 Bloques visuales - NEGRO PROFUNDO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CONECTIVIDAD */}
            <div className="p-8 bg-black border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col justify-between shadow-lg text-white">
              <div>
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white mb-6 bg-neutral-950">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-3">
                  CONECTIVIDAD
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Internet para zonas rurales y lugares de difícil acceso.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                Cobertura rural garantizada
              </div>
            </div>

            {/* ESTABILIDAD */}
            <div className="p-8 bg-black border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col justify-between shadow-lg text-white">
              <div>
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white mb-6 bg-neutral-950">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-3">
                  ESTABILIDAD
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Conexiones diseñadas para ofrecer un servicio confiable.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                Disponibilidad continua 24/7
              </div>
            </div>

            {/* TECNOLOGÍA */}
            <div className="p-8 bg-black border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col justify-between shadow-lg text-white">
              <div>
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white mb-6 bg-neutral-950">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-3">
                  TECNOLOGÍA
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Soluciones mediante fibra óptica y tecnología inalámbrica WISP.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                Radioenlaces & Red Óptica
              </div>
            </div>

            {/* OPORTUNIDADES */}
            <div className="p-8 bg-black border border-neutral-800 hover:border-neutral-600 transition-colors flex flex-col justify-between shadow-lg text-white">
              <div>
                <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center text-white mb-6 bg-neutral-950">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase mb-3">
                  OPORTUNIDADES
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Conectividad para estudiar, trabajar, emprender y crecer.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
                Desarrollo en el campo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN TECNOLOGÍA */}
      <section className="py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
              INGENIERÍA & RED
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase font-display">
              TECNOLOGÍA PARA CONECTAR LO QUE PARECÍA LEJANO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FIBRA ÓPTICA */}
            <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 flex flex-col justify-between relative overflow-hidden group hover:border-black transition-colors">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">
                    RED TERRESTRE
                  </span>
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight mb-4">
                  FIBRA ÓPTICA
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Presentamos la fibra óptica como una tecnología de conexión de alta calidad y estabilidad. Transmisión veloz a través de pulsos de luz con mínima latencia y resistencia a interferencias climáticas.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-mono font-semibold">
                <span>ALTA VELOCIDAD</span>
                <span>MÍNIMA LATENCIA</span>
              </div>
            </div>

            {/* MICROONDAS — WISP */}
            <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 flex flex-col justify-between relative overflow-hidden group hover:border-black transition-colors">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-bold">
                    RED INALÁMBRICA
                  </span>
                  <Radio className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight mb-4">
                  MICROONDAS — WISP
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Presentamos la tecnología WISP como una solución para llevar conectividad a zonas rurales donde las redes convencionales tienen limitaciones. Enlaces punto a punto que superan la geografía montañosa.
                </p>
              </div>
              <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-mono font-semibold">
                <span>ALCANCE RURAL</span>
                <span>DESPLIEGUE ÁGIL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECCIÓN PLANES DESTACADOS — INICIO */}
      <section className="py-24 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
                TARIFAS & COBERTURA
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase font-display">
                ELIGE EL PLAN IDEAL PARA TI
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate("servicios");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-black hover:text-neutral-700 transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>VER TODOS LOS PLANES</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tarjetas destacadas de planes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_HOME_PLANS.map((plan, index) => {
              const planWhatsAppUrl = getWhatsAppUrl(
                `Hola, me interesa el ${plan.planName} (${plan.speed}) en ${plan.zoneName}. Quisiera solicitar este plan.`
              );

              return (
                <div
                  key={index}
                  style={{
                    borderTopColor: plan.color,
                    boxShadow: `0 20px 35px -10px ${plan.color}35`,
                  }}
                  className="p-8 bg-white border border-neutral-200 border-t-8 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm relative pt-10"
                >
                  {/* Top Popular Ribbon */}
                  <div
                    style={{ backgroundColor: plan.color, color: plan.textColor }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-mono uppercase font-extrabold tracking-wider shadow-md whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PLAN MÁS POPULAR</span>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                      {plan.zoneName}
                    </div>
                    <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight mb-2">
                      {plan.speed}
                    </h3>
                    <div
                      style={{ backgroundColor: plan.color, color: plan.textColor }}
                      className="inline-block px-2.5 py-1 text-[11px] font-mono uppercase font-bold mb-6 shadow-xs"
                    >
                      {plan.highlightBadge}
                    </div>

                    <div className="mb-6 pb-6 border-b border-neutral-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-black tracking-tight font-mono">
                          {plan.price}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 text-xs text-neutral-700">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: plan.color }}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={planWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: plan.color, color: plan.textColor }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-90 shadow-xs"
                  >
                    <span>QUIERO ESTE PLAN</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Botón inferior Ver Todos los Planes */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate("servicios");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-100 border border-neutral-300 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-xs"
            >
              <span>VER TODOS LOS PLANES POR ZONA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. SECCIÓN CÁMARAS DE SEGURIDAD — INICIO */}
      <section className="py-24 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-3 block font-bold">
              SEGURIDAD & VIGILANCIA
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase font-display mb-6">
              SEGURIDAD PARA TU HOGAR Y NEGOCIO
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Conoce nuestro catálogo de cámaras de seguridad y encuentra la solución adecuada para tus necesidades.
            </p>
          </div>

          {/* Preview de cámaras */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {previewCameras.map((cam) => {
              const camWhatsAppUrl = getWhatsAppUrl(
                `Hola, estoy interesado en la cámara de seguridad ${cam.name} y quisiera conocer precio y disponibilidad.`
              );

              return (
                <div
                  key={cam.id}
                  className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col justify-between group hover:border-black transition-colors"
                >
                  <div>
                    <CameraIllustration
                      type={cam.imageType}
                      imageUrl={cam.imageUrl}
                      alt={cam.name}
                      className="mb-6"
                    />
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2 font-semibold">
                      <span>{cam.brand}</span>
                      {cam.memory && <span>{cam.memory}</span>}
                    </div>
                    <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-2">
                      {cam.name}
                    </h3>
                    <p className="text-xs text-neutral-600 mb-4 line-clamp-2">
                      {cam.description}
                    </p>
                    <div className="text-sm font-semibold text-black font-mono mb-6">
                      {cam.displayPrice}
                    </div>
                  </div>

                  <a
                    href={camWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-neutral-300 bg-white hover:bg-neutral-100 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>CONSULTAR PRECIO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                onNavigate("camaras");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
            >
              <span>VER CATÁLOGO DE CÁMARAS COMPLETO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL — INICIO (NEGRO PROFUNDO) */}
      <section className="py-24 bg-black text-white text-center relative overflow-hidden border-b border-neutral-900">
        {/* Subtle tech background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-4 block font-bold">
            ATENCIÓN INMEDIATA
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase font-display mb-6">
            ¿NECESITAS INTERNET DONDE OTROS NO LLEGAN?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Consulta nuestra cobertura y encuentra el plan ideal para tu zona.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={finalCtaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-xl border border-white"
            >
              <span>HABLAR POR WHATSAPP</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
