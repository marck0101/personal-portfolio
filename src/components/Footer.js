import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.scss";
import Logo from "./Logo";
import { info } from "../info/Info";

function openPrivacy() {
  document.getElementById("privacy-policy-modal")?.showModal();
}

export default function Footer() {
  return (
    <footer className={`skin-footer ${Style.footer}`}>
      <div className={Style.inner}>
        <div className={Style.marca}>
          <Logo subtitle />
          <p className={Style.assinatura}>{info.tagline}</p>
        </div>

        <ul className={Style.links} aria-label="Links do rodapé">
          <li>
            <Link to={info.services.trafego.path}>Gestor de tráfego</Link>
          </li>
          <li>
            <Link to={info.services.programador.path}>Programador full stack</Link>
          </li>
          <li>
            <a href={info.blogUrl}>Blog do {info.fullName}</a>
          </li>
          <li>
            <a href={info.servicosUrl}>Serviços para negócios locais</a>
          </li>
          <li>
            <a href={info.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <button type="button" className={Style.linkBtn} onClick={openPrivacy}>
              Política de privacidade
            </button>
          </li>
        </ul>
      </div>
      <p className={`rotulo ${Style.copy}`}>
        © {new Date().getFullYear()} · {info.fullName} · {info.location}
      </p>
    </footer>
  );
}
