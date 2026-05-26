// Configuración de la aplicación
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Game Master',
  version: '1.0.0',
  description: 'Plataforma de gestión de torneos y eventos deportivos',
  contact: {
    phone: '+34 653 537 499',
    email: 'lippkef@micronetca.com',
    contact: 'Francisco Lippke'
  },
  registrationContacts: [
    {
      name: 'Francisco Lippke',
      phone: '+34 653 537 499',
      phoneE164: '34653537499',
      email: 'lippkef@micronetca.com',
      whatsapp: true
    },
    {
      name: 'Ana Caridad Del Amos',
      phone: '+34 660 516 318',
      phoneE164: '34660516318',
      email: 'anadelamosport@gmail.com',
      whatsapp: true
    }
  ]
};

// Configuración de colores (para referencia)
export const COLORS = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  secondary: '#10b981',
  secondaryDark: '#059669',
  accent: '#f59e0b',
  accentDark: '#d97706',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6'
};

// Configuración de breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px'
};
