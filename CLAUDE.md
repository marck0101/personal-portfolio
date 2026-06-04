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

## 2. Design System — `src/variables.modules.scss`

```scss
$purple:    #8d53ff;
$pink:      #ca6be6;
$white:     #f8f8f8;
$dark:      #1f1f1f;
$red:       #ff6057;
$yellow:    #ffbd2e;
$green:     #27c93f;
$lightgray: #c9c9c9;

$transition: all 250ms ease;

.shadowed {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
}
```

**Gradiente dinâmico** (definido em `src/info/Info.js`):
- `colors = ['rgb(0,255,164)', 'rgb(166,104,255)']`
- `info.gradient = -webkit-linear-gradient(135deg, colors)`
- `info.baseColor = colors[0]` (verde)

**Regra:** sempre usar as variáveis do design system. Nunca adicionar cores hardcoded nos componentes.

---

## 3. Rotas e Estrutura de Páginas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Hero com avatar, nome, miniBio e ícones sociais |
| `/about` | `About` | 3 terminais: bio, skills e hobbies |
| `/portfolio` | `Portfolio` | Grid de cards de projeto |

Não há rota para Metrics — o script do Microsoft Clarity é injetado diretamente via `public/index.html` (condicionado ao consentimento LGPD).

---

## 4. Componentes

### Estrutura de arquivos

```
src/
├── App.js                          # Root: HelmetProvider + BrowserRouter + BaseLayout
├── App.module.scss
├── index.js
├── variables.modules.scss          # Design system global
├── info/
│   └── Info.js                     # FONTE ÚNICA de dados do site
├── img/                            # Imagens estáticas
└── components/
    ├── BaseLayout.js               # Shell: dark mode + Navbar + Routes + Footer + CookieBanner + PrivacyPolicy
    ├── BaseLayout.module.scss
    ├── Navbar.js                   # Navegação: Home, Sobre mim, logo (initials), Portfolio + Toggler
    ├── Navbar.module.scss
    ├── home/
    │   ├── Home.js                 # Seção hero (com Helmet)
    │   ├── Home.module.scss
    │   ├── EmojiBullet.js          # Item de miniBio (emoji + texto + link opcional)
    │   ├── SocialIcon.js           # Ícone de rede social com link
    │   └── Toggler.js              # Botão de alternância dark/light mode
    ├── about/
    │   ├── About.js                # 3 blocos Terminal: aboutMe, skills, misc (com Helmet)
    │   ├── About.module.scss
    │   ├── Terminal.js             # Wrapper visual de terminal
    │   └── Terminal.module.scss
    ├── portfolio/
    │   ├── Portfolio.js            # Grid de projetos (com Helmet)
    │   ├── PortfolioBlock.js       # Card individual de projeto
    │   └── IconLink.js             # Ícone + link (live / source)
    ├── cookies/
    │   ├── CookieBanner.js         # Banner LGPD: "Aceitar todos" / "Só essenciais"
    │   └── CookieBanner.module.scss
    ├── privacy/
    │   ├── PrivacyPolicy.js        # Modal <dialog> com política completa LGPD
    │   └── PrivacyPolicy.module.scss
    └── ~~metrics/~~                # DELETADA — clarity.js era dead code; index.html gerencia analytics
```

### Responsabilidades chave

| Componente | Props / Estado relevante |
|---|---|
| `BaseLayout` | `darkMode` (state + localStorage), `handleToggleDarkMode()` — propaga para Navbar e aplica classe CSS |
| `Navbar` | `darkMode`, `handleClick` — recebe de BaseLayout; links hardcoded no próprio arquivo |
| `Home` | Sem props — consome `info` diretamente; inclui `<Helmet>` com title/description/canonical |
| `About` | Sem props — 3 funções que retornam JSX para os terminais; inclui `<Helmet>` |
| `Portfolio` | Sem props — itera `info.portfolio`; inclui `<Helmet>` |
| `PortfolioBlock` | `image` (null → placeholder), `live`, `source`, `title`, `description` (opcional — 2 linhas com clamp) |
| `CookieBanner` | Sem props — lê/escreve `localStorage.cookieConsent`; chama `window.enableAnalytics()` |
| `PrivacyPolicy` | Sem props — modal `<dialog>` nativo; aberto via `document.getElementById("privacy-policy-modal").showModal()` |

