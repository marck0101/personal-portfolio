# CLAUDE.md — Portfólio Pessoal (Marcos Henrique)

Contexto completo do projeto para uso do Claude Code. Leia este arquivo no início de cada sessão antes de qualquer ação.

---

## 1. Stack e Dependências

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 17.0.2 | Framework principal |
| Create React App | 5.0.1 (react-scripts) | Bundler / toolchain |
| SCSS Modules | via sass 1.54.5 | Estilização por componente |
| Material UI | 5.6.3 (@mui/material) | Componentes de layout e UI |
| react-router-dom | 6.3.0 | Roteamento (SPA) |
| react-icons | 4.8.0 | Ícones SVG (único sistema de ícones — Font Awesome CDN removido) |
| react-helmet-async | 3.0.0 | SEO dinâmico por rota (title, description, canonical) |
| ~~react-microsoft-clarity~~ | ~~1.2.0~~ | ~~Removido — sem uso; analytics via index.html~~ |
| classnames | 2.2.6 | Composição condicional de classes CSS |
| ~~moment~~ | ~~2.29.4~~ | ~~Removido — sem uso~~ |

---

## 2. Marca e Design System (marck0101 · "Relatório de campo")

**Antes de mexer em UI, CSS, textos ou imagens, leia `docs/marca/BRAND.md`.**
É cópia de `blog/_marca/BRAND.md` (fonte da verdade, junto com o Figma "marck0101 — Brand Identity").
Se a marca mudar no blog, copie de novo os dois arquivos abaixo.

| Arquivo | O que é |
|---|---|
| `docs/marca/BRAND.md` | Posicionamento, voz, paleta, tipografia, regras de tema |
| `src/styles/marck0101-temas.css` | Tokens da marca (cópia **sem edição** de `blog/_marca/marck0101-temas.css`) |
| `src/styles/base.scss` | Base global: escala tipográfica, `.rotulo`, `.dado`, `.btn-primario`, `.btn-secundario`, `.pagina`, `.cabecalho`, `.sr-only` |

**Regras**
- Componentes só leem tokens: `var(--fundo)`, `var(--texto)`, `var(--destaque)`, `var(--borda)`, `var(--raio)` etc. Nada de cor, fonte ou raio fixos.
  Única exceção: `--marca-tijolo` (ponto do logo, sempre tijolo), definido em `base.scss`.
- Fontes (Google Fonts, `<link>` no `index.html`): Fraunces 600 (títulos), IBM Plex Sans 400/500 (texto), IBM Plex Mono 400/500 (números, datas, rótulos).
- Um acento só (`--destaque`, tijolo): link, dado principal e botão primário. No máximo um `.btn-primario` por bloco.
- Números, datas e rótulos sempre em mono (`.rotulo`, `.dado`). "fig. 0N" só em figura de verdade (foto, print de projeto), nunca em seção de texto.
- Gráficos e barras em `--dado-grafico` (mate).
- Fotos reais. Sem gradiente, sem emoji decorativo, sem ilustração de IA.
- Logo: `components/Logo.js` (símbolo "m" + `marck0101`). Favicon `public/favicon.svg`, ícone `public/logo.png` (512px), capa `public/og-cover.html` → `og-image.png`.
- Textos seguem a voz do BRAND.md §4 (primeira pessoa, frases curtas, número com fonte e período, nada de "potencialize/alavancar/transforme").

---

## 3. Rotas e Estrutura de Páginas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Hero: foto (fig. 01), nome, cargo, lead + assinatura, lista numerada, serviços, sociais |
| `/about` | `About` | Seções: quem sou, como eu trabalho (pilares), ferramentas |
| `/portfolio` | `Portfolio` | Grid de cards de projeto |
| `/gestor-de-trafego` | `ServicePage` | Página de serviço (dados em `info.services.trafego`) — h1 "Marcos Henrique Corrêa — Gestor de Tráfego" |
| `/programador` | `ServicePage` | Página de serviço (dados em `info.services.programador`) — h1 "Marcos Henrique Corrêa — Programador Full Stack" |
| `*` | `NotFound` | 404 com noindex |

