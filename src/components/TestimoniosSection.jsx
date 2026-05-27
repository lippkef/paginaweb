import React from 'react';
import { APP_CONFIG } from '../config/config';
import './TestimoniosSection.css';

function Stars() {
  return <span className="testimonios-stars" aria-hidden="true">★★★★★</span>;
}

export default function TestimoniosSection({ onSuggestionsClick }) {
  return (
    <section className="testimonios-section landing-section" id="testimonios">
      <h2 className="landing-section__title">Testimonios</h2>
      <p className="landing-section__subtitle">
        Organizadores y jugadores que ya usan {APP_CONFIG.name} en sus centros y ligas.
      </p>

      <div className="testimonios-grid">
        {APP_CONFIG.testimonials.map((t) => (
          <article key={t.author} className="testimonio-card">
            <Stars />
            <blockquote className="testimonio-card__quote">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="testimonio-card__author">
              <div className="testimonio-card__avatar" aria-hidden="true">
                {t.initial}
              </div>
              <div>
                <p className="testimonio-card__name">{t.author}</p>
                <p className="testimonio-card__role">{t.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonios-actions">
        <button type="button" className="btn-secondary testimonios-suggest" onClick={onSuggestionsClick}>
          Enviar sugerencias
        </button>
      </div>
    </section>
  );
}
