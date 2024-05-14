import React, { useState, useEffect } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "Sobre mim",
    to: "/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "Initials",
    to: "/",
    active: "home",
  },
  {
    name: "Portfolio",
    to: "/portfolio",
    active: "portfolio",
  },
];

const LinkItem = ({ link, isActive, onClick }) => (
  <Box
    component={"li"}
    className={isActive ? Style.active : ""}
    sx={{ borderImageSource: info.gradient }}
  >
    <Link to={link.to} onClick={onClick} className={Style.link}>
      {link.type === "Initials" ? <h1>{link.name}</h1> : <p>{link.name}</p>}
    </Link>
  </Box>
);

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <LinkItem
            key={index}
            link={link}
            isActive={link.active === active.slice(1)}
            onClick={() => setActive(link.active)}
          />
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
