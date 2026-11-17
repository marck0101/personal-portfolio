import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Style from "./Toggler.module.scss";

// Alterna entre os temas "relatorio" (claro) e "relatorio-escuro" da marca.
export default function Toggler({ darkMode, handleClick }) {
  const label = darkMode ? "Usar tema claro" : "Usar tema escuro";
  return (
    <button
      type="button"
      className={Style.toggler}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </button>
  );
}