Não há rota para Metrics — o script do Microsoft Clarity é injetado diretamente via `public/index.html` (condicionado ao consentimento LGPD).

---

## 4. Componentes

### Estrutura de arquivos

```
src/
├── App.js                          # Root: HelmetProvider + BrowserRouter + BaseLayout
├── index.js                        # importa tokens, base.scss e temas-epoca.scss
├── utils/tema.js                   # estilo + claro/escuro → data-theme
├── styles/
│   ├── marck0101-temas.css         # Tokens da marca (cópia do blog/_marca)
│   ├── base.scss                   # Base global + utilitários da marca
│   ├── temas-epoca.scss            # Detalhes do Jornal e do Terminal (espelha raiz.css do blog)
│   └── fonts/                      # Fontes de época (woff2)
├── info/
│   └── Info.js                     # FONTE ÚNICA de dados do site
├── img/                            # Imagens estáticas
└── components/
    ├── BaseLayout.js               # Shell: tema + Navbar + Routes + Footer + CookieBanner + PrivacyPolicy
    ├── Navbar.js                   # Logo + Início, Sobre, Portfólio, Blog + Toggler
    ├── Footer.js                   # Logo com subtítulo, assinatura, links, política de privacidade, ©
    ├── Logo.js                     # Símbolo "m" (export Simbolo) + marck0101
    ├── SkinToggle.js               # Menu de estilo: Visual atual / Jornal / Terminal
    ├── NotFound.js                 # 404 com noindex
    ├── home/
    │   ├── Home.js                 # Hero (com Helmet)
    │   ├── BioItem.js              # Item numerado (01, 02…) da lista da Home
    │   ├── SocialIcon.js
    │   └── Toggler.js              # Botão tema claro/escuro
    ├── about/About.js              # Seções quem sou / pilares / ferramentas (com Helmet)
    ├── portfolio/
    │   ├── Portfolio.js            # Cabeçalho + grid (com Helmet)
    │   └── PortfolioBlock.js       # Card: imagem, "fig. 0N · stack", título, descrição, link
    ├── services/
    │   ├── ServicePage.js          # /gestor-de-trafego e /programador
    │   └── ServiceLinks.js         # Botões secundários para as páginas de serviço
    ├── cookies/CookieBanner.js
    └── privacy/PrivacyPolicy.js
```

Material UI continua no `package.json`, mas nenhum componente usa mais (pode ser removido).

### Responsabilidades chave

| Componente | Props / Estado relevante |
|---|---|
| `BaseLayout` | `darkMode` (state + localStorage), `handleToggleDarkMode()` — aplica `data-theme` no `<html>` |
| `Navbar` | `darkMode`, `handleClick` — recebe de BaseLayout; links no próprio arquivo, ativo via `NavLink` |
| `Home` | Sem props — consome `info` diretamente; inclui `<Helmet>` com title/description/canonical |
| `About` | Sem props — lê `info.bio`, `info.pillars`, `info.skills`, `info.hobbies`; inclui `<Helmet>` |
| `Portfolio` | Sem props — itera `info.portfolio`; inclui `<Helmet>` |
| `PortfolioBlock` | `index`, `image` (null → placeholder), `live`, `source`, `title`, `description`, `stack[]` |
| `CookieBanner` | Sem props — lê/escreve `localStorage.cookieConsent`; chama `window.enableAnalytics()` |
| `PrivacyPolicy` | Sem props — modal `<dialog>` nativo; aberto via `document.getElementById("privacy-policy-modal").showModal()` |

### Ícones
Todos os ícones usam `react-icons` (`fa`). Cor herdada dos tokens (`--texto-suave`, hover `--destaque`).

