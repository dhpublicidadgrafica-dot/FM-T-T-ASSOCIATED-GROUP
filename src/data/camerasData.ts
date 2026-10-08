export interface SecurityCamera {
  id: string;
  name: string;
  brand: "EZVIZ" | "HILOOK";
  type: "360°" | "DOMO" | "BALA";
  memory?: string;
  displayPrice: string; // "Consultar precio" / "Precio por confirmar"
  priceNumeric?: number; // Configurable para cuando se asignen precios oficiales
  imageType: "dome" | "bullet" | "dual-lens-360" | "single-lens-360" | "colorvu-bullet" | "colorvu-dome";
  imageUrl: string;
  description: string;
}

export const CAMERAS_DATA: SecurityCamera[] = [
  {
    id: "ezviz-doble-lente-360",
    name: "EZVIZ DOBLE LENTE 360°",
    brand: "EZVIZ",
    type: "360°",
    memory: "Memoria 64 GB",
    displayPrice: "Consultar precio",
    imageType: "dual-lens-360",
    imageUrl: "/camera.webp",
    description: "Cámara inteligente con doble lente para cobertura panorámica 360° y memoria incluida de 64 GB.",
  },
  {
    id: "ezviz-lente-360",
    name: "EZVIZ LENTE 360°",
    brand: "EZVIZ",
    type: "360°",
    memory: "Memoria 64 GB",
    displayPrice: "Consultar precio",
    imageType: "single-lens-360",
    imageUrl: "/camera.webp",
    description: "Cámara de vigilancia rotativa 360° con seguimiento inteligente y memoria de 64 GB.",
  },
  {
    id: "ezviz-estatica-domo",
    name: "EZVIZ ESTÁTICA DOMO",
    brand: "EZVIZ",
    type: "DOMO",
    displayPrice: "Consultar precio",
    imageType: "dome",
    imageUrl: "/camera.webp",
    description: "Cámara estática formato domo para monitoreo discreto y seguro de áreas interiores o techadas.",
  },
  {
    id: "ezviz-estatica-bala",
    name: "EZVIZ ESTÁTICA BALA",
    brand: "EZVIZ",
    type: "BALA",
    displayPrice: "Consultar precio",
    imageType: "bullet",
    imageUrl: "/camera.webp",
    description: "Cámara estática formato bala de alta durabilidad para exteriores, fachadas y accesos.",
  },
  {
    id: "hilook-bala",
    name: "HILOOK BALA",
    brand: "HILOOK",
    type: "BALA",
    displayPrice: "Consultar precio",
    imageType: "bullet",
    imageUrl: "/camera.webp",
    description: "Cámara de videovigilancia corporativa formato bala para protección perimetral.",
  },
  {
    id: "hilook-domo",
    name: "HILOOK DOMO",
    brand: "HILOOK",
    type: "DOMO",
    displayPrice: "Consultar precio",
    imageType: "dome",
    imageUrl: "/camera.webp",
    description: "Cámara de seguridad formato domo para monitoreo continuo de oficinas, locales y viviendas.",
  },
  {
    id: "hilook-colorvu-bala",
    name: "HILOOK COLORVU BALA",
    brand: "HILOOK",
    type: "BALA",
    displayPrice: "Consultar precio",
    imageType: "colorvu-bullet",
    imageUrl: "/camera.webp",
    description: "Cámara perimetral con tecnología ColorVu para visualización con colores nítidos incluso en la oscuridad.",
  },
  {
    id: "hilook-colorvu-domo",
    name: "HILOOK COLORVU DOMO",
    brand: "HILOOK",
    type: "DOMO",
    displayPrice: "Consultar precio",
    imageType: "colorvu-dome",
    imageUrl: "/camera.webp",
    description: "Cámara domo con tecnología ColorVu para vigilancia nocturna a todo color en tus espacios.",
  },
];
