import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaCode } from "react-icons/fa";
import { info } from "../../info/Info";
import Style from "./ServiceLinks.module.scss";

// Botões de acesso às páginas /gestor-de-trafego e /programador (Home, About e Portfolio).
export default function ServiceLinks({ align = "center", title }) {
  return (
    <nav aria-label="Áreas de atuação" className={`${Style.wrap} ${Style[align]}`}>
      {title && <p className={Style.title}>{title}</p>}
      <div className={Style.buttons}>
        <Link to={info.services.trafego.path} className={Style.pill}>
          <FaChartLine aria-hidden="true" /> Gestor de Tráfego
        </Link>
        <Link to={info.services.programador.path} className={Style.pill}>
          <FaCode aria-hidden="true" /> Programador Full Stack
        </Link>
      </div>
    </nav>
  );
}
