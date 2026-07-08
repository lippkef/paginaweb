import React from 'react';
import { APP_CONFIG, getPublicAssetUrl } from '../config/config';
import './LandingFooter.css';
const INSTAGRAM_URL =
  'https://www.instagram.com/mipartido.app?utm_source=qr&igsh=MTY4Z28zejB4YXVlYQ==';

export default function LandingFooter({ onNavigate, onOpenSuggestions }) {
  const year = new Date().getFullYear();
  const contacts = APP_CONFIG.registrationContacts;

  const nav = (section) => (e) => {
    e.preventDefault();
    onNavigate(section);
  };

  return (
    <footer className="landing-footer">
      <div className="landing-footer__grid container">
        <div className="landing-footer__brand-col">
          <div className="landing-footer__brand">
            <img
              src={getPublicAssetUrl('iconlogo.png')}
              alt={APP_CONFIG.name}
              className="landing-footer__logo"
            />
            <span>{APP_CONFIG.name}</span>
          </div>
          <p className="landing-footer__tagline">{APP_CONFIG.tagline}</p>
          <p className="landing-footer__desc">{APP_CONFIG.description}</p>
        </div>

        <div className="landing-footer__col">
          <h4>Producto</h4>
          <ul>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('beneficios')}>
                Beneficios
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('funciones')}>
                Funciones
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('torneos')}>
                Torneos
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('reservas')}>
                Reservas
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('guia')}>
                Guía de usuario
              </button>
            </li>
          </ul>
        </div>

        <div className="landing-footer__col">
          <h4>Empresa</h4>
          <ul>
            <li>
              <button
                type="button"
                className="landing-footer__link-btn"
                onClick={() => onNavigate('contacto')}
              >
                Solicitar demo
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('guia')}>
                Cómo empezar
              </button>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                className="landing-footer__instagram"
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
            </li>
            <li>
              <button
                type="button"
                className="landing-footer__link-btn"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenSuggestions) onOpenSuggestions();
                }}
              >
                Sugerencias
              </button>
            </li>
          </ul>
        </div>

        <div className="landing-footer__col landing-footer__col--contact">
          <h4>¿Hablamos?</h4>
          <div className="landing-footer__contacts">
            {contacts.map((person) => (
              <div key={person.email} className="landing-footer__person">
                <p className="landing-footer__person-name">{person.name}</p>
                <ul className="landing-footer__contact">
                  <li>
                    <a href={`tel:+${person.phoneE164}`}>{person.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </li>
                  {person.whatsapp && (
                    <li>
                      <a
                        href={`https://wa.me/${person.phoneE164}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="landing-footer__whatsapp"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="landing-footer__bottom container">
        <p>© {year} {APP_CONFIG.name}. Todos los derechos reservados.</p>
        <p className="landing-footer__version">v{APP_CONFIG.version}</p>
      </div>
    </footer>
  );
}
