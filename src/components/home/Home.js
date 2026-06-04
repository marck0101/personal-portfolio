import React from "react";
import Style from "./Home.module.scss";
import me from "../../img/self5A.webp";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Marcos Corrêa | Desenvolvedor Full Stack — Santo Cristo, RS</title>
        <meta name="description" content="Desenvolvedor Full Stack e Gestor de Mídia Paga em Santo Cristo, RS. Especialista em React, Node.js e marketing digital. Veja meu portfólio." />
        <link rel="canonical" href="https://marck0101.com.br" />
      </Helmet>
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"50%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Olá, me chamo
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>Sou {info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <li key={index}>
              <EmojiBullet emoji={bio.emoji} text={bio.text} link={bio.link} />
            </li>
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
    </>
  );
}
