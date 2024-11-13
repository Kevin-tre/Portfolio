import React from "react";
import "../Footer/footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/k%C3%A9vin-trepied-developpeur-web/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le profil LinkedIn de Kevin"
          >
            <LinkedInIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: 30,
                  sm: 40,
                  md: 50,
                },
              }}
            />
          </a>
          <a
            href="https://github.com/Kevin-tre"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le profil GitHub de Kevin"
          >
            <GitHubIcon
              sx={{
                color: "white",
                fontSize: {
                  xs: 30,
                  sm: 40,
                  md: 50,
                },
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