### Ícones
Todos os ícones usam `react-icons/fa`. Font Awesome CDN foi completamente removido.
- Socials em `Info.js`: `<FaWhatsapp />`, `<FaGithub />`, `<FaLinkedin />` (JSX passado como prop)
- Portfolio buttons: `<FaGlobe />` (Live Demo), `<FaCode />` (Source Code)
- Terminal dots: `<FaCircle color="#ff6057|#ffbd2e|#27c93f" />` com `marginLeft: 0.5rem`

---

## 5. Fonte de Dados — `src/info/Info.js`

**Este é o único arquivo a editar para mudar conteúdo do site.** Nunca editar texto diretamente nos componentes JSX.

### Estrutura do objeto `info`

```js
info = {
  firstName: ' Marcos',
  lastName: 'Henrique',
  initials: 'Js',           // Logo exibido no centro da Navbar
  position: 'um desenvolvedor Full Stack',
  gradient: '...',           // gerado a partir de colors[]
  baseColor: colors[0],      // 'rgb(0,255,164)'

  miniBio: [
    { link, emoji, text },   // 3 itens: GitHub, Gestor de Mídia, E-mail
  ],

  socials: [
    { link, icon, label },   // WhatsApp, GitHub, LinkedIn
  ],

  bio: `string de bio completa`,

  skills: {
    proficientWith: [...],   // 15 tecnologias
    exposedTo: [...],        // 5 tecnologias
  },

  hobbies: [
    { label, emoji, link? }, // Músicas, Leitura, Filmes
  ],

  portfolio: [
    { title, live?, source?, image },
  ],
}
```

---

## 6. Projetos no Portfólio

| # | Título | Live | Source | Imagem | Stack |
|---|---|---|---|---|---|
| 1 | Tais L. Müller Arquiteta | https://taismuller-arquiteta.netlify.app | — | ✅ `taismuller-arquiteta.png` | React, Netlify, GTM |
| 2 | Dashboard de Marketing Integrado | — | — | ✅ `sistema-dash-gh.png` | React, Node.js, PostgreSQL |
| 3 | Blog — Marcos Henrique | https://blog.marck0101.com.br | — | ✅ `blog-marcos.png` | Blog pessoal |
| 4 | Site Institucional + Blog — Veterinária Tamires | https://veterinariatamires.lovestoblog.com | — | ✅ `veterinaria-tamires.png` | PHP, MySQL, WordPress |
| 5 | Next Movies | https://filmes-lancamentos-atualizados.netlify.app | — | ⏳ placeholder | React, API REST, Netlify |
| 6 | Lista de Tarefas com Autenticação | https://atual-lista-tarefas.netlify.app | — | ✅ `ToDoList.png` (temporária) | React, Firebase, Firestore |

**Nota:** Todos os 6 projetos têm `source: null` (repositórios privados ou sem repo público). Projetos com `image: null` exibem placeholder com borda roxa, fundo sutil e o título centralizado. Quando a imagem chegar: importar em `Info.js` e substituir `null` pela variável importada.

---

## 7. Dark Mode

- Estado gerenciado em `BaseLayout` via `useState(false)`
- Persistido em `localStorage` com chave `"darkMode"` (valor string `"true"/"false"`)
- Lido no `useEffect` inicial com: `localStorage.getItem("darkMode") === "true"`
- Aplicado como classe CSS no `<Box>` raiz: `Style.dark` ou `Style.light`
- Toggle via componente `Toggler` na Navbar

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
- [x] JSON-LD: Person + WebSite + ItemList com os 6 projetos
- [x] `robots.txt` com diretiva `Sitemap:`
- [x] `public/sitemap.xml` criado com as 3 rotas e prioridades
- [x] `react-helmet-async` instalado e integrado (Home, About, Portfolio com title/description/canonical por rota)
- [x] `lang="pt-BR"` corrigido (BCP 47)

### LGPD
- [x] `CookieBanner` criado (`src/components/cookies/`) — aceita todos ou só essenciais, salva em localStorage
- [x] `PrivacyPolicy` criado (`src/components/privacy/`) — modal `<dialog>` com conteúdo completo LGPD
- [x] Clarity e Meta Pixel condicionados ao consentimento (`cookieConsent === "all"`)
- [x] GTM mantido com Consent Mode v2 (defaults: denied) — LGPD-compliant sem bloquear o framework
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
| Analytics | GTM (`GTM-KSZJXTHM`) + Clarity (`lyju0gbkv7`) + Meta Pixel (`1042435387262327`) — apenas em produção, após consentimento |
| Sitemap | https://marck0101.com.br/sitemap.xml |

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