---

## 5. Fonte de Dados — `src/info/Info.js`

**Este é o único arquivo a editar para mudar conteúdo do site.** Nunca editar texto diretamente nos componentes JSX.

### Estrutura do objeto `info`

```js
info = {
  fullName, photo, blogUrl, githubUrl, email, location,
  position,            // "Programador full stack e gestor de tráfego" (SEO: não trocar sem pensar)
  tagline,             // "O básico, bem feito e medido." (assinatura da marca)
  lead,                // texto curto da Home (posicionamento)
  miniBio: [{ link, text }],          // lista numerada da Home
  socials: [{ link, icon, label }],
  bio: [paragrafo, ...],              // About fig. 01
  pillars: [{ title, text }],         // About fig. 02 (pilares do BRAND.md)
  services: { trafego, programador }, // páginas de serviço
  skills: [{ title, items: [] }],     // About fig. 03
  hobbies: 'string',
  portfolio: [{ title, description, live?, source?, stack: [], image }],
}
```

---

## 6. Projetos no Portfólio

| # | Título | Live | Source | Imagem | Stack |
|---|---|---|---|---|---|
| 0 | Noite a Dois | https://noite-a-dois.marck0101.com.br/ | — | ✅ `noite-a-dois.png` | HTML/CSS/JS puros, Vercel (repo `marck0101/Noite-a-dois`) |
| 1 | Taís Regina Müller — Arquiteta | https://taismuller-arquiteta.netlify.app | — | ✅ `taismuller-arquiteta.png` | HTML, Tailwind (compilado), Netlify, GTM (repo `marck0101/portfolio-arquitetura`) |
| 2 | Dashboard de Marketing Integrado | — | — | ✅ `sistema-dash-gh.png` | React, Node.js, PostgreSQL |
| 3 | Blog — Marcos Henrique | https://blog.marck0101.com.br | — | ✅ `blog-marcos.png` | Blog pessoal |
| 4 | Site Institucional + Blog — Veterinária Tamires | https://veterinariatamires.lovestoblog.com | — | ✅ `veterinaria-tamires.png` | PHP, MySQL, WordPress |
| 5 | Next Movies | https://filmes-lancamentos-atualizados.netlify.app | — | ✅ `next-movies.png` (print de 2026-11-16) | React, API do TMDB, Netlify (repo `marck0101/my-portfolio`) |
| ~~6~~ | ~~Lista de Tarefas com Autenticação~~ (oculto em 2026-11-16, comentado no `Info.js` e no `<noscript>`, removido do JSON-LD) | https://atual-lista-tarefas.netlify.app | — | `ToDoList.png` | React, Firebase, Firestore |

**Nota:** Nenhum projeto tem `source` (repositórios privados). Projetos com `image: null` exibem placeholder neutro ("imagem em breve"); sem `live` nem `source`, o card diz "Projeto interno, sem link público." Quando a imagem chegar: importar em `Info.js` e substituir `null` pela variável importada.

---

## 7. Estilos e temas (igual ao blog)

Mesmas regras do blog (`blog-front/src/utils/skin.js`):

| Estilo (`localStorage.skin`) | Tema (`data-theme` no `<html>`) | Claro/escuro |
|---|---|---|
| Visual atual (sem chave) | `relatorio` ou `relatorio-escuro` | `localStorage.darkMode`; sem preferência, segue o sistema |
| `jornal` | `jornal` | sempre claro (botão de tema some) |
| `terminal` | `bbs` | sempre escuro (botão de tema some) |

