import React, { useContext } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import { DarkModeContext } from "../../context/DarkModeContext";

const Formation = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={darkMode ? "secondary" : "primary"}>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          color={darkMode ? "#B0B0B0" : "black"}
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <h3>Formation Intégrateur Web</h3>
          <p>2024 | OpenClassrooms, France</p>
          <p>
            Formation de 9 mois spécialisée dans le développement front-end, où
            j'ai approfondi mes compétences en JavaScript, React et dans
            l'intégration de solutions web modernes. J'ai travaillé sur des
            projets qui m'ont permis de renforcer mes connaissances techniques
            tout en développant une approche centrée sur l'expérience
            utilisateur et la performance.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={darkMode ? "primary" : "secondary"}>
            <ComputerIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          color={darkMode ? "#B0B0B0" : "black"}
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <h3>POEC Front end</h3>
          <p>2023 | Distanciel, Human Booster, France</p>
          <p>
            {" "}
            POEC de 3 mois axée sur l'apprentissage des fondamentaux du
            développement web, notamment HTML, CSS, JavaScript, ainsi que
            l'introduction à des frameworks modernes tels que React et Angular.
          </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={darkMode ? "error" : "success"}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          color={darkMode ? "#B0B0B0" : "black"}
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <h3>BTS NRC</h3>
          <p>2017 | Vichy, France</p>
          <p>Cité Scolaire Albert Londre</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={darkMode ? "success" : "secondary"}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          color={darkMode ? "#B0B0B0" : "black"}
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          <h3>Bac ES</h3>
          <p>2015 | Vichy, France</p>
          <p>Cité Scolaire Albert Londre</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Formation;
