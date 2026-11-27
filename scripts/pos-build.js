/*
 * Pós-build (roda depois do react-scripts build): SEO e GEO de um site React SPA.
 *
 * Problema que resolve: numa SPA, todas as rotas entregam o mesmo index.html.
 * O Google executa o JavaScript e vê o título certo, mas os robôs de IA
 * (GPTBot, ClaudeBot, PerplexityBot...) não executam: para eles,
 * /gestor-de-trafego era uma cópia da home.
 *
 * O que gera em build/, a partir de src/info/conteudo.json (mesmo JSON do React):
 *   index.html, about.html, portfolio.html, gestor-de-trafego.html, programador.html
 *     -> mesmo app React, mas cada um com title, description, canonical, Open Graph,
 *        JSON-LD e um <noscript> com o conteúdo daquela página.
 *        O Netlify serve /about a partir de about.html (antes da regra SPA do _redirects).
 *   sitemap.xml  (com lastmod de cada página, vindo do JSON)
 *   llms.txt     (resumo do site em texto puro para assistentes de IA)
 *
 * Sem dependências: só Node.
 */
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const BUILD = path.join(RAIZ, "build");
const C = JSON.parse(fs.readFileSync(path.join(RAIZ, "src", "info", "conteudo.json"), "utf8"));
const SITE = C.site;
const ID_PESSOA = `${SITE}/#person`;

const esc = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const projetos = C.portfolio.filter((p) => !p.oculto);
const svc = C.services;

// --- conteúdo do <noscript> de cada rota (HTML semântico simples) -----------

