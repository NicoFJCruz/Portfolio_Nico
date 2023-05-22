import {
  backend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  jobit,
  tripguide,
  cvicon,
  github,
  linkedin,
  arrow,
  eye,
  developer,
  postgresql,
  mui,
  nextjs,
  bootstrap,
  expressjs,
  sequelize,
  sqlite,
  portfolio,
  performance,
  tunecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: [developer, "", eye],
  },
  {
    title: "Mi perfil de LinkedIn",
    icon: [linkedin, arrow, eye],
  },
  {
    title: "Mi perfil de Github",
    icon: [github, arrow, eye],
  },
  {
    title: "Mi Curriculum Vitae",
    icon: [cvicon, backend, eye],
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MaterialUI",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  /*   {
    name: "Express.js",
    icon: expressjs,
  }, */
  {
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "git",
    icon: git,
  },
  /* {
    name: "SQLite",
    icon: sqlite,
  }, */
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Explora mi portfolio como desarrollador web responsive e interactivo. Descubre mis habildiades, stack tecnológico, proyectos, etc. Sumérgete en mi mundo tecnológico y déjate inspirar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: ["https://github.com/NicoFJCruz/Portfolio_Nico"],
  },
  {
    name: "Performance Feedback",
    description:
      "Aplicación web desarrollada en el marco del Bootcamp de Plataforma 5 para una empresa real. Consiste un ABM de usuarios con entidades relacionados y permite conectar, registrar y retroalimentar la cadena jerárquica en base al rendimiento laboral. Duración: 4 semanas.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "Scrum",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: performance,
    source_code_link: [
      "https://github.com/orgs/FeedbackPerformance/repositories",
      "https://performance-feedback-client-khaki.vercel.app/",
    ],
  },
  {
    name: "Tunecommerce",
    description:
      "Proyecto en equipo de un ecommerce de instrumentos musicales. Permite al usuario explorar, seleccionar y adquirir en un entorno amigable. Duración: 2 semanas.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS,",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "Scrum",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: tunecommerce,
    source_code_link: [
      "https://github.com/NicoFJCruz/Tunecommerce-frontend",
      "https://tunecommerce-frontend-j4fq.vercel.app/",
    ],
  },
];

const experiences = [
  {
    title: "Devolución de Performance",
    company_name: "GlobalsNews Group",
    icon: javascript,
    iconBg: "#383E56",
    date: "Marzo 2023 - Abril 2023",
    points: [
      "Desarrollo web para práctica profesional en equipo de 6 Devs.",
      "Se desrrolló un sistema para ABM de usuarios, oficinas, equipos, categorías y objetivos por parte de RRHH.",
      "Cada jefe puede ver objetivos y dar retroalimentación en la cadena jerárquica.",
      "Se usaron NodeJS, Express, Sequelize, Next.js, Redux, Material UI, GIT y SCRUM.",
      "Rol prinicipal: Backend Developer.",
    ],
  },
  {
    title: "TuneEcommerce: ecommerce",
    company_name: "Plataforma 5",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Marzo 2023",
    points: [
      "Proyecto académico grupal de 6 Devs.",
      "Desarrollo de un e-commerce de venta de instrumentos musicales y relacionados.",
      "Se implementaron las tecnologías NodeJS, Express, Sequelize, React, Redux, CSS y GIT; y la metodología ágil SCRUM.",
      "Participé en el equipo encargado del desarrollo del backend y colaboré activamente en el frontend.",
    ],
  },
  {
    title: "TMDB",
    company_name: "Plataforma 5",
    icon: javascript,
    iconBg: "#383E56",
    date: "Febrero 2023",
    points: [
      "Proyecto académico individual.",
      "Consistió en desarrollar una página web desde cero utilizando la API de TMDB.",
      "Objetivo mostrar información de películas, series y actores con sus respectivos rankings.",
      "Use las tecnologías NodeJS, Express, Sequelize, React, CSS y GIT.",
      "Rol fue de Fullstack Developer.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
