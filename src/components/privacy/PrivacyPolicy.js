import React from "react";
import Style from "./PrivacyPolicy.module.scss";

export default function PrivacyPolicy() {
  function close() {
    document.getElementById("privacy-policy-modal").close();
  }

  return (
    <dialog id="privacy-policy-modal" className={Style.modal}>
      <div className={Style.container}>
        <div className={Style.header}>
          <h2>Política de Privacidade</h2>
          <button className={Style.closeBtn} onClick={close} aria-label="Fechar">
            ✕
          </button>
        </div>

        <div className={Style.body}>
          <p><strong>Vigência:</strong> 3 de junho de 2026</p>
          <p><strong>Responsável:</strong> Marcos Henrique Corrêa — <a href="mailto:marck.mhc@gmail.com">marck.mhc@gmail.com</a></p>

          <h3>1. Quais dados são coletados</h3>
          <p>
            Este site coleta dados de navegação de forma anônima, como páginas visitadas,
            tempo de permanência, cliques e origem do acesso. Nenhum dado pessoal
            identificável (nome, e-mail, CPF) é coletado automaticamente.
          </p>

          <h3>2. Para que são usados</h3>
          <p>
            Os dados são usados exclusivamente para análise de desempenho do site e
            melhoria da experiência do usuário. Não são vendidos, compartilhados ou
            usados para publicidade direcionada sem consentimento.
          </p>

          <h3>3. Ferramentas utilizadas</h3>
          <ul>
            <li>
              <strong>Google Analytics 4 (via Google Tag Manager):</strong> analisa tráfego,
              sessões e comportamento de navegação. Dados retidos por 14 meses.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Política do Google
              </a>.
            </li>
            <li>
              <strong>Microsoft Clarity:</strong> gravação de sessões e mapas de calor
              para análise de usabilidade. Dados retidos por 13 meses.{" "}
              <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer">
                Política da Microsoft
              </a>.
            </li>
            <li>
              <strong>Meta Pixel (Facebook):</strong> mede conversões e permite remarketing
              no Facebook/Instagram. Dados retidos conforme política da Meta.{" "}
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
                Política da Meta
              </a>.
            </li>
          </ul>

          <h3>4. Cookies</h3>
          <p>
            Utilizamos cookies de sessão e de persistência para manter preferências
            (como modo escuro) e para as ferramentas de análise acima. Você pode
            recusar os cookies analíticos clicando em <em>"Só essenciais"</em> no banner
            de consentimento.
          </p>

          <h3>5. Seus direitos (LGPD — Lei 13.709/2018)</h3>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Solicitar acesso aos dados coletados</li>
            <li>Solicitar correção de dados incompletos ou desatualizados</li>
            <li>Solicitar exclusão dos dados</li>
            <li>Revogar consentimento a qualquer momento</li>
          </ul>
          <p>
            Para exercer qualquer direito, entre em contato:{" "}
            <a href="mailto:marck.mhc@gmail.com">marck.mhc@gmail.com</a>
          </p>

          <h3>6. Revogação de consentimento</h3>
          <p>
            Para revogar o consentimento dado anteriormente, limpe os dados do site
            nas configurações do seu navegador ou entre em contato pelo e-mail acima.
          </p>
        </div>

        <div className={Style.footer}>
          <button className={Style.closeBtn2} onClick={close}>
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}
