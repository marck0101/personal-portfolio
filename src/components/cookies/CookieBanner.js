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
          Uso cookies para medir as visitas deste site (Google Analytics,
          Microsoft Clarity e Meta Pixel). Você escolhe: aceitar todos ou só os
          essenciais para o site funcionar.{" "}
          <button className={Style.policyLink} aria-label="Abrir política de privacidade" onClick={() => document.getElementById("privacy-policy-modal").showModal()}>
            Política de Privacidade
          </button>
          .
        </p>
        <div className={Style.actions}>
          <button className="btn-secundario" aria-label="Aceitar apenas cookies essenciais" onClick={acceptEssential}>
            Só essenciais
          </button>
          <button className="btn-primario" aria-label="Aceitar todos os cookies" onClick={acceptAll}>
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
