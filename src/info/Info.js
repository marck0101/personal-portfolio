import self from "../img/selfII.png";
import mock0 from "../img/mock0.png";
import mock1 from "../img/mock1.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: " Marcos",
  lastName: "Henrique",
  initials: "Js",
  position: "um desenvolvedor Full Stack",
  // position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      link: "https://github.com/marck0101",
      emoji: "💻",
      text: "Desenvolvedor de software autônomo.",
      // text: "software developer autonomous",
    },
    {
      link: "mailto:marck.mhc@gmail.com?subject=Let's work on something together!",
      emoji: "✉️",
      text: "Entre em contato comigo!",
      // text: "let's get in touch!",
    },
    {
      // link: "https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",
      emoji: "🎸",
      text: "Guitarrista da Piacullum.",
      // text: "Piacullum's guitarist",
    },
  ],

  socials: [
    {
      link: "https://wa.me/5555999234969?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio",
      icon: "fa fa-whatsapp",
      label: "whatsapp",
    },
    {
      link: "https://www.facebook.com/www.marcosmhc/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/marcos_mhc/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/marck0101",
      icon: "fa fa-github",
      label: "Github",
    },
    {
      link: "https://www.linkedin.com/in/marcos-henrique-corrêa-618392209/",
      icon: "fa fa-linkedin",
      label: "LinkedIn",
    },
  ],
  bio: `Olá! Eu sou Marcos, um desenvolvedor Full Stack de Santo Cristo RS. Adoro criar web aplicativos com React, e atualmente estou estudando NodeJS.`,
  // bio: `Hello! I'm Marcos, a front-end developer from Santo Cristo RS. I love creating web
  // applications with React, and I'm currently studying NodeJS.`,
  skills: {
    proficientWith: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Sass",
      "Scss Modules",
      "Git",
      "Github",
      "npm",
      "API Requests",
      "JSON",
    ],
    exposedTo: ["Nodejs", "Java", "Express", "Firebase", "AWS", "Figma"],
  },
  hobbies: [
    {
      label: "Musicas",
      // label: "musics",
      emoji: "🎸",
    },
    {
      label: "Leitura",
      emoji: "📖",
    },
    // {
    //   label: "Musculação",
    //   emoji: "💪🏻",
    // },
    {
      label: "Filmes",
      emoji: "🎥",
    },
  ],
  portfolio: [
    {
      title: "ToDo-List",
      live: "https://atual-lista-tarefas.netlify.app",
      source: "https://github.com/marck0101/ToDo-List",
      image: mock1,
    },
    {
      title: "Calling-System",
      live: "https://called-system.netlify.app",
      source: "https://github.com/marck0101/calling-system",
      image: mock0,
    },
  ],
};
