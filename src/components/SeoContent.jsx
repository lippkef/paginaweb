import React from 'react';
import { APP_CONFIG } from '../config/config';

/** Texto indexable para buscadores (oculto visualmente, presente en el DOM). */
export default function SeoContent() {
  const { name, description, tagline, audience, benefits, functions, torneos, reservas, seo } =
    APP_CONFIG;

  return (
    <section className="landing-seo-content" aria-label={`Información sobre ${name}`}>
      <h1>
        {name} — Software de gestión de torneos y eventos para clubes de pádel y tenis
      </h1>
      <p>{seo?.description || description}</p>
      <p>{tagline}</p>
      <p>{audience}</p>
      {seo?.keywords && (
        <p>
          Palabras clave: {seo.keywords.join(', ')}.
        </p>
      )}

      <h2>Beneficios para tu club</h2>
      <ul>
        {benefits.map((item) => (
          <li key={item.title}>
            {item.title}: {item.description}
          </li>
        ))}
      </ul>

      <h2>Funciones</h2>
      <ul>
        {functions.map((item) => (
          <li key={item.title}>
            {item.title}: {item.description}
          </li>
        ))}
      </ul>

      <h2>Eventos</h2>
      <p>
        {torneos.title}. {torneos.subtitle}
      </p>
      <ul>
        {torneos.bullets.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <h2>Reservas</h2>
      <p>
        {reservas.title}. {reservas.subtitle} {reservas.note}
      </p>
    </section>
  );
}
