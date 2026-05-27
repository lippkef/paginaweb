import React, { useState } from 'react';
import { APP_CONFIG } from '../config/config';
import './LandingHeader.css';

const NAV_LINKS = [
  { id: 'porque', label: 'Por qué MiPartido' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'guia', label: 'Guía de usuario' },
];

export default function LandingHeader({ activeSection, onNavigate, onHome }) {
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

  const isContactActive = activeSection === 'contacto';

  return (
    <header className="landing-header">
      <div className="landing-header__inner container">
        <button
          type="button"
          className="landing-header__brand"
          onClick={handleHome}
        >
          <img
            src={`${process.env.PUBLIC_URL}/iconlogo.png`}
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

        <nav className={`landing-header__nav ${menuOpen ? 'is-open' : ''}`}>
          {activeSection !== null && (
            <button type="button" className="landing-header__link landing-header__link--btn" onClick={handleHome}>
              Inicio
            </button>
          )}
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`landing-header__link landing-header__link--btn ${
                activeSection === link.id ? 'is-active' : ''
              }`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className={`landing-header__link landing-header__link--btn ${
              isContactActive ? 'is-active' : ''
            }`}
            onClick={() => handleNav('contacto')}
          >
            Contacto
          </button>
          <button
            type="button"
            className={`btn-primary landing-header__cta ${
              isContactActive ? 'landing-header__cta--active' : ''
            }`}
            onClick={() => handleNav('contacto')}
          >
            Registrar centro
          </button>
        </nav>
      </div>
    </header>
  );
}
