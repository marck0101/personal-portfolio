/* eslint-disable no-unused-vars */
import self from '../img/selfII.png'
import mock0 from '../img/2-removebg-preview.png'
import mock1 from '../img/mock1.png'
import ToDoList from '../img/1-removebg-preview.png'
import Dash from '../img/2-removebg-preview.png'
import JbImob from '../img/4-removebg-preview.png'
import certificados from '../img/certificados.png'
import Portfolio from '../img/Portfolio-removebg-preview.png'
import curriculo from '../img/curriculo.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: ' Marcos',
  lastName: 'Henrique',
  initials: 'Js',
  position: 'um desenvolvedor Full Stack',
  // position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      link: 'https://github.com/marck0101',
      emoji: '💻',
      text: 'Desenvolvedor de software autônomo.',
      // text: "software developer autonomous",
    },
    {
      // link: "https://user-images.githubusercontent.com/18350557/94314005-5c9f6e00-ff45-11ea-86a1-5db9e1371750.jpg",
      emoji: '📈',
      text: 'Gestor de Mídia paga.',
      // text: "Piacullum's guitarist",
    },
    {
      link: "mailto:marck.mhc@gmail.com?subject=Let's work on something together!",
      emoji: '✉️',
      text: 'Entre em contato comigo!',
      // text: "let's get in touch!",
    },
  ],

  socials: [
    {
      link: 'https://wa.me/5555999234969?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio',
      icon: 'fa fa-whatsapp',
      label: 'whatsapp',
    },
    // {
    //   link: "https://www.facebook.com/www.marcosmhc/",
    //   icon: "fa fa-facebook",
    //   label: "facebook",
    // },
    // {
    //   link: "https://instagram.com/marcos_mhc/",
    //   icon: "fa fa-instagram",
    //   label: "instagram",
    // },
    {
      link: 'https://github.com/marck0101',
      icon: 'fa fa-github',
      label: 'Github',
    },
    {
      link: 'https://www.linkedin.com/in/marcos-henrique-corrêa-618392209/',
      icon: 'fa fa-linkedin',
      label: 'LinkedIn',
    },
  ],
  bio: `Olá! Eu sou Marcos, um desenvolvedor Full Stack de Santo Cristo RS. Adoro criar web aplicativos com React, e atualmente estou estudando NodeJS.`,
  // bio: `Hello! I'm Marcos, a front-end developer from Santo Cristo RS. I love creating web
  // applications with React, and I'm currently studying NodeJS.`,
  skills: {
    proficientWith: [
      'JavaScript',
      'React',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Material UI',
      'Sass',
      'Scss Modules',
      'Git',
      'Github',
      'npm',
      'API Requests',
      'JSON',
      'Next',
      'Tailwind',
    ],
    exposedTo: ['Nodejs', 'Java', 'Express', 'Firebase', 'Figma'],
  },
  hobbies: [
    {
      label: 'Musicas',
      // label: "musics",
      // link:'https://open.spotify.com/playlist/3dn8NwizdGBWWIMyqym34j?si=2285ee63bfc446db',
      emoji: '🎸',
    },
    {
      label: 'Leitura',
      emoji: '📖',
    },
    // {
    //   label: "Musculação",
    //   emoji: "💪🏻",
    // },
    {
      label: 'Filmes',
      emoji: '🎥',
    },
  ],
  portfolio: [
    {
      title: 'VDR-Site cliente',
      live: 'https://vdr-site.vercel.app',
      // source: "https://github.com/marck0101/test-todo-list",
      image: ToDoList,
    },
    {
      title: 'VDR-Dashboard Admin',
      // live: "https://vdr-dashboard.vercel.app",
      // source: "https://github.com/marck0101/certificados",
      image: Dash,
    },

    {
      title: 'JB Imobiliária',
      live: 'https://front-jb-imobiliaria.vercel.app',
      // source: "https://github.com/marck0101/calling-system",
      image: JbImob,
    },

    {
      title: 'Meus certificados',
      // live: "https://called-system.netlify.app",
      source: 'https://github.com/marck0101/certificados',
      image: certificados,
    },
    {
      title: 'Portfólio',
      live: 'https://marck0101.com.br',
      source: 'https://github.com/marck0101/personal-portfolio',
      image: Portfolio,
    },
    {
      title: 'Currículo',
      // live: "https://called-system.netlify.app",
      source:
        'https://drive.google.com/drive/u/1/folders/1X6YcihQI6t7ZLLi2wC7GYxfiCbysesCl',
      image: curriculo,
    },
  ],
}
