import { useState } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";

export type PageId = "inicio" | "nosotros" | "servicios" | "camaras" | "contacto";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "camaras", label: "Cámaras de Seguridad" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ctaWhatsAppUrl = getWhatsAppUrl(
    "Hola, estoy interesado en solicitar información sobre los servicios de FM T&T ASSOCIATED GROUP."
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Official Brand Text Wordmark */}
        <button
          onClick={() => handleNavClick("inicio")}
          className="text-left group flex items-center cursor-pointer shrink-0 py-1"
          aria-label="FM T&T Associated Group"
        >
          <span className="text-lg sm:text-xl tracking-tight text-black transition-colors group-hover:text-neutral-700">
            <strong className="font-extrabold font-display">FM T&T</strong>{" "}
            <span className="font-normal text-neutral-800">Associated Group</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Text with subtle active/hover underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer whitespace-nowrap transition-colors py-1 relative ${
                  isActive
                    ? "text-black font-bold"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button (SOLICITAR INFORMACIÓN -> WhatsApp) */}
        <div className="flex items-center gap-3">
          <a
            href={ctaWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-neutral-800 border border-black rounded-none transition-all duration-150 whitespace-nowrap"
          >
            <span>SOLICITAR INFORMACIÓN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 border border-neutral-300 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-5 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-between border-l-2 ${
                    isActive
                      ? "border-black bg-neutral-100 text-black"
                      : "border-transparent text-neutral-600 hover:text-black hover:bg-neutral-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-black" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-neutral-200 flex flex-col gap-3">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-black hover:bg-neutral-800 transition-colors text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>SOLICITAR INFORMACIÓN</span>
            </a>
            <div className="text-center text-xs text-neutral-500 font-mono">
              WhatsApp principal: {SITE_CONFIG.WHATSAPP_DISPLAY}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
