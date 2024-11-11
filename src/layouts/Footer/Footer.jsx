import React from "react";
import "../Footer/footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials">
          <Link to="https://www.linkedin.com/in/k%C3%A9vin-trepied-developpeur-web/">
            <LinkedInIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: 30, // Taille pour les petits écrans (mobile)
                  sm: 40, // Taille pour les écrans moyens (tablettes)
                  md: 50, // Taille pour les écrans plus grands (ordinateurs de bureau)
                },
              }}
            />
          </Link>
          <Link to="https://github.com/Kevin-tre">
            <GitHubIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: 30, // Taille pour les petits écrans (mobile)
                  sm: 40, // Taille pour les écrans moyens (tablettes)
                  md: 50, // Taille pour les écrans plus grands (ordinateurs de bureau)
                },
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
