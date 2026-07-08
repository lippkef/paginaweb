import React, { useState } from 'react';
import { getSuggestionsApiUrl } from '../config/config';
import './SuggestionForm.css';

export default function SuggestionForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch(getSuggestionsApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        const msg =
          errBody.message ||
          (errBody.errors && Object.values(errBody.errors).flat().join(' ')) ||
          'Error al enviar la sugerencia';
        throw new Error(msg);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
        if (onClose) onClose();
      }, 2500);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Hubo un error al enviar tu sugerencia. Por favor, intenta nuevamente.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="suggestion-form-container">
      <form onSubmit={handleSubmit} className="suggestion-form">
        <div className="form-header">
          <h3>¡Danos tus sugerencias!</h3>
          <p>Tu opinión nos ayuda a mejorar MiPartido</p>
        </div>

        <div className="form-group">
          <label htmlFor="suggestion-name">Nombre completo</label>
          <input
            type="text"
            id="suggestion-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="suggestion-email">Correo electrónico</label>
          <input
            type="email"
            id="suggestion-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="suggestion-message">Mensaje / Sugerencias</label>
          <textarea
            id="suggestion-message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Cuéntanos qué te gustaría mejorar o qué nuevas funcionalidades te gustaría ver..."
            className="form-textarea"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="success-message" role="status">
            <span className="success-icon" aria-hidden="true">
              ✓
            </span>
            ¡Gracias por tus sugerencias! Las revisaremos pronto.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message" role="alert">
            <span className="error-icon" aria-hidden="true">
              ✗
            </span>
            {errorMessage ||
              'Hubo un error al enviar tu sugerencia. Por favor, intenta nuevamente.'}
          </div>
        )}

        <button type="submit" className="suggestions-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="loading-spinner" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            'Enviar sugerencia'
          )}
        </button>
      </form>
    </div>
  );
}
