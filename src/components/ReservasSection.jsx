import React from 'react';
import { APP_CONFIG } from '../config/config';
import { FeatureIcon } from './icons/FeatureIcons';
import './ReservasSection.css';

export default function ReservasSection() {
  const { reservas } = APP_CONFIG;

  return (
    <section className="reservas-section landing-section" id="reservas">
      <div className="reservas-section__card container">
        <span className="reservas-section__badge">{reservas.badge}</span>
        <div className="reservas-section__icon" aria-hidden="true">
          <FeatureIcon name="calendar" />
        </div>
        <h2 className="landing-section__title">{reservas.title}</h2>
        <p className="landing-section__subtitle reservas-section__subtitle">{reservas.subtitle}</p>
        <p className="reservas-section__note">{reservas.note}</p>
      </div>
    </section>
  );
}
