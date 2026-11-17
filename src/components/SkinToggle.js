import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaNewspaper, FaPalette, FaTerminal } from "react-icons/fa";
import Style from "./SkinToggle.module.scss";

// Mesmas opções e rótulos do seletor do blog (blog-front/src/components/SkinToggle.jsx)
const OPTIONS = [
  { value: "atual", label: "Visual atual", icon: FaPalette },
  { value: "jornal", label: "Jornal", icon: FaNewspaper },
  { value: "terminal", label: "Terminal", icon: FaTerminal },
];

export default function SkinToggle({ estilo, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = OPTIONS.find((o) => o.value === estilo) || OPTIONS[0];
  const Icon = current.icon;

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(value) {
    setOpen(false);
    if (value !== estilo) onChange(value);
  }

  return (
    <div className={Style.wrap} ref={ref}>
      <button
        type="button"
        className={Style.botao}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Estilo do site: ${current.label}`}
        title="Estilo do site"
      >
        <Icon aria-hidden="true" />
      </button>

      {open && (
        <div className={`skin-menu ${Style.menu}`} role="group" aria-label="Estilo do site">
          {OPTIONS.map(({ value, label, icon: OptionIcon }) => (
            <button
              key={value}
              type="button"
              className={Style.opcao}
              onClick={() => choose(value)}
              aria-pressed={value === estilo}
            >
              <OptionIcon aria-hidden="true" />
              <span>{label}</span>
              {value === estilo && <FaCheck aria-hidden="true" className={Style.check} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
