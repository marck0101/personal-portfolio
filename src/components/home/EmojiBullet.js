import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const EmojiBullet = React.memo(function EmojiBullet({ link, emoji, text }) {
  // Rota interna ("/...") → <Link>; externa → <a target="_blank">;
  // sem link → <span> (<a> sem href não é rastreável e conta contra o SEO).
  const isInternal = link?.startsWith("/");
  const Wrapper = !link ? "span" : isInternal ? Link : "a";
  const linkProps = !link
    ? {}
    : isInternal
    ? { to: link }
    : { href: link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper {...linkProps} style={{ fontSize: "1rem", lineHeight: "1.5" }}>
      <Box
        component={"span"}
        aria-hidden="true"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>
      {text}
    </Wrapper>
  );
});

export default EmojiBullet;
