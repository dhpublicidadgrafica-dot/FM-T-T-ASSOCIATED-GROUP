import { ArrowUpRight, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { PageId } from "./Navbar";

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const ctaWhatsAppUrl = getWhatsAppUrl(
    "Hola, deseo solicitar el servicio de internet rural de FM T&T ASSOCIATED GROUP."
  );

  return (
    <footer className="bg-neutral-50 text-black border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl tracking-tight text-black">
                <strong className="font-extrabold font-display">FM T&T</strong>{" "}
                <span className="font-normal text-neutral-800">Associated Group</span>
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Proveedor de internet especializado en conectividad para zonas rurales, veredas, fincas y pueblos de Antioquia.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs uppercase font-mono tracking-wider border border-neutral-300 text-neutral-700 bg-white">
                Fibra Óptica & Microondas WISP
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5 font-bold">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate("inicio");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate("nosotros");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate("servicios");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate("camaras");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer"
                >
                  Cámaras de Seguridad
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate("contacto");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-neutral-700 hover:text-black font-medium transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-5 font-bold">
              CONTACTO
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-800">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href={`tel:${SITE_CONFIG.PHONE_1}`} className="hover:text-black transition-colors">
                  {SITE_CONFIG.PHONE_1}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-black shrink-0" />
                <a
                  href={ctaWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold hover:underline"
                >
                  {SITE_CONFIG.PHONE_2} <span className="text-xs font-mono text-neutral-500 font-normal">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href={`tel:${SITE_CONFIG.PHONE_3}`} className="hover:text-black transition-colors">
                  {SITE_CONFIG.PHONE_3}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <span className="text-neutral-600">{SITE_CONFIG.HEADQUARTERS}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Redes & Quick CTA */}
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 font-bold">
                REDES SOCIALES
              </h4>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                {SITE_CONFIG.INSTAGRAM_URL ? (
                  <a
                    href={SITE_CONFIG.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-colors bg-white"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                ) : (
                  <div
                    title="Próximamente enlace oficial"
                    className="p-2.5 border border-neutral-300 text-neutral-700 hover:text-black transition-colors cursor-pointer bg-white"
                  >
                    <Instagram className="w-4 h-4" />
                  </div>
                )}

                {/* Facebook */}
                {SITE_CONFIG.FACEBOOK_URL ? (
                  <a
                    href={SITE_CONFIG.FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-colors bg-white"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                ) : (
                  <div
                    title="Próximamente enlace oficial"
                    className="p-2.5 border border-neutral-300 text-neutral-700 hover:text-black transition-colors cursor-pointer bg-white"
                  >
                    <Facebook className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            <div>
              <a
                href={ctaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>SOLICITAR SERVICIO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact required copyright */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 FM T&T ASSOCIATED GROUP. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-neutral-600">
            <span>ANTIOQUIA · COLOMBIA</span>
            <span>·</span>
            <span>FIBRA & MICROONDAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
