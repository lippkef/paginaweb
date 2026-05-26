import React, { useState, useEffect } from "react";
import "./GameMasterLandingPage.css";
import heroImg from './iconlogo.png';
import SuggestionForm from "./SuggestionForm";
import GuiaUsuarioSection from "../components/GuiaUsuarioSection";
import { APP_CONFIG } from "../config/config";

const WHATSAPP_MESSAGE =
  "Hola, me gustaría registrar mi centro deportivo en Game Master.";

export default function GameMasterLandingPage() {
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExecute = () => {
    const baseURL = window.location.origin;
    window.open(`${baseURL}/masterJuegos`, "_blank");
  };

  const openSuggestions = () => setShowSuggestionsModal(true);
  const closeSuggestions = () => setShowSuggestionsModal(false);
  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeSuggestions();
        closeContactModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className={`landing-container ${isVisible ? 'fade-in' : ''}`}>
      <header className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src={heroImg}
            alt="Game Master Hero"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">{APP_CONFIG.name}</h1>
          <p className="hero-subtitle">
            La nueva plataforma que revoluciona la manera de gestionar y organizar torneos.
          </p>
          <button className="hero-button" onClick={handleExecute}>
            Ejecutar Game Master
          </button>
        </div>
      </header>

      <div className="features-testimonials-wrapper">
        <section className="features-section">
          <h2 className="section-title">¿Por qué Game Master?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Gestión de Torneos</h3>
              <p>
                Administra eventos, jugadores y drops de forma simple e intuitiva,
                con potentes herramientas de clasificación y emparejamientos.
              </p>
            </div>
            <div className="feature-card">
              <h3>Ranking Personalizado</h3>
              <p>
                Game Master calcula y actualiza posiciones globales.
                Obtén estadísticas avanzadas para cada jugador.
              </p>
            </div>
            <div className="feature-card">
              <h3>Multi-tipo de evento</h3>
              <p>
                Desde torneos de eliminación directa a formatos de pozo o partidos individuales.
                Personaliza el drop y reglas.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="section-title">Testimonios</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Increíble solución para mis torneos de fin de semana. Organizar es facilísimo."
              </p>
              <p className="testimonial-author">- Juan S.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Game Master simplificó mi forma de gestionar ligas con mis amigos."
              </p>
              <p className="testimonial-author">- Karina L.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "El ranking global y el sistema de brackets es impresionante."
              </p>
              <p className="testimonial-author">- Alberto G.</p>
            </div>
          </div>
          <button className="some-button" onClick={openSuggestions}>
            Sugerencias
          </button>
        </section>
      </div>

      <GuiaUsuarioSection />

      <section className="cta-section">
        <h2 className="section-title">Únete a Game Master</h2>
        <p className="cta-text">
          Lleva tu experiencia de torneos y eventos al siguiente nivel.
          ¡Es tu momento de brillar!
        </p>
        <button className="cta-button" onClick={openContactModal}>
          Registrar Centros Deportivos
        </button>
      </section>

      {showSuggestionsModal && (
        <div className="modal-backdrop" onClick={closeSuggestions}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SuggestionForm onClose={closeSuggestions} />
            <button className="close-button" onClick={closeSuggestions}>
              ✕
            </button>
          </div>
        </div>
      )}

      <footer className="footer-section">
        <div className="footer-content">
          <p>© 2025 {APP_CONFIG.name}. Todos los derechos reservados.</p>
          <p className="footer-version">v{APP_CONFIG.version}</p>
        </div>
      </footer>

      {showContactModal && (
        <div className="modal-backdrop" onClick={closeContactModal}>
          <div
            className="modal-content contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={closeContactModal}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <header className="contact-modal__header">
              <span className="contact-modal__badge">Registro de centros</span>
              <h3>Registro en Game Master</h3>
              <p className="contact-modal__intro">
                Para registrar tu centro deportivo, contacta con nuestro equipo.
                Puedes llamar, escribir por correo o contactar por{" "}
                <strong>WhatsApp</strong> en los números indicados (+34).
              </p>
            </header>

            <div className="contact-cards">
              {APP_CONFIG.registrationContacts.map((person) => (
                <article key={person.email} className="contact-card">
                  <div className="contact-card__avatar" aria-hidden="true">
                    {person.name.charAt(0)}
                  </div>
                  <div className="contact-card__body">
                    <h4 className="contact-card__name">{person.name}</h4>
                    <ul className="contact-card__details">
                      <li>
                        <span className="contact-card__label">Teléfono</span>
                        <a
                          href={`tel:+${person.phoneE164}`}
                          className="contact-card__link"
                        >
                          {person.phone}
                        </a>
                      </li>
                      <li>
                        <span className="contact-card__label">Email</span>
                        <a
                          href={`mailto:${person.email}`}
                          className="contact-card__link"
                        >
                          {person.email}
                        </a>
                      </li>
                    </ul>
                    {person.whatsapp && (
                      <a
                        href={`https://wa.me/${person.phoneE164}?text=${encodeURIComponent(
                          WHATSAPP_MESSAGE
                        )}`}
                        className="contact-card__whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="contact-card__whatsapp-icon" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </span>
                        Contactar por WhatsApp
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className="contact-modal__note">
              Horario de respuesta habitual: días laborables. Indica el nombre de tu
              centro deportivo al escribirnos.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
