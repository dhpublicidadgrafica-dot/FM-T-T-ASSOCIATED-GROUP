import { useState } from "react";

interface CameraIllustrationProps {
  type: "dome" | "bullet" | "dual-lens-360" | "single-lens-360" | "colorvu-bullet" | "colorvu-dome";
  imageUrl?: string;
  alt?: string;
  className?: string;
}

export function CameraIllustration({
  type,
  imageUrl = "/camera.webp",
  alt = "Cámara de Seguridad",
  className = "",
}: CameraIllustrationProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center w-full aspect-4/3 bg-white border border-neutral-200 rounded-none overflow-hidden group-hover:border-black transition-colors ${className}`}
    >
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

      {/* Main Product Image provided by client */}
      {!hasError && imageUrl ? (
        <img
          src={imageUrl}
          alt={alt}
          onError={() => setHasError(true)}
          className="relative z-10 w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        /* Vector Fallback if Image is Unavailable */
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {type === "dual-lens-360" && (
            <svg viewBox="0 0 200 200" className="w-32 h-32 text-black" fill="none" stroke="currentColor">
              <circle cx="100" cy="100" r="60" strokeWidth="1.5" strokeDasharray="4 2" className="text-neutral-300" />
              <circle cx="100" cy="100" r="44" strokeWidth="2.5" className="text-black fill-white" />
              <circle cx="100" cy="85" r="14" strokeWidth="2" className="text-black fill-neutral-900" />
              <circle cx="100" cy="85" r="6" strokeWidth="1.5" className="text-neutral-400 fill-neutral-800" />
              <circle cx="97" cy="83" r="1.5" fill="white" />
              <circle cx="100" cy="115" r="11" strokeWidth="1.5" className="text-black fill-neutral-900" />
              <circle cx="100" cy="115" r="4" strokeWidth="1" className="text-neutral-400 fill-neutral-800" />
              <path d="M75 144 H125 L115 160 H85 Z" strokeWidth="2" className="text-neutral-700 fill-neutral-200" />
              <circle cx="120" cy="85" r="1.5" fill="black" />
              <path d="M48 100 A52 52 0 0 1 152 100" strokeWidth="1.5" strokeDasharray="3 3" className="text-neutral-400" />
            </svg>
          )}

          {type === "single-lens-360" && (
            <svg viewBox="0 0 200 200" className="w-32 h-32 text-black" fill="none" stroke="currentColor">
              <circle cx="100" cy="100" r="58" strokeWidth="1.5" strokeDasharray="4 2" className="text-neutral-300" />
              <circle cx="100" cy="94" r="42" strokeWidth="2.5" className="text-black fill-white" />
              <circle cx="100" cy="94" r="18" strokeWidth="2" className="text-black fill-neutral-900" />
              <circle cx="100" cy="94" r="8" strokeWidth="1.5" className="text-neutral-400 fill-neutral-800" />
              <circle cx="97" cy="91" r="2.5" fill="white" />
              <path d="M70 136 H130 L120 156 H80 Z" strokeWidth="2" className="text-neutral-700 fill-neutral-200" />
              <path d="M55 94 C55 68 145 68 145 94" strokeWidth="1.5" className="text-neutral-500" />
              <polygon points="144,90 148,96 140,96" fill="currentColor" className="text-neutral-700" />
            </svg>
          )}

          {(type === "dome" || type === "colorvu-dome") && (
            <svg viewBox="0 0 200 200" className="w-32 h-32 text-black" fill="none" stroke="currentColor">
              <rect x="50" y="55" width="100" height="14" rx="2" strokeWidth="2" className="text-black fill-neutral-200" />
              <path d="M60 69 C60 125, 140 125, 140 69 Z" strokeWidth="2.5" className="text-neutral-700 fill-white" />
              <ellipse cx="100" cy="85" rx="26" ry="24" strokeWidth="2" className="text-black fill-neutral-100" />
              <circle cx="100" cy="88" r="12" strokeWidth="2" className="text-black fill-neutral-900" />
              <circle cx="100" cy="88" r="5" strokeWidth="1.5" className="text-neutral-300 fill-neutral-800" />
              <circle cx="98" cy="86" r="2" fill="white" />
              {type === "colorvu-dome" ? (
                <>
                  <circle cx="86" cy="74" r="2" fill="black" />
                  <circle cx="114" cy="74" r="2" fill="black" />
                  <text x="100" y="150" textAnchor="middle" fill="#000000" fontSize="9" letterSpacing="2" fontFamily="monospace" fontWeight="bold">COLORVU</text>
                </>
              ) : (
                <circle cx="88" cy="76" r="1.5" fill="#737373" />
              )}
            </svg>
          )}

          {(type === "bullet" || type === "colorvu-bullet") && (
            <svg viewBox="0 0 200 200" className="w-32 h-32 text-black" fill="none" stroke="currentColor">
              <rect x="36" y="80" width="12" height="40" rx="2" strokeWidth="2" className="text-neutral-700 fill-neutral-200" />
              <path d="M48 100 L76 100" strokeWidth="4" className="text-neutral-600" />
              <rect x="76" y="80" width="70" height="40" rx="4" strokeWidth="2.5" className="text-black fill-white" />
              <path d="M72 76 L154 76 L150 82 L72 82 Z" strokeWidth="1.5" className="text-neutral-700 fill-neutral-100" />
              <rect x="146" y="82" width="10" height="36" rx="2" strokeWidth="2" className="text-black fill-neutral-900" />
              <circle cx="151" cy="100" r="7" strokeWidth="2" className="text-neutral-400 fill-neutral-800" />
              <circle cx="151" cy="100" r="3" fill="white" />
              {type === "colorvu-bullet" && (
                <text x="110" y="152" textAnchor="middle" fill="#000000" fontSize="9" letterSpacing="2" fontFamily="monospace" fontWeight="bold">COLORVU 24/7</text>
              )}
            </svg>
          )}
        </div>
      )}

      {/* Optical indicator */}
      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-white/90 border border-neutral-200 text-[9px] tracking-wider text-neutral-600 uppercase font-mono font-bold shadow-xs">
        HD OPTICS
      </div>
    </div>
  );
}
