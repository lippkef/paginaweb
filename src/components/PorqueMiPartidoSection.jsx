import React from 'react';
import { APP_CONFIG } from '../config/config';
import { FeatureIcon } from './icons/FeatureIcons';
import './PorqueMiPartidoSection.css';

export default function PorqueMiPartidoSection() {
  return (
    <section className="porque-section landing-section" id="porque">
      <h2 className="landing-section__title">Todo lo que necesitas para tus torneos</h2>
      <p className="landing-section__subtitle">
        ¿Por qué {APP_CONFIG.name}? Porque centraliza la gestión de eventos deportivos
        en una sola plataforma pensada para organizadores y jugadores.
      </p>

      <div className="porque-grid">
        {APP_CONFIG.features.map((feature) => (
          <article key={feature.title} className="porque-card">
            <div className="porque-card__icon">
              <FeatureIcon name={feature.icon} />
            </div>
            <h3 className="porque-card__title">{feature.title}</h3>
            <p className="porque-card__desc">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
