import React, { useContext } from "react";
import "./header.scss";
import LogoLight from "../../assets/logo.webp";
import LogoDark from "../../assets/logoDark.webp";
import SwitchButton from "../../components/switch/SwitchButton";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-scroll"; // Si vous souhaitez un défilement fluide

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <header className="header-container">
      <img className="logo" src={darkMode ? LogoDark : LogoLight} alt="Logo" />
      <nav>
        <Link to="projets" smooth={true} duration={1000}>
          <div>Mes projets</div>
        </Link>
        <Link to="parcours" smooth={true} duration={1000}>
          <div>Mon parcours</div>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <div>Me contacter</div>
        </Link>
        <SwitchButton />
      </nav>
    </header>
  );
};

export default Header;
