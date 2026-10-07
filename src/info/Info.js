import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import TaisImg     from '../img/taismuller-arquiteta.png'
import DashImg     from '../img/sistema-dash-gh.png'
import BlogImg     from '../img/blog-marcos.png'
import VetImg      from '../img/veterinaria-tamires.png'
import ToDoListImg from '../img/ToDoList.png'
import NoiteADoisImg from '../img/noite-a-dois.png'

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)']

export const info = {
  firstName: ' Marcos',
  lastName: 'Henrique',
  fullName: 'Marcos Henrique Corrêa',
  photo: '/marcos-henrique-correa.webp', // public/ — URL estável usada no preload e no JSON-LD
  blogUrl: 'https://blog.marck0101.com.br/blog',
  initials: 'Js',
  position: 'Programador Full Stack & Gestor de Tráfego',
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      link: '/programador',
      emoji: '💻',
      text: 'Programador full stack: React, Node.js e integrações.',
    },
    {
      link: '/gestor-de-trafego',
      emoji: '📈',
      text: 'Gestor de tráfego: Google Ads, Meta Ads e LinkedIn Ads.',
    },
    {
      link: 'https://blog.marck0101.com.br/blog',
      emoji: '📝',
      text: 'Escrevo no blog sobre marketing e tecnologia.',
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
      link: 'https://wa.me/5555963370494?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+seu+portf%C3%B3lio',
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
  bio: `Olá! Eu sou Marcos, programador full stack e gestor de tráfego de Santo Cristo, RS. Trabalho com React, Node.js e campanhas de Google Ads, Meta Ads e LinkedIn Ads, transformando ideias em produtos web reais e campanhas que convertem.`,

  // Páginas de serviço (/gestor-de-trafego e /programador) — renderizadas por components/services/ServicePage.js
  services: {
    trafego: {
      path: '/gestor-de-trafego',
      seoTitle: 'Marcos Henrique Corrêa | Gestor de Tráfego — Google Ads, Meta Ads e LinkedIn Ads',
      seoDescription:
        'Marcos Henrique Corrêa, gestor de tráfego pago com mais de 3 anos em Google Ads, Meta Ads e LinkedIn Ads. Campanhas, rastreamento (GTM, CAPI) e dashboards com resultados reais.',
      eyebrow: 'Gestor de Tráfego',
      title: 'Gestor de tráfego que também entende a tecnologia por trás das campanhas',
      lead:
        'Sou Marcos Henrique Corrêa, gestor de tráfego pago com mais de 3 anos de experiência em Google Ads, Meta Ads e LinkedIn Ads, atuando em carteiras multisegmento. Como também sou programador, cuido da campanha e da estrutura que mede o resultado: rastreamento, integrações e dashboards.',
      sections: [
        {
          title: 'Plataformas e campanhas',
          items: [
            'Google Ads: Search, Shopping, Performance Max, Demand Gen, Display, Vídeo, Hotel Ads e Apps.',
            'Meta Ads: campanhas para Facebook e Instagram.',
            'LinkedIn Ads: geração de leads B2B.',
            'Estratégias orientadas por IA: Performance Max, Smart Bidding e Demand Gen.',
          ],
        },
        {
          title: 'Rastreamento e dados',
          items: [
            'Google Tag Manager, Data Layer e eventos customizados.',
            'Meta Pixel e API de Conversões (CAPI), inclusive server-side com Stape.',
            'GA4 e relatórios no Looker Studio.',
            'Dashboards próprios em React + PostgreSQL integrando as APIs de Meta, Google e LinkedIn.',
          ],
        },
        {
          title: 'Segmentos atendidos',
          items: ['B2B enterprise', 'E-commerce', 'Hotelaria', 'Turismo', 'Crédito rural'],
        },
        {
          title: 'Métricas que acompanho',
          items: ['ROAS', 'CPA e CPL', 'CAC e LTV', 'Taxa de conversão', 'Impression Share'],
        },
      ],
      results: {
        title: 'Resultados',
        note: 'Portfólio Google Ads: mais de R$ 400 mil investidos em 17 meses, 5 contas simultâneas.',
        items: [
          { segment: 'Turismo e agenciamento', value: 'R$ 956 mil+ em receita atribuída', detail: 'ROAS ~35x · CPA R$ 3,70 · +7.300 conversões' },
          { segment: 'E-commerce fitness', value: 'R$ 888 mil+ em receita', detail: 'ROAS de 17x e 18,7x por linha de produto' },
          { segment: 'Hotelaria de luxo (5 estrelas)', value: 'R$ 393 mil em receita', detail: 'ROAS global 7,4x · Hotel Ads 83x' },
          { segment: 'Tecnologia B2B (ERP)', value: '238 leads qualificados', detail: 'CPA R$ 468 · budget de R$ 111 mil' },
          { segment: 'Crédito rural', value: '199 conversões', detail: 'CPA R$ 125 · funil Search + Demand Gen' },
        ],
      },
      certifications: [
        'Google Skillshop: Rede de Pesquisa, IA no Google Ads, Shopping, Display, Vídeo, Apps e Google Analytics.',
        'LinkedIn Marketing Labs: Marketing Fundamentals e Estratégia de Marketing do LinkedIn.',
      ],
      related: { to: '/programador', text: 'Também sou programador full stack' },
      article: {
        href: 'https://blog.marck0101.com.br/blog/de-dev-a-gestor-de-trafego-como-o-codigo-virou-minha-maior-vantagem-no-marketing',
        text: 'Leia no blog: de dev a gestor de tráfego',
      },
    },
    programador: {
      path: '/programador',
      seoTitle: 'Marcos Henrique Corrêa | Programador Full Stack — React, Node.js e TypeScript',
      seoDescription:
        'Marcos Henrique Corrêa, programador full stack: sites, sistemas web, integrações com APIs e dashboards em React, Node.js, TypeScript, PostgreSQL e MongoDB.',
      eyebrow: 'Programador Full Stack',
      title: 'Programador full stack que desenvolve pensando em resultado',
      lead:
        'Sou Marcos Henrique Corrêa, programador full stack. Desenvolvo sites, sistemas web e integrações com JavaScript, TypeScript, React e Node.js. Por atuar também com tráfego pago, construo produtos preparados para ser encontrados, medidos e convertidos.',
      sections: [
        {
          title: 'O que eu desenvolvo',
          items: [
            'Sites institucionais e landing pages com SEO técnico e boa performance.',
            'Sistemas web com autenticação, painéis administrativos e CRUD completo.',
            'Integrações com APIs de mídia (Meta Ads, Google Ads e LinkedIn) e dashboards sob medida.',
            'Rastreamento implementado no código: GTM, GA4, Meta Pixel e CAPI.',
          ],
        },
        {
          title: 'Front-end',
          items: ['JavaScript e TypeScript', 'React e Next.js', 'Tailwind, Sass e Material UI', 'HTML5 e CSS3'],
        },
        {
          title: 'Back-end e dados',
          items: ['Node.js e Express', 'PHP', 'PostgreSQL e MongoDB', 'Firebase'],
        },
        {
          title: 'Ferramentas',
          items: ['Git e GitHub', 'Linux', 'Azure DevOps', 'Vercel e Netlify'],
        },
      ],
      projects: {
        title: 'Alguns projetos',
        items: [
          { name: 'Blog com painel administrativo próprio', detail: 'React, Node.js, Express e MongoDB, com pré-renderização para SEO.', href: 'https://blog.marck0101.com.br/blog' },
          { name: 'Dashboard de Marketing Integrado', detail: 'APIs de Meta Ads, Google Ads e LinkedIn em um painel React + PostgreSQL.' },
          { name: 'Noite a Dois', detail: 'Jogo web em HTML, CSS e JavaScript puros.', href: 'https://noite-a-dois.marck0101.com.br/' },
          { name: 'Site da arquiteta Taís Regina Müller', detail: 'Site institucional com SEO, performance e LGPD.', href: 'https://taismuller-arquiteta.netlify.app/' },
        ],
        more: { to: '/portfolio', text: 'Ver todos os projetos' },
      },
      related: { to: '/gestor-de-trafego', text: 'Também sou gestor de tráfego' },
      article: { href: 'https://github.com/marck0101', text: 'Meu GitHub' },
    },
  },
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
      title: 'Taís Regina Müller — Arquiteta',
      description: 'Site para escritório de arquitetura com foco em neuroarquitetura. Portfólio de obras, etapas do processo e formulário de contato. GTM implementado.',
      live: 'https://taismuller-arquiteta.netlify.app',
      image: TaisImg,
    },
    {
      title: 'Noite a Dois',
      description: 'Jogo web de verdade ou desafio para casais (+18) com 4 níveis, cronômetros e cartas personalizáveis. HTML, CSS e JavaScript puros, sem coleta de dados.',
      live: 'https://noite-a-dois.marck0101.com.br/',
      image: NoiteADoisImg,
    },
    {
      title: 'Dashboard de Marketing Integrado',
      description: 'Painel custom conectando APIs do Meta Ads, Google Ads e LinkedIn. Eliminou ferramentas pagas de BI. Construído com React e PostgreSQL.',
      image: DashImg,
    },
    {
      title: 'Blog — Marcos Henrique Corrêa',
      description: 'Blog pessoal com conteúdo sobre desenvolvimento, marketing digital e gestão de tráfego pago.',
      live: 'https://blog.marck0101.com.br/blog',
      image: BlogImg,
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
