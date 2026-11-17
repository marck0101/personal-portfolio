import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import conteudo from './conteudo.json'
import TaisImg from '../img/taismuller-arquiteta.png'
import DashImg from '../img/sistema-dash-gh.png'
import BlogImg from '../img/blog-marcos.png'
import VetImg from '../img/veterinaria-tamires.png'
import NoiteADoisImg from '../img/noite-a-dois.png'
import NextMoviesImg from '../img/next-movies.png'
import JbImobiliariaImg from '../img/jb-imobiliaria.png'

// Os TEXTOS ficam em conteudo.json (fonte única, também lida pelo pós-build
// que gera o HTML de cada rota, o sitemap.xml e o llms.txt). Aqui só entram o
// que o JSON não guarda: ícones (JSX) e imagens (importadas pelo webpack).

const IMAGENS = {
  'taismuller-arquiteta': TaisImg,
  'jb-imobiliaria': JbImobiliariaImg,
  'noite-a-dois': NoiteADoisImg,
  'sistema-dash-gh': DashImg,
  'blog-marcos': BlogImg,
  'veterinaria-tamires': VetImg,
  'next-movies': NextMoviesImg,
}

const ICONES = {
  whatsapp: <FaWhatsapp />,
  Github: <FaGithub />,
  LinkedIn: <FaLinkedin />,
}

export const info = {
  ...conteudo,
  socials: conteudo.socials.map((s) => ({ ...s, icon: ICONES[s.label] })),
  // Projeto com "oculto": true no JSON não aparece em lugar nenhum
  portfolio: conteudo.portfolio
    .filter((p) => !p.oculto)
    .map((p) => ({ ...p, image: IMAGENS[p.imagem] || null })),
}
