import React from 'react';
import { APP_CONFIG } from '../config/config';
import { FeatureIcon } from './icons/FeatureIcons';
import './HeroSection.css';

function StarRating() {
  return (
    <span className="hero-stars" aria-label="Valoración 4,8 de 5">
      {'★★★★★'}
    </span>
  );
}

const HERO_NAV = [
  { id: 'porque', label: 'Por qué MiPartido' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'guia', label: 'Guía de usuario' },
];

export default function HeroSection({ onOpenApp, onScrollGuia, onNavigate }) {
  const { hero, socialProof, name } = APP_CONFIG;
  const logoUrl = `${process.env.PUBLIC_URL}/iconlogo.png`;

  return (
    <section className="hero-mip" id="inicio">
      <div className="hero-mip__inner container">
        <div className="hero-mip__content">
          <span className="hero-mip__badge">{hero.badge}</span>
          <h1 className="hero-mip__title">
            {hero.headline}{' '}
            <span className="hero-mip__accent">{hero.headlineAccent}</span>
          </h1>
          <p className="hero-mip__subtitle">{hero.subtitle}</p>

          <ul className="hero-mip__bullets">
            {hero.bullets.map((b) => (
              <li key={b.text}>
                <FeatureIcon name={b.icon} />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          <div className="hero-mip__actions">
            <button type="button" className="btn-primary hero-mip__cta" onClick={onOpenApp}>
              Abrir {name}
              <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="btn-secondary" onClick={onScrollGuia}>
              Ver cómo funciona
            </button>
          </div>

          <div className="hero-mip__proof">
            <StarRating />
            <span>{socialProof.label}</span>
            <span className="hero-mip__rating">{socialProof.rating}</span>
          </div>

          {onNavigate && (
            <div className="hero-mip__quick-nav">
              {HERO_NAV.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="hero-mip__quick-btn"
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hero-mip__phones">
          <div className="phone-mockup phone-mockup--back">
            <div className="phone-mockup__frame">
              <div className="phone-mockup__screen phone-mockup__screen--menu">
                <div className="phone-menu__panel">
                  <img src={logoUrl} alt="" className="phone-menu__logo" />
                  <h3 className="phone-menu__title">Master Juegos</h3>
                  <p className="phone-menu__subtitle">Padel/Tennis</p>
                  <p className="phone-menu__line">Centro Deportivo Prueba</p>
                  <p className="phone-menu__line">Bienvenido, Frank Lippke</p>

                  <div className="phone-menu__actions">
                    <button type="button" className="phone-menu__btn">Perfil</button>
                    <button type="button" className="phone-menu__btn">Seleccionar Evento</button>
                    <button type="button" className="phone-menu__btn">Eventos</button>
                    <button type="button" className="phone-menu__btn">Ver Jugadores</button>
                    <button type="button" className="phone-menu__btn">
                      Seleccionar Evento/Jugadores/Pos. Ganadores
                    </button>
                    <button type="button" className="phone-menu__btn">Usuarios</button>
                    <button type="button" className="phone-menu__btn phone-menu__btn--logout">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-mockup phone-mockup--front">
            <div className="phone-mockup__frame">
              <div className="phone-mockup__screen phone-mockup__screen--events">
                <h3 className="phone-events__title">Eventos Activos</h3>
                <div className="phone-events__top-actions">
                  <span className="phone-events__btn phone-events__btn--blue">Crear Evento</span>
                  <span className="phone-events__btn phone-events__btn--red">Volver al Menú</span>
                </div>
                <div className="phone-events__table">
                  <div className="phone-events__head">
                    <span>Nombre</span>
                    <span>Tipo</span>
                    <span>Jug.</span>
                  </div>
                  <div className="phone-events__row">
                    <span>Partido simple 0</span>
                    <span>Partido</span>
                    <span>4</span>
                  </div>
                  <div className="phone-events__row">
                    <span>Pozo en la mañana 2</span>
                    <span>Pozo</span>
                    <span>2</span>
                  </div>
                  <div className="phone-events__row">
                    <span>Pozo Viernes</span>
                    <span>Torneo</span>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
