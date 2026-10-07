import React from "react";

// <h1> acessível a leitores de tela e buscadores, sem alterar o layout das páginas
// que não têm título visível (About e Portfolio).
const style = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function SrOnlyHeading({ children }) {
  return <h1 style={style}>{children}</h1>;
}
