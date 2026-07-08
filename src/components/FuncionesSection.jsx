import React from 'react';
import './FuncionesSection.css';
import './LandingImageSection.css';

export default function FuncionesSection({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <section className="landing-image-section landing-section" id="funciones">
      <div className="landing-image-section__visual">
        <img
          src={imageUrl}
          alt="Funciones de MiPartido"
          className="landing-image-section__image"
        />
      </div>
    </section>
  );
}
