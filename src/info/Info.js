import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import TaisImg     from '../img/taismuller-arquiteta.png'
import DashImg     from '../img/sistema-dash-gh.png'
import VetImg      from '../img/veterinaria-tamires.png'
import ToDoListImg from '../img/ToDoList.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: ' Marcos',
  lastName: 'Henrique',
  initials: 'Js',
  position: 'Desenvolvedor Full Stack & Gestor de Mídia Paga',
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
      icon: <FaWhatsapp />,
      label: 'whatsapp',
    },
    {
      link: 'https://github.com/marck0101',
      icon: <FaGithub />,
      label: 'Github',
    },
    {
      link: 'https://www.linkedin.com/in/marcos-henrique-corrêa-618392209/',
      icon: <FaLinkedin />,
      label: 'LinkedIn',
    },
  ],
  bio: `Olá! Eu sou Marcos, desenvolvedor Full Stack e Gestor de Mídia Paga de Santo Cristo, RS. Trabalho com React, Node.js e estratégias digitais, transformando ideias em produtos web reais e campanhas que convertem.`,
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
      title: 'Tais L. Müller Arquiteta',
      description: 'Site para escritório de arquitetura com foco em neuroarquitetura. Portfólio de obras, etapas do processo e formulário de contato. GTM implementado.',
      live: 'https://taismuller-arquiteta.netlify.app',
      image: TaisImg,
    },
    {
      title: 'Dashboard de Marketing Integrado',
      description: 'Painel custom conectando APIs do Meta Ads, Google Ads e LinkedIn. Eliminou ferramentas pagas de BI. Construído com React e PostgreSQL.',
      image: DashImg,
    },
    {
      title: 'Sistema de Chamados',
      description: 'Plataforma de abertura e acompanhamento de chamados com autenticação Firebase, controle de sessão e CRUD completo.',
      live: 'https://called-system.netlify.app',
      image: null,
    },
    {
      title: 'Site Institucional + Blog — Veterinária Tamires',
      description: 'Site e blog para médica veterinária com foco em conteúdo educativo e autoridade. PHP, MySQL e hospedagem InfinityFree.',
      live: 'https://veterinariatamires.lovestoblog.com',
      image: VetImg,
    },
    {
      title: 'Next Movies',
      description: 'Listagem de filmes em cartaz com consumo de API REST externa e hooks avançados do React em produção.',
      live: 'https://filmes-lancamentos-atualizados.netlify.app',
      image: null,
    },
    {
      title: 'Lista de Tarefas com Autenticação',
      description: 'Gerenciador de tarefas com login/logout e persistência via Firebase Firestore. Dados isolados por usuário.',
      live: 'https://atual-lista-tarefas.netlify.app',
      image: ToDoListImg,
    },
  ],
}
