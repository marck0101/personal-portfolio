import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// O Netlify responde 200 para qualquer rota (SPA); o noindex evita que caminhos
// inexistentes sejam indexados como páginas vazias (soft 404).
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Marcos Henrique Corrêa</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="pagina">
        <header className="cabecalho">
          <p className="rotulo">erro 404</p>
          <h1>Página não encontrada</h1>
          <p className="apoio">
            Esse endereço não existe por aqui. Volte para a <Link to="/">página inicial</Link> ou
            veja meus <Link to="/portfolio">projetos</Link>.
          </p>
        </header>
      </main>
    </>
  );
}