- Lógica em `src/utils/tema.js`; `public/index.html` repete a regra antes da pintura (sem piscar).
- `SkinToggle` (menu: Visual atual / Jornal / Terminal) + `Toggler` (claro/escuro) na Navbar. A troca dispara `skin_toggle` no dataLayer.
- Cores e fontes de época vêm dos tokens (`marck0101-temas.css`, valores conferidos com o `raiz.css` do blog).
- Detalhes que token não resolve ficam em `src/styles/temas-epoca.scss`, espelhando `blog-front/public/skins/raiz.css`: faixa do topo, logo (gótico no Jornal, `C:\>` no Terminal), menu `[COLCHETES]`, varredura e brilho do Terminal. Ganchos: `skin-header`, `skin-footer`, `skin-logo`, `skin-simbolo`, `skin-nome`, `skin-nav`, `skin-link`, `skin-menu`.
- Fontes de época em `src/styles/fonts/` (cópia das do blog, licenças em `LICENSES.txt`); só baixam para quem escolhe o estilo.
- Nos estilos de época o símbolo "m" some do topo, mas continua no rodapé e no favicon (regra da marca).

---

## 8. Imagens disponíveis em `src/img/`

```
selfII.png, self.png, self2.png, self3.png, self4.png, self5.png, self5A.webp
1.png, 1-removebg-preview.png
2.png, 2-removebg-preview.png
4.png, 4-removebg-preview.png
certificados.png, curriculo.png
Portfolio-removebg-preview.png
logo.png
mock0-5.png (mock0.png a mock5.png)
image.png, image-1.png
imgTodoList.png, ToDoList.png
clarity.png
img-port.png, img-port-light.png
"img canva.png", "image remove fundo.png"
```

**Imagem de perfil ativa:** `self5A.webp` (usada em `Home.js`)

---

## 9. Otimizações e Melhorias Aplicadas

### Performance / Segurança
- [x] Lazy loading em imagens do portfólio (`loading="lazy"` + `width`/`height` 559×447 em PortfolioBlock)
- [x] Preload quebrado removido do `public/index.html` (apontava para `/img/hero@1x.avif` inexistente)
- [x] `React.memo` em `EmojiBullet` e `SocialIcon` (componentes de lista puros)
- [x] `moment` removido do `package.json` (sem nenhum uso em src/)
- [x] `eval()` substituído por comparação de string no BaseLayout (segurança)
- [x] Imports mortos removidos do Info.js: `mock0`, `mock1`, `self`/`selfPortrait` (~211KB a menos no bundle)
- [x] Borda hardcoded `2px solid black` corrigida para `currentColor` no PortfolioBlock (dark mode)
- [x] `color: $dark` nos links do Home.module.scss corrigido para `inherit` (dark mode)
- [x] Variável intermediária desnecessária removida do Toggler.js
- [x] `clarity.js` deletado (M1) + pasta `metrics/` removida
- [x] Font Awesome CDN removido — 100% migrado para `react-icons/fa` (M2)
- [x] `react-microsoft-clarity` removido do `package.json`
- [x] Rodapé: `© 2023` → `© {new Date().getFullYear()}`
- [x] `console.log` de debug removido do `handleToggleDarkMode`
- [x] `PortfolioBlock`: comentários mortos removidos, indentação corrigida, `? <></> : ...` → `&&`
- [x] `Info.js`: comentários de URLs de source privados removidos — código limpo e sem ambiguidade
- [x] `public/og-cover.html` criado — capa 1200×630 para tirar screenshot e usar como og:image

### SEO
- [x] `<title>` otimizado: "Marcos Corrêa | Desenvolvedor Full Stack — Santo Cristo, RS"
- [x] `<meta name="description">` com 141 chars otimizados
- [x] `<meta name="author">`, `<meta name="robots">`, `<link rel="canonical">`
- [x] Open Graph completo (og:type, og:url, og:title, og:description, og:image, og:locale, og:site_name)
- [x] Twitter Card (summary_large_image)
- [x] JSON-LD: Person + WebSite + ItemList com os 6 projetos reais (sincronizado com `Info.js`)
- [x] `robots.txt` com diretiva `Sitemap:`
- [x] `public/sitemap.xml` criado com as 3 rotas e prioridades
- [x] `react-helmet-async` instalado e integrado (Home, About, Portfolio com title/description/canonical por rota)
- [x] `lang="pt-BR"` corrigido (BCP 47)
- [x] `public/og-image.png` (1200×630) gerado a partir de `og-cover.html` via `google-chrome --headless --screenshot`; `og:image`/`twitter:image` atualizados

