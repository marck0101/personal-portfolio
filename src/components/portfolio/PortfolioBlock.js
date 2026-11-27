import React from "react";
import { FaRegImage } from "react-icons/fa";
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock({ index, image, live, source, encerrado, title, description, stack = [] }) {
  const fig = `fig. ${String(index).padStart(2, "0")}`;

  return (
    <article className={Style.card}>
      {image ? (
        <div className={Style.imageContainer}>
          <img
            src={image}
            alt={`Tela do projeto ${title}`}
            className={Style.image}
            loading="lazy"
            width="559"
            height="447"
          />
        </div>
      ) : (
        <div className={Style.placeholder}>
          <FaRegImage size={32} aria-hidden="true" />
          <span className="rotulo">imagem em breve</span>
        </div>
      )}

      <div className={Style.corpo}>
        <p className="rotulo">
          {fig}
          {stack.length > 0 && ` · ${stack.join(" · ")}`}
        </p>
        <h2 className={Style.titulo}>{title}</h2>
        {description && <p className={Style.description}>{description}</p>}

        <div className={Style.links}>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Ver o projeto no ar ↗
            </a>
          )}
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer">
              Ver o código ↗
            </a>
          )}
          {encerrado && <span className={Style.semLink}>{encerrado}</span>}
          {!live && !source && !encerrado && <span className={Style.semLink}>Projeto interno, sem link público.</span>}
        </div>
      </div>
    </article>
  );
}

export default PortfolioBlock;
