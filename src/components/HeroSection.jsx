import React from 'react';
import { APP_CONFIG } from '../config/config';
import { FeatureIcon } from './icons/FeatureIcons';
import './HeroSection.css';

export default function HeroSection({
  heroImageUrl,
  onOpenApp,
  onRequestDemo,
  onOpenSuggestions,
}) {
  const { hero, tagline } = APP_CONFIG;

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
            <button type="button" className="btn-primary hero-mip__cta" onClick={onRequestDemo}>
              Solicitar demo
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="btn-primary btn-primary--teal hero-mip__cta"
              onClick={onOpenApp}
            >
              Ejecutar MiPartido
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <p className="hero-mip__tagline">{tagline}</p>

          {onOpenSuggestions && (
            <button
              type="button"
              className="hero-mip__suggestions-link"
              onClick={onOpenSuggestions}
            >
              ¿Tienes ideas? Envíanos una sugerencia
            </button>
          )}
        </div>

        {heroImageUrl && (
          <div className="hero-mip__visual">
            <img
              src={heroImageUrl}
              alt="Capturas de la app MiPartido en móvil"
              className="hero-mip__app-image"
            />
          </div>
        )}
      </div>
    </section>
  );
}
