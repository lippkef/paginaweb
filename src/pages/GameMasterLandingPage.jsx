import React, { useState, useEffect } from "react";
import "./GameMasterLandingPage.css";
import homeBackground from "./iconlogo.png";
import SuggestionForm from "./SuggestionForm";
import LandingHeader from "../components/LandingHeader";
import HeroSection from "../components/HeroSection";
import PorqueMiPartidoSection from "../components/PorqueMiPartidoSection";
import TestimoniosSection from "../components/TestimoniosSection";
import GuiaUsuarioSection from "../components/GuiaUsuarioSection";
import ContactoSection from "../components/ContactoSection";
import CtaBanner from "../components/CtaBanner";
import LandingFooter from "../components/LandingFooter";
import { getAppUrl } from "../config/config";

export default function GameMasterLandingPage() {
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  /** null = inicio; 'porque' | 'testimonios' | 'guia' | 'contacto' */
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
      />

      {activeSection === null && (
        <HeroSection
          onOpenApp={handleOpenApp}
          onScrollGuia={() => showSection("guia")}
        />
      )}

      {activeSection !== null && (
        <div className="landing-section-view">
          <button type="button" className="landing-back-btn" onClick={goHome}>
            ← Volver al inicio
          </button>

          {activeSection === "porque" && <PorqueMiPartidoSection />}
          {activeSection === "testimonios" && (
            <TestimoniosSection onSuggestionsClick={openSuggestions} />
          )}
          {activeSection === "guia" && <GuiaUsuarioSection />}
          {activeSection === "contacto" && <ContactoSection />}

          {activeSection !== "contacto" && (
            <CtaBanner onRegisterClick={() => showSection("contacto")} />
          )}
        </div>
      )}

      <LandingFooter onNavigate={showSection} />

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
