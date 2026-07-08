import React, { useState, useEffect } from 'react';
import { APP_CONFIG, getPublicAssetUrl } from '../config/config';
import './LandingHeader.css';

const NAV_LINKS = [
  { id: 'beneficios', label: 'Beneficios', icon: '💰' },
  { id: 'funciones', label: 'Funciones', icon: '🎾' },
  { id: 'torneos', label: 'Eventos', icon: '🏆' },
  { id: 'reservas', label: 'Reservas', icon: '📅' },
  { id: 'guia', label: 'Guía de usuario', icon: '📖' },
];
const INSTAGRAM_URL =
  'https://www.instagram.com/mipartido.app?utm_source=qr&igsh=MTY4Z28zejB4YXVlYQ==';

function NavLabel({ icon, children }) {
  return (
    <span className="landing-header__nav-label">
      {icon && <span className="landing-header__nav-icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

export default function LandingHeader({ activeSection, onNavigate, onHome, onOpenSuggestions }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (sectionId) => {
    onNavigate(sectionId);
    closeMenu();
  };

  const handleHome = () => {
    onHome();
    closeMenu();
  };

  const handleSuggestions = () => {
    if (onOpenSuggestions) onOpenSuggestions();
    closeMenu();
  };

  const isContactActive = activeSection === 'contacto';

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className={`landing-header${menuOpen ? ' landing-header--menu-open' : ''}`}>
      <div className="landing-header__inner container">
        <button
          type="button"
          className="landing-header__brand"
          onClick={handleHome}
        >
          <img
            src={getPublicAssetUrl('iconlogo.png')}
            alt={APP_CONFIG.name}
            className="landing-header__logo"
          />
          <span className="landing-header__name">{APP_CONFIG.name}</span>
        </button>

        <button
          type="button"
          className="landing-header__toggle"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <button
            type="button"
            className="landing-header__backdrop"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
        )}

        <nav id="landing-main-nav" className={`landing-header__nav ${menuOpen ? 'is-open' : ''}`}>
          {activeSection !== null && (
            <button type="button" className="landing-header__nav-btn" onClick={handleHome}>
              <NavLabel icon="🏠">Inicio</NavLabel>
            </button>
          )}
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`landing-header__nav-btn ${
                activeSection === link.id ? 'is-active' : ''
              }`}
              onClick={() => handleNav(link.id)}
            >
              <NavLabel icon={link.icon}>{link.label}</NavLabel>
            </button>
          ))}
          <button
            type="button"
            className="landing-header__nav-btn landing-header__nav-btn--soft"
            onClick={handleSuggestions}
          >
            <NavLabel icon="⭐">Sugerencias</NavLabel>
          </button>
          <button
            type="button"
            className={`btn-primary landing-header__cta ${
              isContactActive ? 'landing-header__cta--active' : ''
            }`}
            onClick={() => handleNav('contacto')}
          >
            <NavLabel icon="📞">Solicitar demo</NavLabel>
          </button>
          <a
            href={INSTAGRAM_URL}
            className="landing-header__instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2m0 1.8a3.95 3.95 0 0 0-3.95 3.95v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5m8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3M12 6.85A5.15 5.15 0 1 1 6.85 12 5.15 5.15 0 0 1 12 6.85m0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Z"
              />
            </svg>
            <span>Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
