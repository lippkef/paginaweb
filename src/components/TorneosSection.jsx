import React from 'react';
import './TorneosSection.css';
import './LandingImageSection.css';

export default function TorneosSection({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <section className="landing-image-section landing-section" id="torneos">
      <div className="landing-image-section__visual">
        <img
          src={imageUrl}
          alt="Eventos de MiPartido"
          className="landing-image-section__image"
        />
      </div>
    </section>
  );
}
