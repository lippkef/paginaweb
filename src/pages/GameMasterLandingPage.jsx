import React, { useState, useEffect } from "react";
import "./GameMasterLandingPage.css";
import "../components/LandingImageSection.css";
import homeBackground from "./iconlogo.png";
import SuggestionForm from "./SuggestionForm";
import LandingHeader from "../components/LandingHeader";
import HeroSection from "../components/HeroSection";
import BeneficiosSection from "../components/BeneficiosSection";
import FuncionesSection from "../components/FuncionesSection";
import TorneosSection from "../components/TorneosSection";
import ReservasSection from "../components/ReservasSection";
import GuiaUsuarioSection from "../components/GuiaUsuarioSection";
import ContactoSection from "../components/ContactoSection";
import CtaBanner from "../components/CtaBanner";
import LandingFooter from "../components/LandingFooter";
import SeoContent from "../components/SeoContent";
import { getAppUrl, getPublicAssetUrl } from "../config/config";

export default function GameMasterLandingPage() {
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  /** null = inicio; beneficios | funciones | torneos | reservas | guia | contacto */
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goHome = () => {
    setActiveSection(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSection = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenApp = () => {
    window.open(getAppUrl(), "_blank");
  };

  const openSuggestions = () => setShowSuggestionsModal(true);
  const closeSuggestions = () => setShowSuggestionsModal(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (showSuggestionsModal) closeSuggestions();
        else if (activeSection) goHome();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showSuggestionsModal, activeSection]);

  const IMAGE_FULL_SECTIONS = ["beneficios", "funciones", "torneos"];
  const isImageFullSection = IMAGE_FULL_SECTIONS.includes(activeSection);

  const sectionBgImages = {
    reservas: "reservasWeb.jpeg",
    guia: "guiaUsuarioWeb.jpeg",
    contacto: "contactosWeb.jpeg",
  };
  const activeBgFile = activeSection ? sectionBgImages[activeSection] : null;
  const sectionViewClass = activeSection
    ? activeBgFile
      ? " landing-section-view--full-bg"
      : " landing-section-view--gradient-bg"
    : "";

  return (
    <div
      className={`landing-container ${isVisible ? "fade-in" : ""} ${
        activeSection === null ? "landing-container--home" : ""
      }`}
    >
      {activeSection === null && (
        <div className="landing-home-bg" aria-hidden="true">
          <img
            src={homeBackground}
            alt=""
            className="landing-home-bg__logo"
          />
        </div>
      )}

      <LandingHeader
        activeSection={activeSection}
        onNavigate={showSection}
        onHome={goHome}
        onOpenSuggestions={openSuggestions}
      />

      {activeSection === null && (
        <HeroSection
          heroImageUrl={getPublicAssetUrl("images/ImagenWebMiPartido.jpeg")}
          onOpenApp={handleOpenApp}
          onRequestDemo={() => showSection("contacto")}
          onOpenSuggestions={openSuggestions}
        />
      )}

      {activeSection !== null && (
        <div
          className={`landing-section-view${sectionViewClass}${
            isImageFullSection ? " landing-section-view--image-full" : ""
          }`}
          style={
            activeBgFile
              ? {
                  "--section-bg-image": `url("${getPublicAssetUrl(
                    `images/${activeBgFile}`
                  )}")`,
                }
              : undefined
          }
        >
          <button type="button" className="landing-back-btn" onClick={goHome}>
            ← Volver al inicio
          </button>

          {activeSection === "beneficios" && (
            <BeneficiosSection
              imageUrl={getPublicAssetUrl("images/beneficiosWeb.jpeg")}
              onRequestDemo={() => showSection("contacto")}
            />
          )}
          {activeSection === "funciones" && (
            <FuncionesSection
              imageUrl={getPublicAssetUrl("images/funcionesWeb.jpeg")}
            />
          )}
          {activeSection === "torneos" && (
            <TorneosSection
              imageUrl={getPublicAssetUrl("images/eventoWeb.jpeg")}
            />
          )}
          {activeSection === "reservas" && <ReservasSection />}
          {activeSection === "guia" && <GuiaUsuarioSection />}
          {activeSection === "contacto" && <ContactoSection />}

          {activeSection !== "contacto" && !isImageFullSection && (
            <CtaBanner onRegisterClick={() => showSection("contacto")} />
          )}
        </div>
      )}

      <LandingFooter onNavigate={showSection} onOpenSuggestions={openSuggestions} />

      <SeoContent />

      {showSuggestionsModal && (
        <div className="modal-backdrop" onClick={closeSuggestions}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SuggestionForm onClose={closeSuggestions} />
            <button className="close-button" onClick={closeSuggestions} aria-label="Cerrar">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
