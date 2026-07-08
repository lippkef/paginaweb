import React from 'react';
import './BeneficiosSection.css';
import './LandingImageSection.css';

export default function BeneficiosSection({ imageUrl, onRequestDemo }) {
  if (!imageUrl) return null;

  return (
    <section className="landing-image-section landing-section" id="beneficios">
      <div className="landing-image-section__visual">
        <div className="landing-image-section__wrap">
          <img
            src={imageUrl}
            alt="Beneficios de MiPartido"
            className="landing-image-section__image"
          />
          {onRequestDemo && (
            <button
              type="button"
              className="beneficios-section__demo-hotspot"
              onClick={onRequestDemo}
              aria-label="Solicitar demo"
            />
          )}
        </div>
      </div>
    </section>
  );
}
