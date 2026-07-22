import profileImg from '../assets/Profile.jpeg';

export const personalInfo = {
  fullName: 'Miguel Antonio Tamat Ajuchán',
  shortName: 'Miguel Tamat',
  title: 'Desarrollador Web Full Stack',
  location: 'Guatemala',
  email: 'migueltamat48@gmail.com',
  profileImage: profileImg,
  heroTagline:
    'Transformo ideas en experiencias digitales robustas, escalables y centradas en el usuario.',
  heroDescription:
    'Especializado en el ecosistema JavaScript moderno, bases de datos y soluciones IoT con microcontroladores.',
  aboutDescription:
    'Soy un desarrollador apasionado por crear soluciones tecnológicas que generen impacto real. Mi objetivo es combinar frontend moderno, backend sólido e integración de hardware para construir productos completos. Busco oportunidades donde pueda aportar valor con código limpio, trabajo en equipo y aprendizaje continuo.',
};

export const socialLinks = {
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/miguel-antonio-tamat-ajuchan-478980423',
    icon: 'linkedin',
  },
  computrabajo: {
    label: 'CompuTrabajo',
    url: 'https://gt.computrabajo.com/',
    icon: 'briefcase',
  },
  github: {
    label: 'GitHub',
    url: 'https://github.com/TamatMiguel18',
    icon: 'github',
  },
};

export const navigation = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi' },
  { id: 'educacion', label: 'Educación', href: '#educacion' },
  { id: 'habilidades', label: 'Habilidades', href: '#habilidades' },
  { id: 'experiencia', label: 'Experiencia', href: '#experiencia' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const skills = [
  { name: 'React', percentage: 90, color: '#61dafb' },
  { name: 'Vite', percentage: 85, color: '#646cff' },
  { name: 'Node.js', percentage: 82, color: '#68a063' },
  { name: 'Express', percentage: 80, color: '#ffffff' },
  { name: 'MongoDB', percentage: 78, color: '#47a248' },
  { name: 'PostgreSQL', percentage: 75, color: '#336791' },
  { name: 'Supabase', percentage: 72, color: '#3ecf8e' },
  { name: 'MicroPython', percentage: 70, color: '#ff6b35', subtitle: 'Raspberry Pi' },
];

export const education = [
  {
    id: 1,
    institution: 'Centro Educativo Kinal',
    degree: 'Técnico en Programación y Desarrollo de Software',
    period: '2022 — Presente',
    description:
      'Formación integral en desarrollo de software, metodologías ágiles, bases de datos, desarrollo web full stack y proyectos colaborativos con enfoque en la industria tecnológica guatemalteca.',
    highlight: true,
  },
  {
    id: 2,
    institution: 'Autodidacta — Plataformas Online',
    degree: 'Certificaciones y cursos complementarios',
    period: '2023 — Presente',
    description:
      'Cursos especializados en React, Node.js, bases de datos NoSQL y SQL, así como desarrollo IoT con MicroPython y Raspberry Pi Pico W.',
    highlight: false,
  },
];

export const experience = [
  {
    id: 1,
    role: 'Desarrollador Full Stack — Proyectos Académicos',
    company: 'Centro Educativo Kinal',
    period: '2024 — Presente',
    description:
      'Desarrollo de aplicaciones web completas aplicando metodología Scrum, arquitectura cliente-servidor y despliegue en entornos de desarrollo.',
    technologies: ['React', 'Vite', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 2,
    role: 'Desarrollador IoT — Proyecto Personal',
    company: 'Independiente',
    period: '2025 — Presente',
    description:
      'Implementación de estaciones meteorológicas con Raspberry Pi Pico W, sensores de temperatura y humedad, y transmisión de datos en tiempo real.',
    technologies: ['MicroPython', 'Raspberry Pi', 'Sensores IoT'],
  },
  {
    id: 3,
    role: 'Colaborador en Proyectos de Precisión Agrícola',
    company: 'SmartGrow Analytics',
    period: '2025',
    description:
      'Participación en el desarrollo de una plataforma de agricultura de precisión con integración de IA para análisis de cultivos y monitoreo ambiental.',
    technologies: ['React', 'Node.js', 'IA', 'MongoDB'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'SmartGrow Analytics',
    description:
      'Aplicación de precisión agrícola con inteligencia artificial para monitoreo de cultivos, análisis predictivo de rendimiento y visualización de datos ambientales en tiempo real.',
    tags: ['React', 'Node.js', 'IA', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/migueltamat/smartgrow-analytics',
    imagePlaceholder: 'SmartGrow UI',
    accentColor: '#22c55e',
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Inventarios',
    description:
      'Plataforma completa para control de inventarios desarrollada con arquitectura Vite-React en el frontend y API REST en backend, gestionada bajo metodología Scrum con sprints iterativos.',
    tags: ['Vite', 'React', 'Express', 'PostgreSQL', 'Scrum'],
    githubUrl: 'https://github.com/migueltamat/inventario-system',
    imagePlaceholder: 'Inventario UI',
    accentColor: '#6366f1',
  },
  {
    id: 3,
    title: 'Estación Meteorológica IoT',
    description:
      'Sistema embebido con Raspberry Pi Pico W y sensores de clima (temperatura, humedad y presión) que transmite lecturas a un dashboard web para monitoreo ambiental en tiempo real.',
    tags: ['MicroPython', 'Raspberry Pi Pico W', 'Sensores', 'IoT', 'Supabase'],
    githubUrl: 'https://github.com/migueltamat/weather-station-iot',
    imagePlaceholder: 'IoT Dashboard',
    accentColor: '#f97316',
  },
];

export const connections = [
  {
    id: 1,
    platform: 'LinkedIn',
    description: 'Conecta conmigo para oportunidades profesionales y networking.',
    url: socialLinks.linkedin.url,
    variant: 'primary',
  },
  {
    id: 2,
    platform: 'CompuTrabajo',
    description: 'Consulta mi perfil laboral y disponibilidad para nuevos proyectos.',
    url: socialLinks.computrabajo.url,
    variant: 'secondary',
  },
];