function lista(itens) {
  return `<ul>${itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
}

function htmlProjetos() {
  return `<ul>${projetos
    .map(
      (p) =>
        `<li><strong>${esc(p.title)}</strong>: ${esc(p.description)} (${esc(p.stack.join(", "))})${
          p.live ? ` <a href="${esc(p.live)}">acessar</a>` : p.encerrado ? ` (site fora do ar)` : ""
        }</li>`
    )
    .join("")}</ul>`;
}

const navegacao = `<p><a href="/">Início</a> · <a href="/about">Sobre</a> · <a href="/portfolio">Portfólio</a> · <a href="/gestor-de-trafego">Gestor de tráfego</a> · <a href="/programador">Programador</a> · <a href="${esc(C.blogUrl)}">Blog</a> · <a href="${esc(C.servicosUrl)}">Serviços</a></p>`;
const contato = `<h2>Contato</h2><p>E-mail: <a href="mailto:${esc(C.email)}">${esc(C.email)}</a> · WhatsApp: <a href="https://wa.me/${C.whatsapp}">${esc(C.telefoneExibicao)}</a> · <a href="${esc(C.linkedinUrl)}">LinkedIn</a> · <a href="${esc(C.githubUrl)}">GitHub</a></p>`;

function htmlServico(s) {
  const partes = [
    `<h1>${esc(C.fullName)} — ${esc(s.eyebrow)}</h1>`,
    `<p><strong>${esc(s.title)}</strong></p>`,
    `<p>${esc(s.lead)}</p>`,
    ...s.sections.map((sec) => `<h2>${esc(sec.title)}</h2>${lista(sec.items)}`),
  ];
  if (s.results) {
    partes.push(
      `<h2>${esc(s.results.title)}</h2><ul>${s.results.items
        .map((r) => `<li>${esc(r.segment)}: ${esc(r.value)} (${esc(r.detail)})</li>`)
        .join("")}</ul><p>${esc(s.results.note)}</p>`
    );
  }
  if (s.certifications) partes.push(`<h2>Certificações</h2>${lista(s.certifications)}`);
  if (s.projects) {
    partes.push(
      `<h2>${esc(s.projects.title)}</h2><ul>${s.projects.items
        .map((p) => `<li><strong>${esc(p.name)}</strong>: ${esc(p.detail)}${p.href ? ` <a href="${esc(p.href)}">acessar</a>` : ""}</li>`)
        .join("")}</ul>`
    );
  }
  return partes.join("");
}

// --- rotas ------------------------------------------------------------------

const breadcrumb = (nome, caminho) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: nome, item: `${SITE}${caminho}` },
  ],
});

const itemList = {
  "@type": "ItemList",
  name: "Projetos do portfólio",
  itemListElement: projetos.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.title,
    description: p.description,
    url: p.live || `${SITE}/portfolio`,
  })),
};

function servicoSchema(s, tipo) {
  return {
    "@type": "Service",
    "@id": `${SITE}${s.path}#servico`,
    name: s.eyebrow,
    serviceType: tipo,
    description: s.seoDescription,
    provider: { "@id": ID_PESSOA },
    areaServed: [
      { "@type": "State", name: "Rio Grande do Sul" },
      { "@type": "Country", name: "Brasil" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE}${s.path}`,
      availableLanguage: "Portuguese",
    },
  };
}

const ROTAS = [
  {
    arquivo: "index.html",
    caminho: "/",
    titulo: C.paginas.inicio.titulo,
    descricao: C.paginas.inicio.descricao,
    atualizado: C.paginas.inicio.atualizado,
    prioridade: "1.0",
    jsonld: [itemList],
    noscript: `<h1>${esc(C.fullName)}</h1><h2>${esc(C.position)} · ${esc(C.location)}</h2><p>${esc(C.lead)} ${esc(
      C.tagline
    )}</p>${lista(C.miniBio.map((m) => m.text))}<h2>Projetos</h2>${htmlProjetos()}`,
  },
  {
    arquivo: "about.html",
    caminho: "/about",
    titulo: C.paginas.sobre.titulo,
    descricao: C.paginas.sobre.descricao,
    atualizado: C.paginas.sobre.atualizado,
    prioridade: "0.8",
    jsonld: [
      { "@type": "AboutPage", "@id": `${SITE}/about#pagina`, url: `${SITE}/about`, name: C.paginas.sobre.titulo, mainEntity: { "@id": ID_PESSOA } },
      breadcrumb("Sobre", "/about"),
    ],
    noscript: `<h1>Sobre ${esc(C.fullName)}</h1>${C.bio.map((p) => `<p>${esc(p)}</p>`).join("")}<h2>Como eu trabalho</h2><ul>${C.pillars
      .map((p) => `<li><strong>${esc(p.title)}</strong>: ${esc(p.text)}</li>`)
      .join("")}</ul>${C.skills.map((g) => `<h2>${esc(g.title)}</h2>${lista(g.items)}`).join("")}<p>${esc(C.hobbies)}</p>`,
  },
  {
    arquivo: "portfolio.html",
    caminho: "/portfolio",
    titulo: C.paginas.portfolio.titulo,
    descricao: C.paginas.portfolio.descricao,
    atualizado: C.paginas.portfolio.atualizado,
    prioridade: "0.9",
    jsonld: [itemList, breadcrumb("Portfólio", "/portfolio")],
    noscript: `<h1>Projetos de ${esc(C.fullName)}</h1><p>Sites, sistemas e dashboards que fiz para clientes e para mim.</p>${htmlProjetos()}`,
  },
  {
    arquivo: "gestor-de-trafego.html",
    caminho: svc.trafego.path,
    titulo: svc.trafego.seoTitle,
    descricao: svc.trafego.seoDescription,
    atualizado: svc.trafego.atualizado,
    prioridade: "0.9",
    jsonld: [servicoSchema(svc.trafego, "Gestão de tráfego pago")],
    noscript: htmlServico(svc.trafego),
  },
  {
    arquivo: "programador.html",
    caminho: svc.programador.path,
    titulo: svc.programador.seoTitle,
    descricao: svc.programador.seoDescription,
    atualizado: svc.programador.atualizado,
    prioridade: "0.9",
    jsonld: [servicoSchema(svc.programador, "Desenvolvimento web")],
    noscript: htmlServico(svc.programador),
  },
];

// --- aplica em cada rota ----------------------------------------------------

