import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="../img/gnd-logos_black.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