### GEO (Geographic + Generative Engine Optimization)
- [x] Meta tags geográficas em `index.html`: `geo.region` (BR-RS), `geo.placename` (Santo Cristo), `geo.position`, `ICBM`
- [x] Schema `Person` no JSON-LD com `geo` (GeoCoordinates) e `knowsAbout` (stack/skills)
- [x] Bloco `<noscript>` em `index.html` com bio, skills e os 6 projetos em texto puro — conteúdo legível por crawlers de IA que não executam JS (GPTBot, ClaudeBot, PerplexityBot, etc.)

### SEO — busca pelo nome (2026-10-06)
- [x] Nome completo "Marcos Henrique Corrêa" no `<title>`, H1 da Home (`info.fullName`), Helmet de todas as rotas, og:title e og:site_name
- [x] JSON-LD: `ProfilePage` + `Person` com `@id` `https://marck0101.com.br/#person` (mesmo @id usado no blog — entidade única), `alternateName`, `sameAs` com o blog
- [x] `description` e `canonical` do `index.html` com `data-rh="true"` para o Helmet substituí-los por rota (antes /about e /portfolio tinham 2 canonicals)
- [x] Canonical da home com barra final (igual ao sitemap); links `rel="me"`; link para o blog no miniBio e no rodapé
- [x] Foto do hero servida de `public/marcos-henrique-correa.webp` (URL estável) com preload + fetchpriority=high (LCP)
- [x] Google Fonts saiu do `@import` no SCSS para `<link>` não bloqueante + preconnect no `index.html`
- [x] `EmojiBullet` sem link renderiza `<span>` (antes `<a>` sem href)

### LGPD
- [x] `CookieBanner` criado (`src/components/cookies/`) — aceita todos ou só essenciais, salva em localStorage
- [x] `PrivacyPolicy` criado (`src/components/privacy/`) — modal `<dialog>` com conteúdo completo LGPD
- [x] Clarity condicionado ao consentimento (`cookieConsent === "all"`)
- [x] GTM mantido com Consent Mode v2 (defaults: denied) — LGPD-compliant sem bloquear o framework
- [x] Meta Pixel standalone removido do `index.html` — já disparado pelas tags do próprio GTM (`facebook all pages`/`facebook Lead`), evitando double-tracking
- [x] `window.enableAnalytics()` exposto para ativar analytics após consentimento React

---

## 10. Deploy / Produção

| Campo | Valor |
|---|---|
| URL de produção | https://marck0101.com.br |
| Hosting | Netlify |
| Repositório | git@github.com:marck0101/personal-portfolio.git |
| Branch de deploy | `main` |
| Build command | `npm run build` |
| Publish directory | `build` |
| Deploy trigger | Push automático via SSH — `git push origin main` |
| Tempo de deploy | ~1-2 minutos após o push |
| Analytics | GTM (`GTM-KSZJXTHM`) + Clarity (`lyju0gbkv7`) — apenas em produção, após consentimento. Meta Pixel disparado via tags do próprio GTM, sem código standalone |
| Sitemap | https://marck0101.com.br/sitemap.xml |
| Search Console | Verificado via meta tag (`google-site-verification`) em `index.html` + registro TXT no DNS (Netlify DNS) |

**Workflow de deploy:**
Claude Code edita → `git add` + `git commit` + `git push origin main` → Netlify deploya automaticamente.

---

## 11. Histórico de Alterações

