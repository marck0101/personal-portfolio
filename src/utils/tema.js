// Estilo + tema, com as mesmas regras do blog (blog-front/src/utils/skin.js):
// - Estilos: "atual" | "jornal" | "terminal" (localStorage "skin", mesma chave do blog).
// - Fiéis à época: o Jornal é sempre claro e o Terminal sempre escuro.
//   O claro/escuro (localStorage "darkMode") só vale no visual atual.
// - Cada combinação vira um tema de src/styles/marck0101-temas.css no data-theme do <html>.
// O public/index.html repete esta regra antes da pintura, para a página não piscar.

export const ESTILOS = ["atual", "jornal", "terminal"];

export function getEstilo() {
  try {
    const salvo = localStorage.getItem("skin");
    return salvo === "jornal" || salvo === "terminal" ? salvo : "atual";
  } catch (e) {
    return "atual";
  }
}

export function setEstilo(estilo) {
  try {
    if (estilo === "atual") localStorage.removeItem("skin");
    else localStorage.setItem("skin", estilo);
  } catch (e) {
    /* sem localStorage: vale só nesta visita */
  }
}

// Sem preferência salva, segue o sistema
export function getEscuro() {
  try {
    const salvo = localStorage.getItem("darkMode");
    if (salvo !== null) return salvo === "true";
  } catch (e) {
    /* segue o sistema */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function setEscuro(escuro) {
  try {
    localStorage.setItem("darkMode", `${escuro}`);
  } catch (e) {
    /* vale só nesta visita */
  }
}

export function temaDe(estilo, escuro) {
  if (estilo === "jornal") return "jornal";
  if (estilo === "terminal") return "bbs";
  return escuro ? "relatorio-escuro" : "relatorio";
}

export function aplicarTema(estilo, escuro) {
  const tema = temaDe(estilo, escuro);
  const html = document.documentElement;
  html.setAttribute("data-theme", tema);
  html.style.colorScheme = tema === "bbs" || tema === "relatorio-escuro" ? "dark" : "light";
}
