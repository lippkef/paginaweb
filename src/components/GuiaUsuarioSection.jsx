import React from "react";
import "./GuiaUsuarioSection.css";

const APP_URL = "http://mac11.dynns.com/masterJuegos";
const MANUAL_PDF = `${process.env.PUBLIC_URL || ""}/manual/MANUAL_USUARIO.pdf`;

export default function GuiaUsuarioSection() {
  return (
    <section className="guia-section" id="guia-usuario">
      <h2 className="section-title">Guía de usuario</h2>
      <p className="guia-intro">
        Master Juegos tiene dos perfiles: <strong>Jugador</strong> y{" "}
        <strong>Organizador</strong>. Aquí tienes lo esencial para empezar.
      </p>

      <div className="guia-grid">
        <article className="guia-card guia-card--jugador">
          <span className="guia-badge">Jugador</span>
          <h3>Participar en eventos</h3>
          <ol>
            <li>Regístrate con el enlace de tu centro (<code>?center_id=N</code>).</li>
            <li>Inicia sesión en la aplicación.</li>
            <li>Entra en <strong>Seleccionar Evento</strong> e inscríbete.</li>
            <li>Consulta el cuadro (<strong>Ver Drop</strong>) y marca el ganador de tu partido.</li>
          </ol>
          <ul className="guia-tips">
            <li>Puedes retirarte solo si aún no se ha generado el drop.</li>
            <li>Completa tu perfil (teléfono, país) desde <strong>Perfil</strong>.</li>
          </ul>
        </article>

        <article className="guia-card guia-card--organizador">
          <span className="guia-badge guia-badge--org">Organizador</span>
          <h3>Gestionar torneos</h3>
          <ol>
            <li>Crea el evento en <strong>Eventos</strong> (torneo, pozo o partido).</li>
            <li>Espera inscripciones de los jugadores.</li>
            <li>Pulsa <strong>Generar Drop</strong> para crear el cuadro.</li>
            <li>Registra ganadores o avisa por <strong>WhatsApp</strong>.</li>
          </ol>
          <ul className="guia-tips">
            <li>Edita emparejamientos con <strong>Editar Drop</strong>.</li>
            <li>Gestiona inscritos en <strong>Evento/Jugadores/Ganadores</strong>.</li>
          </ul>
        </article>
      </div>

      <div className="guia-actions">
        <a href={APP_URL} className="guia-btn guia-btn--primary" target="_blank" rel="noopener noreferrer">
          Abrir Master Juegos
        </a>
        <a href={MANUAL_PDF} className="guia-btn guia-btn--secondary" download>
          Descargar manual PDF
        </a>
      </div>

      <p className="guia-footnote">
        El rol de organizador lo asigna el administrador del centro. El registro público crea cuentas de jugador.
      </p>
    </section>
  );
}
