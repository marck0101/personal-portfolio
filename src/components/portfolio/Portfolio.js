/* eslint-disable no-unused-vars */
import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { BsCodeSlash } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfólio | Marcos Corrêa — Desenvolvedor Full Stack</title>
        <meta name="description" content="Projetos desenvolvidos por Marcos Corrêa: JB Imobiliária, VDR-Dashboard, sites React e mais. Veja o código e as demos ao vivo." />
        <link rel="canonical" href="https://marck0101.com.br/portfolio" />
      </Helmet>
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
        <div>
          <h2>Ainda em desenvolvimento!</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BsCodeSlash size={30} />
          </div>
        </div>
      </Grid>
    </Box>
    </>
  );
}
