import React from "react";
import { Box } from "@mui/material";
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
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        minHeight={"calc(100vh - 175px)"}
        gap={"1rem"}
      >
        <h1>Página não encontrada</h1>
        <p>
          Volte para a <Link to="/">página inicial</Link> ou veja meus{" "}
          <Link to="/portfolio">projetos</Link>.
        </p>
      </Box>
    </>
  );
}
