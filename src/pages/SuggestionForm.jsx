import React, { useState } from "react";
import { API_BASE_URL } from "../config/config";

export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ejemplo: un endpoint POST /api/sugerencias
      const response = await fetch("${API_BASE_URL}/api/sugerencias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Error al enviar sugerencias");
      }
      alert("¡Gracias por tus sugerencias!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert(err.message);
    }
  };
  
/*  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí harías, por ejemplo, un POST a tu API de sugerencias
    // fetch('/api/suggestions', { ... })
    console.log("Enviando sugerencias:", formData);
    alert("¡Gracias por tus sugerencias!, de ser necesario le contataemos por Email");
    setFormData({ name: "", email: "", message: "" });
  };
*/
  return (
    <form onSubmit={handleSubmit} className="suggestion-form">
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Mensaje / Sugerencias</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="suggestions-button">
        Enviar
      </button>
    </form>
  );
}
