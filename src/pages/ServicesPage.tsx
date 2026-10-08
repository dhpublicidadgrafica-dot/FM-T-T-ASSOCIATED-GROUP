import { useState } from "react";
import { ArrowUpRight, Tv, Check, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { ZONES_DATA } from "../data/plansData";
import { getWhatsAppUrl } from "../config/siteConfig";

export function ServicesPage() {
  const [activeZoneId, setActiveZoneId] = useState<string>("all");

  const displayedZones =
    activeZoneId === "all"
      ? ZONES_DATA
      : ZONES_DATA.filter((z) => z.id === activeZoneId);

  return (
    <div className="w-full bg-white text-black">
      {/* Header section */}
      <section className="py-20 border-b border-neutral-200 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-600 mb-3 inline-block border border-neutral-300 px-3 py-1 bg-neutral-50 font-bold">
            TARIFAS TRANSPARENTES
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black uppercase font-display leading-[1.08] mb-8 max-w-4xl mx-auto">
            PLANES DE INTERNET Y TV
          </h1>
          <p className="text-lg sm:text-xl text-neutral-700 font-normal max-w-2xl mx-auto">
            Encuentra el plan disponible para tu zona. Conexión de fibra óptica y microondas diseñada para el campo.
          </p>

          {/* Zone filter tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveZoneId("all")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeZoneId === "all"
                  ? "bg-black text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:text-black border border-neutral-300"
              }`}
            >
              Todas las Zonas
            </button>
            {ZONES_DATA.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeZoneId === zone.id
                    ? "bg-black text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-700 hover:text-black border border-neutral-300"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: zone.color }}
                />
                <span>Zona {zone.number}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Zones and Plans */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {displayedZones.map((zone) => (
            <div
              key={zone.id}
              id={zone.id}
              style={{ borderTopColor: zone.color }}
              className="bg-white border border-neutral-200 border-t-8 p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
            >
              {/* Zone Header Block */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-neutral-200 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      style={{ backgroundColor: zone.color, color: zone.textColor }}
                      className="px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase shadow-xs"
                    >
                      ZONA {zone.number}
                    </span>
                    <div className="text-xs font-mono text-neutral-500 font-semibold">
                      COBERTURA RURAL
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black uppercase tracking-tight">
                    {zone.name}
                  </h2>
                </div>

                {/* Additional conditions: Afiliación / Instalación / Teléfono especial */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  {zone.affiliationFee && (
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-bold">Afiliación</span>
                      <strong className="text-black text-sm">{zone.affiliationFee}</strong>
                    </div>
                  )}

                  {zone.installationFee && (
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-bold">Instalación</span>
                      <strong className="text-black text-sm">{zone.installationFee}</strong>
                    </div>
                  )}

                  {zone.equipmentCondition && (
                    <div className="p-3 bg-neutral-50 border border-neutral-200">
                      <span className="text-neutral-500 block text-[10px] uppercase font-bold">Condición</span>
                      <strong className="text-black text-sm">{zone.equipmentCondition}</strong>
                    </div>
                  )}

                  {zone.specialPhone && (
                    <div className="p-3 bg-black text-white border border-black">
                      <span className="text-neutral-400 block text-[10px] uppercase font-bold">Línea directa</span>
                      <a href={`tel:${zone.specialPhone}`} className="text-white text-sm font-bold flex items-center gap-1.5 hover:underline">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{zone.specialPhone}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* BENEFICIO DESTACADO (ZONA 01 y ZONA 02) */}
              {zone.tvBenefitHighlight && (
                <div
                  style={{ borderLeftColor: zone.color }}
                  className="mb-10 p-6 sm:p-8 bg-neutral-50 border-2 border-black border-l-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div
                      style={{ backgroundColor: zone.color, color: zone.textColor }}
                      className="w-12 h-12 flex items-center justify-center shrink-0 shadow-xs"
                    >
                      <Tv className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-xs font-mono tracking-widest uppercase text-neutral-500 font-bold">
                        BENEFICIO DESTACADO
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight">
                        INCLUYE TV
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-700 font-medium">
                        {zone.tvBenefitHighlight}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white border border-neutral-300 text-xs font-mono text-black uppercase tracking-wider text-center shrink-0 font-bold">
                    Entretenimiento sin costo extra
                  </div>
                </div>
              )}

              {/* Cards Grid */}
              <div
                className={`grid grid-cols-1 gap-6 ${
                  zone.plans.length === 3
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {zone.plans.map((plan) => {
                  const isFeatured = plan.featured;
                  const buttonLabel =
                    zone.id === "zona-01" || zone.id === "zona-02"
                      ? "SOLICITAR ESTE PLAN"
                      : "QUIERO ESTE PLAN";

                  const message = `Hola, deseo contratar el ${plan.name} (${plan.speedOrService}) de ${zone.name} por ${plan.priceMonthly}/mes con FM T&T ASSOCIATED GROUP.`;
                  const planWhatsAppUrl = getWhatsAppUrl(
                    message,
                    zone.specialPhone || undefined
                  );

                  return (
                    <div
                      key={plan.id}
                      style={{
                        borderTopColor: zone.color,
                        borderColor: isFeatured ? zone.color : undefined,
                        boxShadow: isFeatured
                          ? `0 20px 35px -10px ${zone.color}45, 0 4px 15px -3px rgba(0,0,0,0.08)`
                          : undefined,
                      }}
                      className={`p-6 sm:p-8 bg-white flex flex-col justify-between transition-all duration-300 relative ${
                        isFeatured
                          ? "border-2 border-t-8 shadow-xl lg:-translate-y-2 z-10"
                          : "border border-neutral-200 border-t-4 hover:border-black shadow-xs hover:shadow-md"
                      }`}
                    >
                      {/* Popular Top Ribbon */}
                      {isFeatured && (
                        <div
                          style={{ backgroundColor: zone.color, color: zone.textColor }}
                          className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 text-[11px] font-mono uppercase font-extrabold tracking-wider shadow-md whitespace-nowrap"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>PLAN MÁS POPULAR</span>
                        </div>
                      )}

                      <div>
                        {/* Plan Header */}
                        <div className={`flex items-center justify-between mb-3 ${isFeatured ? "pt-2" : ""}`}>
                          <span className={`text-xs font-mono uppercase tracking-wider ${isFeatured ? "text-black font-bold" : "text-neutral-500 font-semibold"}`}>
                            {plan.name}
                          </span>
                          {isFeatured && (
                            <span
                              style={{ backgroundColor: `${zone.color}25`, color: zone.textColor === "#000000" ? "#000000" : zone.color }}
                              className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold border"
                            >
                              RECOMENDADO
                            </span>
                          )}
                        </div>

                        <div className="text-2xl font-extrabold text-black uppercase tracking-tight mb-4">
                          {plan.speedOrService}
                        </div>

                        {/* Large Price Display */}
                        <div className={`py-4 my-2 border-y ${isFeatured ? "border-neutral-200 bg-neutral-50/60 -mx-6 sm:-mx-8 px-6 sm:px-8" : "border-neutral-100"}`}>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-black font-mono tracking-tight">
                              {plan.priceMonthly}
                            </span>
                            <span className="text-xs font-mono text-neutral-500 font-semibold">/ mes</span>
                          </div>
                        </div>

                        {/* Notes & details */}
                        <div className="mt-4 mb-6 space-y-2.5 text-xs text-neutral-600">
                          {plan.notes && (
                            <div className="flex items-start gap-2">
                              <Check
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: zone.color }}
                              />
                              <span className={isFeatured ? "font-medium text-black" : ""}>{plan.notes}</span>
                            </div>
                          )}
                          <div className="flex items-start gap-2">
                            <ShieldCheck
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: zone.color }}
                            />
                            <span>Soporte técnico directo</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={planWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: isFeatured ? zone.color : "#000000",
                          color: isFeatured ? zone.textColor : "#FFFFFF",
                        }}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-xs hover:opacity-95 ${
                          isFeatured ? "shadow-md hover:scale-[1.02]" : "hover:bg-neutral-800"
                        }`}
                      >
                        <span>{buttonLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance Banner (NEGRO PROFUNDO) */}
      <section className="py-24 border-t border-neutral-900 bg-[#000000] text-white text-center relative overflow-hidden">
        {/* Subtle tech background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3 block font-bold">
            ASESORÍA RURAL ESPECIALIZADA
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight mb-4 font-display">
            ¿Dudas sobre cuál plan se adapta mejor a tu finca o negocio?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Te asesoramos sin costo según el número de dispositivos, ubicación geográfica y requerimientos de conexión.
          </p>
          <a
            href={getWhatsAppUrl("Hola, requiero asesoría para elegir el plan más conveniente para mi finca.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-xl border border-white cursor-pointer"
          >
            <span>HABLAR CON UN ASESOR</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="mt-6 text-xs font-mono text-neutral-400">
            Atención personalizada · Respuesta ágil vía WhatsApp
          </div>
        </div>
      </section>
    </div>
  );
}
