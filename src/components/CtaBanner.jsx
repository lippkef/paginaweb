import React from 'react';
import { APP_CONFIG } from '../config/config';
import './CtaBanner.css';

export default function CtaBanner({ onRegisterClick }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner container">
        <div className="cta-banner__text">
          <h2>¿Listo para tu centro deportivo?</h2>
          <p>
            Únete a {APP_CONFIG.name} y lleva la gestión de torneos al siguiente nivel.
            Sin permanencia. Contacta con nuestro equipo para el registro.
          </p>
        </div>
        <button type="button" className="btn-primary cta-banner__btn" onClick={onRegisterClick}>
          Registrar centros deportivos
        </button>
      </div>
    </section>
  );
}
