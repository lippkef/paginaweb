import React, { useState } from "react";
import { API_BASE_URL } from "../config/config";

export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/sugerencias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error("Error al enviar sugerencias");
      }
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Limpiar el estado después de 3 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      
    } catch (err) {
      setSubmitStatus("error");
      console.error("Error:", err);
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
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje / Sugerencias</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Cuéntanos qué te gustaría mejorar o qué nuevas funcionalidades te gustaría ver..."
            className="form-textarea"
          />
        </div>

        {submitStatus === "success" && (
          <div className="success-message">
            <span className="success-icon">✓</span>
            ¡Gracias por tus sugerencias! Las revisaremos pronto.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="error-message">
            <span className="error-icon">✗</span>
            Hubo un error al enviar tu sugerencia. Por favor, intenta nuevamente.
          </div>
        )}

        <button 
          type="submit" 
          className="suggestions-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              Enviando...
            </>
          ) : (
            "Enviar sugerencia"
          )}
        </button>
      </form>
    </div>
  );
}
