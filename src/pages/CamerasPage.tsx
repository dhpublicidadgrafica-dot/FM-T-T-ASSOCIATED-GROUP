import { useState } from "react";
import { ArrowUpRight, Shield, Eye, Lock, HardDrive } from "lucide-react";
import { CAMERAS_DATA } from "../data/camerasData";
import { CameraIllustration } from "../components/CameraIllustration";
import { getWhatsAppUrl } from "../config/siteConfig";

export function CamerasPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("TODOS");
  const [selectedType, setSelectedType] = useState<string>("TODOS");

  const filteredCameras = CAMERAS_DATA.filter((cam) => {
    const matchesBrand = selectedBrand === "TODOS" || cam.brand === selectedBrand;
    const matchesType = selectedType === "TODOS" || cam.type === selectedType;
    return matchesBrand && matchesType;
  });

  return (
    <div className="w-full bg-white text-black">
      {/* Header */}
      <section className="py-20 border-b border-neutral-900 bg-black text-white text-center relative overflow-hidden">
        {/* Subtle tech background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 mb-3 inline-block border border-neutral-800 px-3 py-1 bg-neutral-950 font-bold">
            CATÁLOGO DE PRODUCTOS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] mb-8 max-w-4xl mx-auto">
            CÁMARAS DE SEGURIDAD
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-2xl mx-auto">
            Soluciones de videovigilancia para proteger tus espacios. Monitorea tu finca, hogar o negocio en tiempo real desde tu celular.
          </p>

          {/* Filter options */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-1 border border-neutral-800 p-1 bg-neutral-950">
              <span className="text-[11px] font-mono text-neutral-400 uppercase px-2 font-bold">Marca:</span>
              {["TODOS", "EZVIZ", "HILOOK"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors cursor-pointer ${
                    selectedBrand === brand
                      ? "bg-white text-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 border border-neutral-800 p-1 bg-neutral-950">
              <span className="text-[11px] font-mono text-neutral-400 uppercase px-2 font-bold">Formato:</span>
              {["TODOS", "360°", "DOMO", "BALA"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors cursor-pointer ${
                    selectedType === type
                      ? "bg-white text-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCameras.map((camera) => {
              const whatsappUrl = getWhatsAppUrl(
                `Hola, estoy interesado en la cámara de seguridad ${camera.name} y quisiera conocer precio y disponibilidad para mi predio/hogar.`
              );

              return (
                <div
                  key={camera.id}
                  className="bg-white border border-neutral-200 p-6 flex flex-col justify-between group hover:border-black transition-all duration-200 shadow-xs"
                >
                  <div>
                    {/* Render Image */}
                    <div className="mb-6">
                      <CameraIllustration
                        type={camera.imageType}
                        imageUrl={camera.imageUrl}
                        alt={camera.name}
                      />
                    </div>

                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2 font-semibold">
                      <span className="font-bold text-black">{camera.brand}</span>
                      <span className="border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-[10px] text-neutral-700">
                        {camera.type}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-2 min-h-[3.2rem]">
                      {camera.name}
                    </h3>

                    {/* Memory feature if present */}
                    {camera.memory && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-800 mb-4 font-semibold">
                        <HardDrive className="w-3 h-3 text-black" />
                        <span>{camera.memory}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                      {camera.description}
                    </p>
                  </div>

                  {/* Price & CTA */}
                  <div>
                    <div className="py-3 mb-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase text-neutral-500 font-semibold">Estado</span>
                      <span className="text-sm font-bold text-black font-mono">
                        {camera.displayPrice}
                      </span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      <span>CONSULTAR POR WHATSAPP</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Security Features Banner */}
          <div className="mt-20 p-8 sm:p-12 bg-white border border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0 text-black">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase mb-1">Visualización Remota</h4>
                <p className="text-xs text-neutral-600">
                  Accede a la transmisión de video en vivo desde tu teléfono móvil estés donde estés.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0 text-black">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase mb-1">Protección para Fincas</h4>
                <p className="text-xs text-neutral-600">
                  Modelos diseñados con protección climática y visión nocturna ColorVu de largo alcance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0 text-black">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase mb-1">Instalación Profesional</h4>
                <p className="text-xs text-neutral-600">
                  Configuración e integración directa con tu conexión a internet de FM T&T.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
