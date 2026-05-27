import React from 'react';
import { APP_CONFIG } from '../config/config';
import './LandingFooter.css';

export default function LandingFooter({ onNavigate }) {
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
              src={`${process.env.PUBLIC_URL}/iconlogo.png`}
              alt={APP_CONFIG.name}
              className="landing-footer__logo"
            />
            <span>{APP_CONFIG.name}</span>
          </div>
          <p className="landing-footer__tagline">{APP_CONFIG.description}</p>
        </div>

        <div className="landing-footer__col">
          <h4>Producto</h4>
          <ul>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('porque')}>
                Funciones
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('guia')}>
                Guía de usuario
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('testimonios')}>
                Testimonios
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
                Registrar centro
              </button>
            </li>
            <li>
              <button type="button" className="landing-footer__link-btn" onClick={nav('guia')}>
                Cómo empezar
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
