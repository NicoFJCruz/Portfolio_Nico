import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
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
  portfolio,
  performance,
  tunecommerce,
  p5,
  unsa,
  iita,
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
    icon: [cvicon, eye],
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
  {
    name: "Sequelize",
    icon: sequelize,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Explora mi portfolio,responsive e interactivo, de desarrollador web . Descubre mis habildiades, stack tecnológico, proyectos, etc. Sumérgete en mi mundo tecnológico y déjate inspirar.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
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
    title: "Fullstack Developer",
    company_name: "Plataforma 5",
    icon: p5,
    iconBg: "#383E56",
    date: "Enero 2023 - Abril 2023",
    points: [
      "Curso intensivo teórico/práctico de programación JavaScript FullStack Developer.",
      "Full-time, con duración de 14 semanas y mas de 800 horas de cursada.",
      "Sólidos conocimientos en JavaScript, React, Redux NodeJS, Express, Sequelize, PostgreSQL, Git.",
      "Pair-programming, metodologías ágiles Scrum, reuniones semanales para mejorar habilidades blandas.",
      "Proyectos individuales, grupales y prácticas profesionales con empresas reales.",
    ],
  },
  {
    title: "Carrera de Grado",
    company_name: "Universidad Nacional de Salta",
    icon: unsa,
    iconBg: "#E6DEDD",
    date: "Marzo 2020 - Actualidad",
    points: ["Ingeniería Electromecánica", "Actaulmente en curso."],
  },
  {
    title: "Curso WordPress y Android Studio",
    company_name: "Iita Salta",
    icon: iita,
    iconBg: "#383E56",
    date: "Junio 2021 - Octubre 2021",
    points: [
      "CURSO WORDPRESS:",
      "Conceptos y habilidades necesarias para realizar un sitio web de e-commerce con Wordpress.",
      "CURSO ANDROID STUDIO:",
      "Introducción a los conceptos básicos de Android Studio para el desarrollo de aplicaciones.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Compañero desde el primer momento del Coding Bootcamp y puedo dar fe de su excelente nivel académico, profesional y humano. Siempre colaborativo, aportando ideas y conocimientos, creando un ambiente de trabajo agradable, divertido y productivo.",
    name: "Martín Machado",
    designation: "Bootcamper",
    company: "Plataforma 5",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHXHtaYD0eLKg/profile-displayphoto-shrink_100_100/0/1651522725096?e=1690416000&v=beta&t=Lz1qQqrsB5tieEv3YgMXfIDIndam-FAVxrwrxbU5Efg",
    link: "https://www.linkedin.com/in/martinmachadodev/",
  },
  {
    testimonial:
      "Trabajé con él en varios proyectos y desde el primer momento demostró su gran capacidad a la hora de resolver problemas, además de su amabilidad y compromiso con el resto del equipo.",
    name: "Mateo Catalano",
    designation: "Bootcamper",
    company: "Plataforma 5",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHYWIqaZl18cA/profile-displayphoto-shrink_100_100/0/1682000675771?e=1690416000&v=beta&t=5vBRFJ1WrzUy1U0w8ljwgAeRAJJWIduUWJ6bJD9Pi_A",
    link: "https://www.linkedin.com/in/mateo-catalano/",
  },
];

export { services, technologies, experiences, testimonials, projects };
