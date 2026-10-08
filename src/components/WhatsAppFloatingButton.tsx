import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "../config/siteConfig";
import { PageId } from "./Navbar";

interface WhatsAppFloatingButtonProps {
  currentPage: PageId;
}

export function WhatsAppFloatingButton({ currentPage }: WhatsAppFloatingButtonProps) {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Automatic message based on current page as specified in instructions
  const getContextMessage = (page: PageId) => {
    switch (page) {
      case "servicios":
        return "Hola, estoy interesado en uno de los planes de internet y TV de FM T&T ASSOCIATED GROUP. Quisiera recibir información.";
      case "camaras":
        return "Hola, estoy interesado en una cámara de seguridad y quisiera conocer precio y disponibilidad.";
      case "contacto":
        return "Hola, me gustaría comunicarme con un asesor de FM T&T ASSOCIATED GROUP.";
      case "nosotros":
        return "Hola, quiero conocer más sobre la cobertura y servicios rurales de FM T&T ASSOCIATED GROUP.";
      case "inicio":
      default:
        return "Hola, quiero consultar la cobertura y los planes disponibles de FM T&T ASSOCIATED GROUP.";
    }
  };

  const currentMessage = getContextMessage(currentPage);
  const whatsappUrl = getWhatsAppUrl(currentMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Contextual mini tooltip popup */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-black text-xs px-3.5 py-2.5 rounded-none border border-neutral-300 shadow-2xl max-w-xs animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <p className="line-clamp-2 text-neutral-700">
            ¿Dudas sobre cobertura o planes? <strong className="text-black">Escríbenos directamente</strong>
          </p>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="p-1 text-neutral-400 hover:text-black transition-colors cursor-pointer"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 drop-shadow-xl cursor-pointer"
        aria-label="Contactar por WhatsApp a FM T&T ASSOCIATED GROUP"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp FM T&T"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
      </a>
    </div>
  );
}
