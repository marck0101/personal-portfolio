import React from "react";
import Style from "./Home.module.scss";
import BioItem from "./BioItem";
import SocialIcon from "./SocialIcon";
import { info } from "../../info/Info";
import { Helmet } from "react-helmet-async";
import ServiceLinks from "../services/ServiceLinks";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Marcos Henrique Corrêa | Programador Full Stack e Gestor de Tráfego</title>
        <meta name="description" content="Marcos Henrique Corrêa, programador full stack e gestor de tráfego (Google Ads, Meta Ads e LinkedIn Ads) em Santo Cristo, RS. React, Node.js, campanhas e rastreamento. Veja portfólio e blog." />
        <link rel="canonical" href="https://marck0101.com.br/" />
      </Helmet>
      <main className={`pagina ${Style.hero}`}>
        <figure className={Style.foto}>
          <img
            src={info.photo}
            alt={info.fullName}
            width="600"
            height="600"
            fetchpriority="high"
          />
          <figcaption className="rotulo">
            fig. 01 · {info.fullName}, {info.location}
          </figcaption>
        </figure>

        <div className={Style.texto}>
          <p className="rotulo">marketing medido · {info.location}</p>
          <h1 className={Style.nome}>{info.fullName}</h1>
          <h2 className={Style.cargo}>{info.position}.</h2>
          <p className={Style.lead}>
            {info.lead} <strong>{info.tagline}</strong>
          </p>

          <ol className={Style.lista}>
            {info.miniBio.map((bio, index) => (
              <li key={bio.link}>
                <BioItem index={index + 1} text={bio.text} link={bio.link} />
              </li>
            ))}
          </ol>

          <div className={Style.acoes}>
            <ServiceLinks align={"start"} />
            <div className={Style.sociais}>
              {info.socials.map((social) => (
                <SocialIcon
                  key={social.label}
                  link={social.link}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
