import React from "react";
import { Link } from "react-router-dom";
import Style from "./Logo.module.scss";

// Logo marck0101 (BRAND.md §5): símbolo "m" em Fraunces num quadrado tinta,
// ponto de dado sempre tijolo, e "marck0101" em IBM Plex Mono Medium.
// O quadrado usa --texto e o "m" usa --fundo, então o símbolo inverte sozinho no tema escuro.
export function Simbolo({ size = 32 }) {
  return (
    <span className={`skin-simbolo ${Style.simbolo}`} style={{ "--tam": `${size}px` }} aria-hidden="true">
      <span className={Style.m}>m</span>
      <span className={Style.ponto} />
    </span>
  );
}

export default function Logo({ subtitle = false }) {
  return (
    <Link to="/" className={`skin-logo ${Style.logo}`} aria-label="marck0101, página inicial">
      <Simbolo />
      <span className={Style.textos}>
        <span className={`skin-nome ${Style.nome}`}>marck0101</span>
        {subtitle && <span className={Style.sub}>Marcos Henrique · marketing medido</span>}
      </span>
    </Link>
  );
}
