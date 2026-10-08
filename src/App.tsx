import { useState, useEffect } from "react";
import { Navbar, PageId } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CamerasPage } from "./pages/CamerasPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("inicio");

  // Synchronize browser history / URL hash if desired
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PageId;
      if (["inicio", "nosotros", "servicios", "camaras", "contacto"].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === "inicio" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "nosotros" && <AboutPage />}
        {currentPage === "servicios" && <ServicesPage />}
        {currentPage === "camaras" && <CamerasPage />}
        {currentPage === "contacto" && <ContactPage />}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
