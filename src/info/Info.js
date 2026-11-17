import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import TaisImg     from '../img/taismuller-arquiteta.png'
import DashImg     from '../img/sistema-dash-gh.png'
import BlogImg     from '../img/blog-marcos.png'
import VetImg      from '../img/veterinaria-tamires.png'
// import ToDoListImg from '../img/ToDoList.png' // projeto oculto (ver portfolio)
import NoiteADoisImg from '../img/noite-a-dois.png'
import NextMoviesImg from '../img/next-movies.png'
import JbImobiliariaImg from '../img/jb-imobiliaria.png'

export const info = {
  fullName: 'Marcos Henrique Corrêa',
  photo: '/marcos-henrique-correa.webp', // public/ — URL estável usada no preload e no JSON-LD
  blogUrl: 'https://blog.marck0101.com.br/blog',
  githubUrl: 'https://github.com/marck0101',
  email: 'marck.mhc@gmail.com',
  location: 'Santo Cristo, RS',
  position: 'Programador full stack e gestor de tráfego',
  // Assinatura e posicionamento: blog/_marca/BRAND.md §1 (cópia em docs/marca/BRAND.md)
  tagline: 'O básico, bem feito e medido.',
  lead:
    'Sou profissional de marketing e também desenvolvedor. Junto tráfego pago, SEO e tracking com dados e automação, para que cada real investido seja medido. Sem pacote fechado e sem método mágico.',
  miniBio: [
    {
      link: '/gestor-de-trafego',
      text: 'Tráfego pago no Google Ads, Meta Ads e LinkedIn Ads, com o tracking conferido antes do primeiro real.',
    },
    {
      link: '/programador',
      text: 'Sites, sistemas e dashboards em React e Node.js, prontos para ser encontrados e medidos.',
    },
    {
      link: 'https://blog.marck0101.com.br/blog',
      text: 'No blog eu mostro o processo: o que funcionou, o que não funcionou e os números.',
    },
    {
      link: 'mailto:marck.mhc@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio',
      text: 'Quer conversar sobre o seu caso? Me mande um e-mail.',
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
  bio: [
    'Sou Marcos Henrique Corrêa, de Santo Cristo, no noroeste do RS. Trabalho com marketing e com código: gestão de tráfego no Google Ads, Meta Ads e LinkedIn Ads, e desenvolvimento web em React e Node.js.',
    'Uso as duas coisas juntas. Antes de subir uma campanha, confiro se o pixel conta certo. Depois, monto o relatório que mostra o que trouxe resultado e o que não trouxe, com a fonte de cada número.',
    'Atendo principalmente pequenas e médias empresas que já investem em mídia e conteúdo, mas ainda não sabem o que realmente funciona. Também ajudo agências e times que precisam de tracking, dashboards e automação.',
  ],
  // Pilares da marca (BRAND.md §2)
  pillars: [
    { title: 'Medir antes de escalar', text: 'Tracking configurado antes do primeiro real em mídia.' },
    { title: 'O básico bem feito', text: 'Site rápido, pixel certo, campanha bem estruturada.' },
    { title: 'Engenharia no marketing', text: 'Automação, dashboards e benchmarks feitos com código.' },
    { title: 'Números na mesa', text: 'Mostro o que funcionou e o que não funcionou, com a fonte.' },
  ],

  // Páginas de serviço (/gestor-de-trafego e /programador) — renderizadas por components/services/ServicePage.js
  services: {
    trafego: {
      path: '/gestor-de-trafego',
      seoTitle: 'Marcos Henrique Corrêa | Gestor de Tráfego — Google Ads, Meta Ads e LinkedIn Ads',
      seoDescription:
        'Marcos Henrique Corrêa, gestor de tráfego pago com mais de 3 anos em Google Ads, Meta Ads e LinkedIn Ads. Campanhas, rastreamento (GTM, CAPI) e dashboards com resultados reais.',
      eyebrow: 'Gestor de Tráfego',
      title: 'Gestor de tráfego que também é desenvolvedor: cuido da campanha e de como ela é medida.',
      lead:
        'Sou Marcos Henrique Corrêa, gestor de tráfego pago com mais de 3 anos de experiência em Google Ads, Meta Ads e LinkedIn Ads, atuando em carteiras multisegmento. Antes de subir a campanha, confiro se o rastreamento conta certo. Depois, monto o dashboard que mostra o resultado.',
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
        // Só métricas de eficiência (ROAS/CPA). Receita, verba e volume absolutos
        // ficam de fora: sem o tamanho da conta e o período, parecem baixos.
        note: 'Fonte: contas de Google Ads que gerenciei, 5 ao mesmo tempo, ao longo de 17 meses.',
        items: [
          { segment: 'Turismo e agenciamento', value: 'ROAS de ~35x', detail: 'CPA de R$ 3,70' },
          { segment: 'E-commerce fitness', value: 'ROAS de 17x a 18,7x', detail: 'conforme a linha de produto' },
          { segment: 'Hotelaria de luxo (5 estrelas)', value: 'ROAS global de 7,4x', detail: 'Hotel Ads com ROAS de 83x' },
          { segment: 'Tecnologia B2B (ERP)', value: 'CPA de R$ 468', detail: 'por lead qualificado' },
          { segment: 'Crédito rural', value: 'CPA de R$ 125', detail: 'funil Search + Demand Gen' },
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
      title: 'Programador full stack que entende de marketing: sites e sistemas prontos para ser encontrados e medidos.',
      lead:
        'Sou Marcos Henrique Corrêa, programador full stack. Desenvolvo sites, sistemas web e integrações com JavaScript, TypeScript, React e Node.js. Como também trabalho com tráfego pago, entrego o site com SEO técnico e tracking configurados desde o primeiro dia.',
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
  skills: [
    {
      title: 'Marketing e dados',
      items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Google Tag Manager', 'GA4', 'Meta Pixel e CAPI', 'Looker Studio'],
    },
    {
      title: 'Desenvolvimento',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'Tailwind', 'Sass', 'Git'],
    },
    {
      title: 'Já usei em projeto',
      items: ['PHP', 'WordPress', 'Java', 'Bootstrap', 'Material UI', 'Figma'],
    },
  ],
  hobbies: 'Fora do trabalho: música, leitura e filmes.',
  portfolio: [
    {
      title: 'Taís Regina Müller — Arquiteta',
      description: 'Site para escritório de arquitetura com foco em neuroarquitetura. Portfólio de obras, etapas do processo e formulário de contato. GTM implementado.',
      live: 'https://taismuller-arquiteta.netlify.app',
      stack: ['HTML', 'Tailwind', 'GTM'],
      image: TaisImg,
    },
    {
      title: 'JB Imobiliária',
      description: 'Site para imobiliária do noroeste do RS: vitrine com filtros, página própria para cada imóvel e atendimento pelo WhatsApp. SEO local e dados estruturados.',
      live: 'https://front-jb-imobiliaria.vercel.app',
      stack: ['Next.js', 'TypeScript', 'SEO'],
      image: JbImobiliariaImg,
    },
    {
      title: 'Noite a Dois',
      description: 'Jogo web de verdade ou desafio para casais (+18) com 4 níveis, cronômetros e cartas personalizáveis. HTML, CSS e JavaScript puros, sem coleta de dados.',
      live: 'https://noite-a-dois.marck0101.com.br/',
      stack: ['HTML', 'CSS', 'JavaScript'],
      image: NoiteADoisImg,
    },
    {
      title: 'Dashboard de Marketing Integrado',
      description: 'Painel próprio que junta as APIs do Meta Ads, Google Ads e LinkedIn. Substituiu ferramentas pagas de BI.',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      image: DashImg,
    },
    {
      title: 'Blog — Marcos Henrique Corrêa',
      description: 'Blog pessoal com conteúdo sobre desenvolvimento, marketing digital e gestão de tráfego pago.',
      live: 'https://blog.marck0101.com.br/blog',
      stack: ['React', 'Node.js', 'MongoDB'],
      image: BlogImg,
    },
    {
      title: 'Site Institucional + Blog — Veterinária Tamires',
      description: 'Site e blog para médica veterinária com foco em conteúdo educativo e autoridade. PHP, MySQL e hospedagem InfinityFree.',
      live: 'https://veterinariatamires.lovestoblog.com',
      stack: ['PHP', 'MySQL', 'WordPress'],
      image: VetImg,
    },
    {
      title: 'Next Movies',
      description: 'Catálogo de filmes com filtro por período, gênero e nota. Capas com duração, direção e classificação; trailer, elenco e onde assistir.',
      live: 'https://filmes-lancamentos-atualizados.netlify.app',
      stack: ['React', 'API do TMDB'],
      image: NextMoviesImg,
    },
    // Oculto em 16/11/2026. Para voltar: descomentar este bloco e o import do
    // ToDoListImg, e devolver o item no JSON-LD e no <noscript> do public/index.html.
    // {
    //   title: 'Lista de Tarefas com Autenticação',
    //   description: 'Gerenciador de tarefas com login/logout e persistência via Firebase Firestore. Dados isolados por usuário.',
    //   live: 'https://atual-lista-tarefas.netlify.app',
    //   stack: ['React', 'Firebase'],
    //   image: ToDoListImg,
    // },
  ],
}
