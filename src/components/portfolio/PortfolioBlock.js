import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { FaGlobe, FaCode, FaRegImage } from "react-icons/fa";
import Style from "./PortfolioBlock.module.scss";

function PortfolioBlock(props) {
  const { image, live, source, title, description } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {image ? (
        <Box className={Style.imageContainer}>
          <Box
            component={"img"}
            src={image}
            alt={`mockup do projeto ${title}`}
            className={Style.image}
            loading={"lazy"}
          />
        </Box>
      ) : (
        <Box className={Style.placeholder}>
          <FaRegImage size={48} />
          <span>{title}</span>
        </Box>
      )}
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      {description && (
        <p className={Style.description}>{description}</p>
      )}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        {live && (
          <Box p={1} border={"2px solid currentColor"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Demo"} icon={<FaGlobe />} />
          </Box>
        )}
        {source && (
          <Box p={1} border={"2px solid currentColor"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={<FaCode />} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
