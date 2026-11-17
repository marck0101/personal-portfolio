import React from "react";
import { Link } from "react-router-dom";
import Style from "./BioItem.module.scss";

// Item numerado da lista da Home. Número em mono (BRAND.md: números sempre em mono).
// Rota interna ("/...") → <Link>; externa → <a>; sem link → <span>.
const BioItem = React.memo(function BioItem({ index, link, text }) {
  const isInternal = link?.startsWith("/");
  const isMail = link?.startsWith("mailto:");
  const Wrapper = !link ? "span" : isInternal ? Link : "a";
  const linkProps = !link
    ? {}
    : isInternal
    ? { to: link }
    : isMail
    ? { href: link }
    : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper {...linkProps} className={Style.item}>
      <span className={`dado ${Style.num}`} aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <span className={Style.texto}>{text}</span>
      {link && (
        <span className={Style.seta} aria-hidden="true">
          {isInternal ? "→" : "↗"}
        </span>
      )}
    </Wrapper>
  );
});

export default BioItem;
