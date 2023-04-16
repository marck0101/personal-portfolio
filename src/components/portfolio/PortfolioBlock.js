import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
// import { BsCodeSlash } from "react-icons/bs";

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink
            link={live}
            title={"((o)) Live Demo"}
            icon={"fa fa-safari"}
          />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={`</> Source Code`} icon={"fa fa-code"} />
          {/* <BsCodeSlash size={30} /> */}
        </Box>
      </Box>
    </Box>
    // <BsCodeSlash size={30} />
  );
}

export default PortfolioBlock;
