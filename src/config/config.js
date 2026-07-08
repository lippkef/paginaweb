/** Vacío = usar el mismo origen que la página (XAMPP/producción en el mismo dominio) */
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const APP_PATH = '/MiPartido';

export const APP_CONFIG = {
  name: 'MiPartido',
  tagline: 'Más pistas ocupadas. Más torneos. Más ingresos.',
  version: '1.0.0',
  description:
    'App para clubes de pádel y tenis: torneos, inscripciones, ranking y comunicación con jugadores desde un solo lugar.',
  seo: {
    title: 'MiPartido | Software torneos y eventos pádel y tenis para clubes',
    description:
      'MiPartido: software para clubes de pádel y tenis. Organiza torneos, pozos, eventos e inscripciones online, ranking de jugadores y comunicación con tu club desde una sola app.',
    ogDescription:
      'Software para clubes de pádel y tenis: torneos, pozos, inscripciones, ranking y jugadores en una app. Más pistas ocupadas. Más torneos. Más ingresos.',
    keywords: [
      'MiPartido',
      'software gestión torneos pádel',
      'software gestión club deportivo',
      'app torneos tenis club',
      'organizar torneos pádel online',
      'gestión eventos deportivos',
      'app inscripciones torneos',
      'ranking jugadores pádel',
      'ranking jugadores tenis',
      'organizador torneos pádel',
      'cuadros torneos online',
      'pozos pádel club',
      'matchmaking pádel',
      'buscar partido pádel',
      'centro deportivo software',
      'escuela pádel gestión',
      'comunicación jugadores club',
      'notificaciones torneos WhatsApp',
      'reservas pistas pádel',
      'torneos club tenis',
      'gestión partidos pádel',
      'lista espera torneos',
      'eventos pádel tenis',
      'software club tenis',
      'app club pádel',
    ],
  },
  appPath: APP_PATH,
  appUrl: process.env.REACT_APP_APP_URL || `https://maclusa.com${APP_PATH}`,
  manualPdf: '/manual/MANUAL_USUARIO.pdf',
  hero: {
    badge: 'MÁS PISTAS OCUPADAS. MÁS TORNEOS. MÁS INGRESOS.',
    headline: 'Llena tus pistas, organiza torneos y factura más',
    headlineAccent: 'con tu club deportivo',
    subtitle:
      'Una app para gestionar torneos de tenis y pádel, jugadores, inscripciones y comunicación desde un solo lugar.',
    bullets: [
      { icon: 'trophy', text: 'Torneos organizados en minutos' },
      { icon: 'ranking', text: 'Ranking de jugadores automático' },
      { icon: 'whatsapp', text: 'Notificaciones por WhatsApp y email' },
    ],
  },
  audience:
    'Para clubes de pádel, tenis, centros deportivos, escuelas y organizadores de torneos.',
  benefits: [
    {
      icon: 'calendar',
      title: 'Más reservas y menos pistas vacías',
      description: 'Optimiza la ocupación de tus instalaciones y reduce huecos sin uso.',
    },
    {
      icon: 'trophy',
      title: 'Torneos organizados en minutos',
      description: 'Crea eventos, cuadros y horarios sin hojas de cálculo ni llamadas interminables.',
    },
    {
      icon: 'users',
      title: 'Inscripciones y pagos online',
      description: 'Los jugadores se apuntan y confirman su plaza desde el móvil.',
    },
    {
      icon: 'ranking',
      title: 'Ranking de jugadores automático',
      description: 'Posiciones y estadísticas actualizadas tras cada partido.',
    },
    {
      icon: 'whatsapp',
      title: 'Notificaciones por WhatsApp y email',
      description: 'Avisa horarios, resultados y cambios al instante.',
    },
    {
      icon: 'layers',
      title: 'Panel para el club y app para jugadores',
      description: 'El equipo gestiona; los jugadores consultan y participan.',
    },
  ],
  functions: [
    {
      icon: 'search',
      title: 'Buscar partido',
      description: 'Encuentra rivales y huecos para jugar en tu centro.',
    },
    {
      icon: 'list',
      title: 'Lista de espera',
      description: 'Gestiona plazas cuando un evento o pista se llena.',
    },
    {
      icon: 'ranking',
      title: 'Ranking',
      description: 'Clasificación automática por rendimiento y participación.',
    },
    {
      icon: 'challenge',
      title: 'Retos',
      description: 'Lanza desafíos entre jugadores para mantener la actividad.',
    },
    {
      icon: 'trophy',
      title: 'Torneos',
      description: 'Torneos, pozos y partidos con cuadros y resultados en tiempo real.',
    },
    {
      icon: 'users',
      title: 'Matchmaking por nivel',
      description: 'Emparejamientos equilibrados según el nivel de cada jugador.',
    },
    {
      icon: 'user',
      title: 'Amigos',
      description: 'Conecta jugadores habituales y facilita inscripciones en grupo.',
    },
    {
      icon: 'bell',
      title: 'Notificaciones automáticas',
      description: 'Recordatorios de partidos, resultados y plazas disponibles.',
    },
  ],
  torneos: {
    title: 'Torneos sin complicaciones',
    subtitle: 'Crea cuadros, grupos, rankings, horarios y resultados en tiempo real.',
    bullets: [
      'Genera drops y brackets con un clic',
      'Edita emparejamientos y registra ganadores',
      'Consulta estadísticas por jugador y evento',
    ],
  },
  reservas: {
    title: 'Reservas desde el móvil',
    subtitle: 'Permite a tus jugadores reservar Eventos (Pozos, Torneos, Partidos, etc) desde el móvil y reduce llamadas.',
    badge: 'Próximamente',
    note:
      'Estamos ampliando MiPartido para integrar reservas de pista y cobros online. Consúltanos en tu demo personalizada.',
  },
  pricing: {
    title: 'Pide una demo personalizada',
    subtitle:
      'Te mostramos cómo MiPartido encaja en tu club, sin compromiso y sin permanencia.',
  },
  finalCta: {
    title: 'Empieza a llenar tus pistas esta semana',
    subtitle:
      'Solicita una demo y descubre cómo centralizar torneos, jugadores y comunicación en una sola app.',
    button: 'Solicitar demo',
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
        a: 'Contacta con nosotros desde Solicitar demo.',
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

/** Ruta correcta a assets en public/ (producción: /webMiPartido/images/...) */
export const getPublicAssetUrl = (assetPath) => {
  const path = assetPath.replace(/^\//, '');
  const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  if (base) {
    return `${base}/${path}`;
  }
  if (typeof window !== 'undefined') {
    return new URL(path, window.location.href).href;
  }
  return `./${path}`;
};

export const getAppUrl = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${APP_CONFIG.appPath}`;
  }
  return APP_CONFIG.appUrl;
};

/** Base del API: .env > fallback producción maclusa.com */
export const getApiBaseUrl = () => {
  if (API_BASE_URL) {
    return API_BASE_URL.replace(/\/$/, '');
  }
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'maclusa.com' || hostname === 'www.maclusa.com') {
      return 'https://maclusa.com/master_juegos_api/public';
    }
    return `${window.location.origin}/master_juegos_api/public`;
  }
  return '';
};

/** POST/GET sugerencias (Laravel: .../api/suggestions) */
export const getSuggestionsApiUrl = (id) => {
  const base = `${getApiBaseUrl()}/api/suggestions`;
  return id != null ? `${base}/${id}` : base;
};
