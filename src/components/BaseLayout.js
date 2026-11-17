import React, { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import CookieBanner from "./cookies/CookieBanner";
import PrivacyPolicy from "./privacy/PrivacyPolicy";
import NotFound from "./NotFound";
import ServicePage from "./services/ServicePage";
import { Route, Routes } from "react-router-dom";
import { info } from "../info/Info";
import { aplicarTema, getEscuro, getEstilo, setEscuro, setEstilo } from "../utils/tema";

// Estilo (atual/jornal/terminal) + claro/escuro → data-theme (utils/tema.js).
// O index.html já aplica antes da pintura; aqui mantemos em sincronia.
export default function BaseLayout() {
  const [estilo, setEstiloState] = useState(getEstilo);
  const [darkMode, setDarkMode] = useState(getEscuro);

  useEffect(() => {
    aplicarTema(estilo, darkMode);
  }, [estilo, darkMode]);

  function handleToggleDarkMode() {
    const next = !darkMode;
    setEscuro(next);
    setDarkMode(next);
  }

  function handleEstilo(next) {
    window.dataLayer?.push({ event: "skin_toggle", skin: next, from: estilo });
    setEstilo(next);
    setEstiloState(next);
  }

  return (
    <div className={Style.shell}>
      <Navbar
        darkMode={darkMode}
        handleClick={handleToggleDarkMode}
        estilo={estilo}
        onEstilo={handleEstilo}
      />
      <div className={Style.content}>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/portfolio"} element={<Portfolio />} />
          <Route path={info.services.trafego.path} element={<ServicePage service={info.services.trafego} />} />
          <Route path={info.services.programador.path} element={<ServicePage service={info.services.programador} />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <CookieBanner />
      <PrivacyPolicy />
    </div>
  );
}
