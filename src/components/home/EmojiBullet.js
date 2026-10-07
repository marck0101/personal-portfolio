import React from "react";
import { Box } from "@mui/material";

const EmojiBullet = React.memo(function EmojiBullet({ link, emoji, text }) {
  // Sem link → <span>: <a> sem href não é rastreável e conta contra o SEO.
  const Wrapper = link ? "a" : "span";
  const linkProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...linkProps} style={{ fontSize: "1rem", lineHeight: "1.5" }}>
      <Box
        component={"span"}
        aria-label={text}
        role="img"
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
