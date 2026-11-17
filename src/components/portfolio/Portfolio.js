import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../info/Info";
import { Helmet } from "react-helmet-async";
import Style from "./Portfolio.module.scss";
import ServiceLinks from "../services/ServiceLinks";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>{info.paginas.portfolio.titulo}</title>
        <meta name="description" content={info.paginas.portfolio.descricao} />
        <link rel="canonical" href="https://marck0101.com.br/portfolio" />
      </Helmet>
      <main className="pagina">
        <header className="cabecalho">
          <p className="rotulo">portfólio · {info.portfolio.length} projetos</p>
          <h1>Projetos de {info.fullName}</h1>
          <p className="apoio">
            Sites, sistemas e dashboards que fiz para clientes e para mim. Onde o projeto está no ar, o link leva até ele.
          </p>
        </header>

        <div className={Style.grid}>
          {info.portfolio.map((project, index) => (
            <PortfolioBlock key={project.title} index={index + 1} {...project} />
          ))}
        </div>
        <p className={`rotulo ${Style.wip}`}>Mais projetos em andamento.</p>

        <div className={Style.servicos}>
          <ServiceLinks title={"Minhas áreas de atuação"} />
        </div>
      </main>
    </>
  );
}
