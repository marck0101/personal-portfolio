import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../info/Info";
import { BsCodeSlash } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Style from "./Portfolio.module.scss";
import SrOnlyHeading from "../SrOnlyHeading";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfólio | Marcos Henrique Corrêa — Desenvolvedor Full Stack</title>
        <meta name="description" content="Projetos de Marcos Henrique Corrêa: sites institucionais, dashboard de marketing integrado (Meta Ads, Google Ads, LinkedIn), blog e apps React. Veja as demos ao vivo." />
        <link rel="canonical" href="https://marck0101.com.br/portfolio" />
      </Helmet>
      <SrOnlyHeading>Portfólio de projetos de Marcos Henrique Corrêa</SrOnlyHeading>
      <div className={Style.grid}>
        {info.portfolio.map((project, index) => (
          <div key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
        <div className={Style.wip}>
          <h2>Ainda em desenvolvimento!</h2>
          <BsCodeSlash size={30} />
        </div>
      </div>
    </>
  );
}
