import React, { useContext, useState } from "react";
import LogoLight from "../../assets/logo.webp";
import LogoDark from "../../assets/logoDark.webp";
import SwitchButton from "../../components/switch/SwitchButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DarkModeContext } from "../../context/DarkModeContext";
import { Link } from "react-scroll";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <header className="header-container">
      <img className="logo" src={darkMode ? LogoDark : LogoLight} alt="Logo" />

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <CloseIcon
            fontSize="large"
            sx={{
              color: darkMode ? "#1A1A1A" : "", // Blanc en dark mode, gris sinon
              bgcolor: darkMode ? "#d7b986" : "",
            }}
          />
        ) : (
          <MenuIcon
            fontSize="large"
            sx={{
              color: darkMode ? "#1A1A1A" : "", // Blanc en dark mode, gris sinon
              bgcolor: darkMode ? "#d7b986" : "",
            }}
          />
        )}
      </button>

      <nav>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="projets"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
            >
              Mes projets
            </Link>
          </li>
          <li>
            <Link
              to="parcours"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
            >
              Mon parcours
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
            >
              Me contacter
            </Link>
          </li>
          <li>
            <SwitchButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
