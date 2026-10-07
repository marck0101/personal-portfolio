import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { info } from "../../info/Info";
import Style from "./ServicePage.module.scss";

const SITE = "https://marck0101.com.br";

function pageSchema(service) {
  const url = `${SITE}${service.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.seoTitle,
        description: service.seoDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: service.eyebrow, item: url },
        ],
      },
    ],
  };
}

const whatsapp = info.socials.find((s) => s.label === "whatsapp")?.link;
const linkedin = info.socials.find((s) => s.label === "LinkedIn")?.link;

export default function ServicePage({ service }) {
  return (
    <>
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
        <link rel="canonical" href={`${SITE}${service.path}`} />
        <script type="application/ld+json">{JSON.stringify(pageSchema(service))}</script>
      </Helmet>

      <Box component={"main"} className={Style.page}>
        <header className={Style.hero}>
          {/* O h1 traz nome + profissão: é exatamente o que se busca no Google */}
          <h1 className={Style.title}>
            <span style={{ background: info.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {info.fullName}
            </span>
            <span className={Style.titleRole}> — {service.eyebrow}</span>
          </h1>
          <p className={Style.tagline}>{service.title}</p>
          <p className={Style.lead}>{service.lead}</p>
        </header>

        <section className={Style.grid}>
          {service.sections.map((section) => (
            <div key={section.title} className={Style.card}>
              <h2 className={Style.cardTitle}>{section.title}</h2>
              <ul className={Style.list}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {service.results && (
          <section className={Style.block}>
            <h2 className={Style.blockTitle}>{service.results.title}</h2>
            <div className={Style.results}>
              {service.results.items.map((r) => (
                <div key={r.segment} className={Style.result}>
                  <span className={Style.resultSegment}>{r.segment}</span>
                  <strong className={Style.resultValue}>{r.value}</strong>
                  <span className={Style.resultDetail}>{r.detail}</span>
                </div>
              ))}
            </div>
            {service.results.note && <p className={Style.note}>{service.results.note}</p>}
          </section>
        )}

        {service.certifications && (
          <section className={Style.block}>
            <h2 className={Style.blockTitle}>Certificações</h2>
            <ul className={Style.list}>
              {service.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {service.projects && (
          <section className={Style.block}>
            <h2 className={Style.blockTitle}>{service.projects.title}</h2>
            <ul className={Style.projects}>
              {service.projects.items.map((p) => (
                <li key={p.name}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={Style.projectName}>
                      {p.name} ↗
                    </a>
                  ) : (
                    <span className={Style.projectName}>{p.name}</span>
                  )}
                  <span className={Style.resultDetail}>{p.detail}</span>
                </li>
              ))}
            </ul>
            <Link to={service.projects.more.to} className={Style.textLink}>
              {service.projects.more.text} →
            </Link>
          </section>
        )}

        <section className={`${Style.block} ${Style.cta}`}>
          <h2 className={Style.blockTitle}>Vamos conversar?</h2>
          <div className={Style.ctaButtons}>
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={Style.button}>
                <FaWhatsapp /> WhatsApp
              </a>
            )}
            <a href="mailto:marck.mhc@gmail.com" className={Style.button}>
              <FaEnvelope /> E-mail
            </a>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className={Style.button}>
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </div>
          <div className={Style.related}>
            <Link to={service.related.to} className={Style.textLink}>
              {service.related.text} →
            </Link>
            <a href={service.article.href} target="_blank" rel="noopener noreferrer" className={Style.textLink}>
              {service.article.text} ↗
            </a>
          </div>
        </section>
      </Box>
    </>
  );
}
