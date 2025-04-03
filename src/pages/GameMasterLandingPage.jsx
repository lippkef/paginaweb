import React, { useState } from "react";
import "./GameMasterLandingPage.css";
import heroImg from './iconlogo.png';
import SuggestionForm from "./SuggestionForm";

export default function GameMasterLandingPage() {
  // Estado para mostrar/ocultar modal
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);
  const handleExecute = () => {
    window.open('http://localhost:3000', '_blank');
    // o la URL real donde corre la app
  };

  // Funciones para abrir/cerrar el modal
  const openSuggestions = () => setShowSuggestionsModal(true);
  const closeSuggestions = () => setShowSuggestionsModal(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);
  return (
    <div className="landing-container">
      {/* Sección Hero */}
      <header className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src={heroImg}
            alt="Game Master Hero"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Game Master</h1>
          <p className="hero-subtitle">
            La nueva plataforma que revoluciona la manera de gestionar y organizar torneos.
          </p>
          <button className="hero-button" onClick={handleExecute} >Ejecutar Game Master</button>
        </div>
      </header>
      <div className="features-testimonials-wrapper">
        {/* Sección Features */}
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
        {/* Sección Testimonios */}
        <section className="testimonials-section">
          <h2 className="section-title">Testimonios</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Increíble solución para mis torneos de fin de semana. Organizar es facilísimo.”
              </p>
              <p className="testimonial-author">- Juan S.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Game Master simplificó mi forma de gestionar ligas con mis amigos.”
              </p>
              <p className="testimonial-author">- Karina L.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “El ranking global y el sistema de brackets es impresionante.”
              </p>
              <p className="testimonial-author">- Alberto G.</p>
            </div>
          </div>
          <button className="some-button" onClick={openSuggestions}>
            Sugerencias
          </button>
        </section>
      </div>

      {/* Sección CTA Final */}
      <section className="cta-section">
        <h2 className="section-title">Únete a Game Master</h2>
        <p className="cta-text">
          Lleva tu experiencia de torneos y eventos al siguiente nivel.
          ¡Es tu momento de brillar!
        </p>
        <button className="cta-button" onClick={openContactModal}>
          Registrar Centros Deportivos
        </button>      </section>
      {/* El modal (sugerencias) */}
      {showSuggestionsModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>¡Danos tus sugerencias!</h2>
            <SuggestionForm onClose={closeSuggestions} />
            <button className="close-button" onClick={closeSuggestions}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="footer-section">
        <p>© 2025 Game Master. Todos los derechos reservados.</p>
      </footer>
      {/* Modal de Contacto */}
      {showContactModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
          <h3>Registro en Game Master</h3>
            <ul>
              <li>Para su registro en game master </li>
              <li>debe contactar a la persona</li>
              <li>indicada en Datos de contacto</li>
            </ul>
            <h3>Datos de contacto de Game Master</h3>
            <ul>
              <li>Teléfono: 653 537 499</li>
              <li>Email: lippkef@micronetca.com</li>
              <li>Contacto: Francisco Lippke</li>
            </ul>
            <button className="close-button" onClick={closeContactModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
