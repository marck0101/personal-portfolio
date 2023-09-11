/* eslint-disable no-unused-vars */
import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { BsCodeSlash } from "react-icons/bs";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
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
  );
}