| Data | Descrição |
|---|---|
| 2026-06-03 | Criação do CLAUDE.md — scan inicial completo do projeto |
| 2026-06-03 | Rodada de correções: segurança (eval→string), dark mode (borda+links), imports mortos (~211KB), moment removido, lazy loading nas imagens, reordenação estratégica do portfólio |
| 2026-06-03 | SEO completo + LGPD implementados + M1 clarity.js removido + M2 Font Awesome migrado para react-icons |
| 2026-06-03 | Limpeza pós-sessão: metrics/ deletada, react-microsoft-clarity removido, rodapé dinâmico, source null handling, og-cover.html criado |
| 2026-06-03 | Conteúdo: bio e position atualizados; descrições nos 6 cards do portfólio; aria-label no CookieBanner; focus-visible global ($purple); React.memo em EmojiBullet e SocialIcon; I1 (selfII→self5A) já resolvido na sessão anterior |
| 2026-06-03 | Portfólio atualizado com 6 novos projetos reais; PortfolioBlock com placeholder para image:null |
| 2026-06-03 | Imagens adicionadas para 3 projetos (Tais Müller, Dashboard, Veterinária); ToDoList.png vinculada à Lista de Tarefas; placeholder com título para Sistema de Chamados e Next Movies |
| 2026-06-10 | Meta tag de verificação do Google Search Console adicionada ao `index.html` + registro TXT criado no Netlify DNS; Meta Pixel standalone removido (duplicava tags já existentes no GTM) |
| 2026-06-10 | Auditoria SEO/GEO: JSON-LD reescrito com os 6 projetos reais; meta tags geo (geo.region/placename/position, ICBM) e GeoCoordinates/knowsAbout no schema Person; og-image.png (1200×630) gerado a partir do og-cover.html; bloco `<noscript>` com bio/skills/projetos para crawlers de IA sem JS; sitemap.xml com lastmod atualizado |
| 2026-10-06 | SEO para busca pelo nome: ProfilePage/Person com @id compartilhado com o blog, nome completo em title/H1, canonical único por rota (data-rh), preload do LCP, fonte não bloqueante, links cruzados com o blog |
| 2026-10-06 | Projeto Noite a Dois adicionado (Info.js, JSON-LD ItemList, noscript); rota `*` com NotFound + noindex (soft 404); logo "Js" da Navbar deixou de ser `<h1>`; títulos dos cards viraram `<h2>`; `<h1>` sr-only em About/Portfolio (`SrOnlyHeading`) |
| 2026-10-07 | Projeto da arquiteta renomeado para "Taís Regina Müller — Arquiteta" (nome correto; antes "Tais L. Müller") |
| 2026-10-07 | Estratégia de busca por nome + profissão: páginas `/gestor-de-trafego` e `/programador` (`components/services/ServicePage.js`), posicionamento "Programador Full Stack & Gestor de Tráfego" em title/H2/miniBio/JSON-LD (`hasOccupation`), links internos no miniBio e rodapé, sitemap atualizado |
| 2026-11-16 | Padronização com a marca marck0101 ("Relatório de campo"): tokens e BRAND.md copiados do blog, fontes Fraunces/IBM Plex, logo "m" + favicon SVG + ícone, temas `relatorio`/`relatorio-escuro` no lugar do dark mode por classe, Home/About/Portfólio/Serviços/Cookies/Privacidade/404 refeitos só com tokens, rodapé com assinatura e link da política, textos reescritos na voz da marca (sem emoji, gradiente ou terminal), og-cover/og-image refeitos. Removidos: variables.modules.scss, App.module.scss, Terminal, EmojiBullet, IconLink, SrOnlyHeading |
| 2026-11-16 | Estilos de época iguais ao blog: menu Visual atual / Jornal / Terminal (`SkinToggle`, `utils/tema.js`, `styles/temas-epoca.scss`, fontes próprias); tokens `jornal`/`bbs` corrigidos com os valores reais do `raiz.css` (também em `blog/_marca`); "fig." removido das seções de texto do Sobre |
