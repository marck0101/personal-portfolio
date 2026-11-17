# marck0101 · guia de marca (v1 · nov 2026)

> Fonte da verdade visual: Figma "marck0101 — Brand Identity"
> https://www.figma.com/design/paJ2YUnmfK149azOqSpPIQ
> - Página 01 Estratégia → posicionamento, pilares, voz
> - Página 02 Identidade → logo, paleta, tipografia, elementos gráficos, **fig. 05 Temas do blog**
> - Página 03 Aplicações → banner LinkedIn, miniatura YouTube, miniatura blog, post LinkedIn
>
> Este arquivo é o resumo em texto. Ao mudar algo aqui, atualize o Figma (e vice-versa).
> Tokens em código: `styles/marck0101-temas.css` (ajuste o caminho ao projeto).

## 1. Posicionamento

Para pequenas e médias empresas que já investem em tráfego e conteúdo, mas não sabem o que
realmente traz resultado, eu sou o profissional de marketing que também é desenvolvedor. Junto
tráfego pago, SEO/GEO e tracking com dados e automação, para que cada real investido seja medido.
Sem pacote fechado e sem método mágico: **o básico, bem feito e medido.**

- **Quem atendo:** PMEs que vendem online (Brasil, foco inicial no noroeste do RS); agências e times
  que precisam de tracking, dashboards e automação.
- **Contra o quê:** assessorias de volume, método padrão para todo mundo, relatório que ninguém entende.
- **Assinatura principal:** "O básico, bem feito e medido." · alternativas: "Marketing medido.", "Dado antes de opinião."

## 2. Pilares

1. **Medir antes de escalar:** tracking configurado antes do primeiro real em mídia.
2. **O básico bem feito:** site rápido, pixel certo, campanha bem estruturada.
3. **Engenharia no marketing:** automação, dashboards e benchmarks feitos com código.
4. **Números na mesa:** mostrar o que funcionou e o que não funcionou, com a fonte.

## 3. Personalidade (é / não é)

Técnico, não hermético · Direto, não seco · Didático, não professoral · Honesto, não pessimista ·
Do interior, não provinciano.

## 4. Voz e texto

**Regras**
- Primeira pessoa, frases curtas.
- Um número real por peça, sempre com fonte e período. Se não tenho o número, digo que não tenho.
- Mostrar o processo: print, passo a passo, o erro que cometi.
- Termo técnico pode, desde que explicado na primeira vez (CPA, GEO, UTM).

**Escrevo assim**
- "Em 60 dias o custo por lead caiu. Explico o que mudei e quanto custou."
- "Antes de subir a campanha, conferi se o pixel contava certo. Não contava."
- "Ainda não sei. Vou testar e te mostro o número."

**Evito (frase de template)**
- "Potencialize seus resultados", "estratégias inovadoras", "desbloqueie", "no mundo de hoje",
  "alavancar", "transforme seu negócio", excesso de emoji, headline genérica do tipo
  "Marketing que converte. Conteúdo que cresce."

## 5. Identidade visual (tema padrão "Relatório de campo")

**Logo:** símbolo "m" (Fraunces) em quadrado tinta + ponto de dado tijolo, ao lado de `marck0101`
em IBM Plex Mono Medium. Subtítulo opcional: "Marcos Henrique · marketing medido".
Respiro = altura do símbolo. Mínimo: símbolo com 24 px. Não distorcer, sem sombra, ponto sempre tijolo.

**Paleta** (proporção de uso: 60 papel · 25 tinta · 10 mate · 5 tijolo)

| token | hex | uso |
|---|---|---|
| papel | #F4F1EA | fundo principal |
| papel-escuro | #E9E4D8 | cartões, divisões |
| tinta | #1C2733 | texto, fundos fortes |
| tinta-suave | #3A4756 | texto secundário |
| tijolo | #D9542B | dado principal, destaque, botão |
| tijolo-escuro | #A93E1C | hover |
| mate | #7A8B6F | gráficos, apoio |
| mate-claro | #C9D2BF | apoio em fundo escuro |
| nota | #8A8578 | legendas, metadados |

**Tipografia** (Google Fonts)

| estilo | fonte | tamanho/altura |
|---|---|---|
| Display | Fraunces SemiBold | 64/72 |
| Título 1 | Fraunces SemiBold | 40/48 |
| Título 2 | Fraunces SemiBold | 28/36 |
| Título 3 | IBM Plex Sans Medium | 20/28 |
| Corpo | IBM Plex Sans Regular | 17/28 |
| Corpo pequeno | IBM Plex Sans Regular | 14/22 |
| Dado | IBM Plex Mono Medium | 14/20 |
| Rótulo | IBM Plex Mono Regular | 12/16, +2% |

**Elementos gráficos**
- Toda peça parece página de relatório: figura numerada ("fig. 01 · …"), número em destaque, fonte citada.
- Gráficos simples: barras em mate, a barra que importa em tijolo.
- Fotos reais (minhas e do trabalho). Sem banco de imagem, sem ilustração neon de IA.

## 6. Contrato de temas do blog

A marca é o esqueleto; o tema é a roupa. Temas: `relatorio` (padrão claro), `relatorio-escuro`
(padrão escuro), `jornal`, `bbs`.

**Nunca muda em nenhum tema**
- Grafia "marck0101" (o tema pode fantasiar o logo, nunca trocar o texto).
- Estrutura e componentes: menu, card, "Neste post", compartilhar, newsletter, rodapé.
- Todo texto e microcopy (tema não reescreve conteúdo).
- Miniaturas dos posts no padrão Relatório de campo (são conteúdo, não roupa).
- Números, datas e rótulos sempre em fonte mono.
- Um único acento por tema, só para link, dado principal e botão (≤10% da tela).
- Contraste AA: corpo ≥ 4,5:1; acento sobre fundo ≥ 3:1.
- Símbolo "m" com ponto tijolo no favicon e no rodapé.

**Pode mudar (somente via tokens em `[data-theme]`)**
- Cores: `--fundo`, `--superficie`, `--superficie-2`, `--texto`, `--texto-suave`, `--texto-nota`,
  `--linha`, `--destaque`, `--destaque-hover`, `--sobre-destaque`, `--dado-grafico`.
- Fontes: `--fonte-titulo`, `--fonte-texto`, `--peso-titulo` (`--fonte-dado` é sempre mono).
- Acabamento: `--raio`, `--borda`, `--divisoria`, `--caixa-rotulo`, `--faixa-tema`.

**Checklist para criar um tema novo**
1. Duplicar um bloco `[data-theme]` e mudar só os tokens.
2. Testar contraste (corpo ≥ 4,5:1, acento ≥ 3:1).
3. Conferir 4 telas: home, post, card de post, newsletter.
4. Ver se as miniaturas continuam legíveis no fundo novo.
5. Logo: mesmo texto; tratamento livre.
6. Registrar no Figma (fig. 05) e neste arquivo.
