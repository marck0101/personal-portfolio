import React, { useState, useEffect } from "react";
import Style from "./CookieBanner.module.scss";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("cookieConsent", "all");
    setVisible(false);
    if (typeof window.enableAnalytics === "function") {
      window.enableAnalytics();
    }
  }

  function acceptEssential() {
    localStorage.setItem("cookieConsent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={Style.banner} role="dialog" aria-label="Aviso de cookies">
      <div className={Style.content}>
        <p className={Style.text}>
          Este site usa cookies para melhorar a experiência e analisar o tráfego
          (Google Analytics, Microsoft Clarity e Meta Pixel). Você pode aceitar
          todos ou apenas os essenciais para o funcionamento do site.{" "}
          <button className={Style.policyLink} aria-label="Abrir política de privacidade" onClick={() => document.getElementById("privacy-policy-modal").showModal()}>
            Política de Privacidade
          </button>
          .
        </p>
        <div className={Style.actions}>
          <button className={Style.btnEssential} aria-label="Aceitar apenas cookies essenciais" onClick={acceptEssential}>
            Só essenciais
          </button>
          <button className={Style.btnAccept} aria-label="Aceitar todos os cookies" onClick={acceptAll}>
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