function trocarAtributo(html, seletor, valor, nomeArquivo) {
  // seletor: 'name="description"' ou 'property="og:title"'; troca o content="..."
  const re = new RegExp(`(<meta[^>]*${seletor}[^>]*content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`${nomeArquivo}: meta ${seletor} não encontrada`);
  return html.replace(re, `$1${esc(valor)}$2`);
}

const base = fs.readFileSync(path.join(BUILD, "index.html"), "utf8");
const NOSCRIPT_PADRAO = /<noscript>Ative o JavaScript para ver este site\.<\/noscript>/;
if (!NOSCRIPT_PADRAO.test(base)) throw new Error("build/index.html: <noscript> padrão não encontrado (mudou o public/index.html?)");

for (const r of ROTAS) {
  const url = r.caminho === "/" ? `${SITE}/` : `${SITE}${r.caminho}`;
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${esc(r.titulo)}</title>`);
  html = trocarAtributo(html, 'name="description"', r.descricao, r.arquivo);
  html = trocarAtributo(html, 'property="og:url"', url, r.arquivo);
  html = trocarAtributo(html, 'property="og:title"', r.titulo, r.arquivo);
  html = trocarAtributo(html, 'property="og:description"', r.descricao, r.arquivo);
  html = trocarAtributo(html, 'name="twitter:title"', r.titulo, r.arquivo);
  html = trocarAtributo(html, 'name="twitter:description"', r.descricao, r.arquivo);
  html = html.replace(/(<link[^>]*rel="canonical"[^>]*href=")[^"]*(")/, `$1${url}$2`);
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": r.jsonld }).replace(/</g, "\\u003c");
  html = html.replace("</head>", `<script type="application/ld+json">${ld}</script></head>`);
  html = html.replace(NOSCRIPT_PADRAO, `<noscript>${navegacao}${r.noscript}${contato}</noscript>`);
  fs.writeFileSync(path.join(BUILD, r.arquivo), html);
}

// --- sitemap.xml ------------------------------------------------------------

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROTAS.map(
  (r) => `  <url>
    <loc>${r.caminho === "/" ? `${SITE}/` : `${SITE}${r.caminho}`}</loc>
    <lastmod>${r.atualizado}</lastmod>
    <priority>${r.prioridade}</priority>
  </url>`
).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(BUILD, "sitemap.xml"), sitemap);

// --- llms.txt ---------------------------------------------------------------

const t = svc.trafego;
const p = svc.programador;
const llms = `# ${C.fullName}

> ${C.position}, em ${C.location} (noroeste do Rio Grande do Sul), com atendimento remoto em todo o Brasil. ${C.lead} ${C.tagline}

- Nome: ${C.fullName} (também conhecido como marck0101)
- Atuação: gestão de tráfego pago (Google Ads, Meta Ads, LinkedIn Ads), tracking e dashboards; desenvolvimento web full stack (React, Node.js, TypeScript)
- Local: ${C.location}, Brasil · trabalho remoto
- E-mail: ${C.email}
- WhatsApp: ${C.telefoneExibicao} (https://wa.me/${C.whatsapp})
- LinkedIn: ${C.linkedinUrl}
- GitHub: ${C.githubUrl}
- Blog: ${C.blogUrl}
- Serviços: ${C.servicosUrl} (catálogo de serviços de tráfego pago e mensuração para negócios locais, com escopo e formato de cada oferta)

## Como trabalho

${C.pillars.map((x) => `- ${x.title}: ${x.text}`).join("\n")}

## Gestor de tráfego (${SITE}${t.path})

${t.lead}

${t.sections.map((s) => `### ${s.title}\n\n${s.items.map((i) => `- ${i}`).join("\n")}`).join("\n\n")}

### ${t.results.title}

${t.results.items.map((r) => `- ${r.segment}: ${r.value} (${r.detail})`).join("\n")}

${t.results.note}

### Certificações

${t.certifications.map((c) => `- ${c}`).join("\n")}

## Programador full stack (${SITE}${p.path})

${p.lead}

${p.sections.map((s) => `### ${s.title}\n\n${s.items.map((i) => `- ${i}`).join("\n")}`).join("\n\n")}

## Projetos (${SITE}/portfolio)

${projetos.map((x) => `- ${x.live ? `[${x.title}](${x.live})` : x.title}${x.encerrado ? " (site fora do ar)" : ""}: ${x.description} Stack: ${x.stack.join(", ")}.`).join("\n")}

## Sobre (${SITE}/about)

${C.bio.join("\n\n")}

## Páginas

- [Início](${SITE}/)
- [Sobre](${SITE}/about)
- [Portfólio](${SITE}/portfolio)
- [Gestor de tráfego](${SITE}${t.path})
- [Programador full stack](${SITE}${p.path})
- [Blog](${C.blogUrl})
- [Serviços para negócios locais (catálogo)](${C.servicosUrl})
`;
fs.writeFileSync(path.join(BUILD, "llms.txt"), llms);

console.log(`pós-build: ${ROTAS.map((r) => r.arquivo).join(", ")}, sitemap.xml, llms.txt`);
