import React from "react";
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";
import { FaCircle } from "react-icons/fa";

function Terminal(props) {
  const { text } = props;

  return (
    <Box
      component={"section"}
      className={classNames(Style.terminal, Style.shadowed)}
      width={{ xs: "80%", md: "50%" }}
      borderRadius={"0.5rem"}
      mb={"4rem"}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >
        <FaCircle color={"#ff6057"} style={{ marginLeft: "0.5rem" }} />
        <FaCircle color={"#ffbd2e"} style={{ marginLeft: "0.5rem" }} />
        <FaCircle color={"#27c93f"} style={{ marginLeft: "0.5rem" }} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;
