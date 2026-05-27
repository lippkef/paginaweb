export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

const APP_PATH = '/masterJuegos';

export const APP_CONFIG = {
  name: 'MiPartido',
  tagline: 'Organiza torneos, gestiona drops. Juega más.',
  version: '1.0.0',
  description:
    'Plataforma para gestionar torneos, pozos y partidos en centros deportivos. Inscripciones, cuadros y ranking en un solo lugar.',
  appPath: APP_PATH,
  appUrl: process.env.REACT_APP_APP_URL || `https://maclusa.com${APP_PATH}`,
  manualPdf: '/manual/MANUAL_USUARIO.pdf',
  socialProof: {
    rating: '4,8/5',
    label: 'Más de 50 centros confían en MiPartido',
  },
  hero: {
    badge: 'APP PARA TORNEOS Y EVENTOS DEPORTIVOS',
    headline: 'Organiza torneos, gestiona drops.',
    headlineAccent: 'Juega más.',
    subtitle:
      'MiPartido simplifica inscripciones, emparejamientos y resultados para organizadores y jugadores.',
    bullets: [
      { icon: 'bracket', text: 'Cuadros y emparejamientos automáticos' },
      { icon: 'ranking', text: 'Ranking y estadísticas por jugador' },
      { icon: 'whatsapp', text: 'Avisos por WhatsApp a participantes' },
    ],
  },
  contact: {
    phone: '+34 653 537 499',
    email: 'lippkef@micronetca.com',
    contact: 'Francisco Lippke',
  },
  registrationContacts: [
    {
      name: 'Francisco Lippke',
      phone: '+34 653 537 499',
      phoneE164: '34653537499',
      email: 'lippkef@micronetca.com',
      whatsapp: true,
    },
    {
      name: 'Ana Caridad Del Amos',
      phone: '+34 660 516 318',
      phoneE164: '34660516318',
      email: 'anadelamosport@gmail.com',
      whatsapp: true,
    },
  ],
  features: [
    {
      icon: 'trophy',
      title: 'Gestión de torneos',
      description: 'Crea y administra eventos con reglas personalizadas.',
    },
    {
      icon: 'ranking',
      title: 'Ranking global',
      description: 'Posiciones y estadísticas actualizadas por jugador.',
    },
    {
      icon: 'layers',
      title: 'Multi-formato',
      description: 'Torneos, pozos y partidos sueltos en la misma app.',
    },
    {
      icon: 'bracket',
      title: 'Drops y brackets',
      description: 'Genera cuadros y edita emparejamientos con facilidad.',
    },
    {
      icon: 'users',
      title: 'Inscripciones',
      description: 'Los jugadores se apuntan online al evento del centro.',
    },
    {
      icon: 'user',
      title: 'Perfiles de jugador',
      description: 'Datos de contacto y historial en un solo perfil.',
    },
    {
      icon: 'whatsapp',
      title: 'Avisos WhatsApp',
      description: 'Notifica horarios y resultados al instante.',
    },
    {
      icon: 'chart',
      title: 'Estadísticas',
      description: 'Consulta rendimiento y evolución de cada participante.',
    },
  ],
  testimonials: [
    {
      quote:
        'Increíble solución para mis torneos de fin de semana. Con MiPartido organizar es facilísimo.',
      author: 'Juan S.',
      role: 'Organizador, Club de pádel Valencia',
      initial: 'J',
    },
    {
      quote:
        'MiPartido simplificó mi forma de gestionar ligas con mis amigos. Todo queda centralizado.',
      author: 'Karina L.',
      role: 'Jugadora y capitana de liga',
      initial: 'K',
    },
    {
      quote:
        'El ranking global y el sistema de brackets es impresionante. Lo recomiendo a cualquier club.',
      author: 'Alberto G.',
      role: 'Director deportivo',
      initial: 'A',
    },
  ],
  guia: {
    jugadorSteps: [
      'Regístrate con el enlace de tu centro (?center_id=N).',
      'Inicia sesión en MiPartido.',
      'Entra en Seleccionar Evento e inscríbete.',
      'Consulta el cuadro (Ver Drop) y marca el ganador de tu partido.',
    ],
    jugadorTips: [
      'Puedes retirarte solo si aún no se ha generado el drop.',
      'Completa tu perfil (teléfono, país) desde Perfil.',
    ],
    organizadorSteps: [
      'Crea el evento en Eventos (torneo, pozo o partido).',
      'Espera inscripciones de los jugadores.',
      'Pulsa Generar Drop para crear el cuadro.',
      'Registra ganadores o avisa por WhatsApp.',
    ],
    organizadorTips: [
      'Edita emparejamientos con Editar Drop.',
      'Gestiona inscritos en Evento/Jugadores/Ganadores.',
    ],
    faq: [
      {
        q: '¿Cómo registro mi centro?',
        a: 'Contacta con nosotros desde el botón Registrar centro.',
      },
      {
        q: '¿Quién puede ser organizador?',
        a: 'El administrador del centro asigna el rol de organizador.',
      },
      {
        q: '¿Hay app móvil?',
        a: 'Puedes añadir MiPartido a la pantalla de inicio de tu móvil.',
      },
    ],
  },
};

export const COLORS = {
  brandNavy: '#002B49',
  brandOrange: '#FF6B00',
  brandLime: '#D4E157',
  primary: '#002B49',
  primaryDark: '#001a2e',
  secondary: '#10b981',
  accent: '#FF6B00',
};

export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
};

export const getAppUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${APP_CONFIG.appPath}`;
  }
  return APP_CONFIG.appUrl;
};
