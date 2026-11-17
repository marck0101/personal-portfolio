import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Navbar.module.scss";
import Logo from "./Logo";
import Toggler from "./home/Toggler";
import SkinToggle from "./SkinToggle";
import { info } from "../info/Info";

const links = [
  { name: "Início", to: "/" },
  { name: "Sobre", to: "/about" },
  { name: "Portfólio", to: "/portfolio" },
];

// skin-header, skin-nav e skin-link: ganchos dos estilos de época (styles/temas-epoca.scss)
export default function Navbar({ darkMode, handleClick, estilo, onEstilo }) {
  return (
    <header className={`skin-header ${Style.header}`}>
      <nav className={Style.nav} aria-label="Principal">
        <Logo />
        <ul className={`skin-nav ${Style.links}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `skin-link ${Style.link}${isActive ? ` ${Style.active}` : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={info.blogUrl} className={`skin-link ${Style.link}`}>
              Blog
            </a>
          </li>
          <li className={Style.botoes}>
            <SkinToggle estilo={estilo} onChange={onEstilo} />
            {/* Jornal e Terminal têm a cor da época: o claro/escuro só aparece no visual atual */}
            {estilo === "atual" && <Toggler darkMode={darkMode} handleClick={handleClick} />}
          </li>
        </ul>
      </nav>
    </header>
  );
}
