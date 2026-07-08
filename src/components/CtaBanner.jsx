import React from 'react';
import { APP_CONFIG } from '../config/config';
import './CtaBanner.css';

export default function CtaBanner({ onRegisterClick }) {
  const { finalCta, pricing } = APP_CONFIG;

  return (
    <section className="cta-banner">
      <div className="cta-banner__inner container">
        <div className="cta-banner__text">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.subtitle}</p>
          <p className="cta-banner__pricing">{pricing.title}</p>
        </div>
        <button type="button" className="btn-primary cta-banner__btn" onClick={onRegisterClick}>
          {finalCta.button}
        </button>
      </div>
    </section>
  );
}
