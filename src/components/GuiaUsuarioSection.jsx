import React from 'react';
import { APP_CONFIG } from '../config/config';
import './GuiaUsuarioSection.css';

export default function GuiaUsuarioSection() {
  const { guia, name, manualPdf, appPath } = APP_CONFIG;
  const appUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${appPath}`
    : APP_CONFIG.appUrl;
  const pdfUrl = `${process.env.PUBLIC_URL || ''}${manualPdf}`;

  return (
    <section className="guia-section landing-section" id="guia-usuario">
      <h2 className="landing-section__title">Cómo empezar con {name}</h2>
      <p className="landing-section__subtitle">
        Dos perfiles: <strong>Jugador</strong> y <strong>Organizador</strong>.
        Aquí tienes lo esencial para empezar.
      </p>

      <div className="guia-modules">
        <article className="guia-module guia-module--jugador">
          <span className="guia-module__badge">Jugador</span>
          <h3>Participar en eventos</h3>
          <ol className="guia-module__steps">
            {guia.jugadorSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <ul className="guia-module__tips">
            {guia.jugadorTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </article>

        <article className="guia-module guia-module--organizador">
          <span className="guia-module__badge guia-module__badge--org">Organizador</span>
          <h3>Gestionar torneos</h3>
          <ol className="guia-module__steps">
            {guia.organizadorSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <ul className="guia-module__checklist">
            {guia.organizadorTips.map((tip) => (
              <li key={tip}>
                <span className="guia-check" aria-hidden="true">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </article>

        <article className="guia-module guia-module--recursos">
          <span className="guia-module__badge guia-module__badge--res">Recursos</span>
          <h3>Documentación y acceso</h3>
          <p className="guia-module__intro">
            Accede a la app, descarga el manual o consulta las preguntas frecuentes.
          </p>
          <div className="guia-module__actions">
            <a href={appUrl} className="btn-primary guia-module__btn" target="_blank" rel="noopener noreferrer">
              Abrir {name}
            </a>
            <a href={pdfUrl} className="guia-module__btn-secondary" download>
              Descargar manual PDF
            </a>
          </div>
          <dl className="guia-faq">
            {guia.faq.map((item) => (
              <div key={item.q} className="guia-faq__item">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      <p className="guia-footnote">
        El rol de organizador lo asigna el administrador del centro. El registro público crea cuentas de jugador.
      </p>
    </section>
  );
}
