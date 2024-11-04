import React, { useContext } from "react";
import "../ProjectCard/projectcard.scss";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { DarkModeContext } from "../../context/DarkModeContext";

const ProjectCard = ({ project, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Card
      onClick={() => onClick(project)}
      sx={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        height: "100%",
        width: "80%",
        bgcolor: darkMode ? "#333" : "#fff", // Fond sombre pour le dark mode
        color: darkMode ? "#fff" : "#000",

        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        alt={project.title}
        image={project.cover}
        className="test"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {" "}
        {/* Assure un bon alignement du contenu */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: darkMode ? "#e0e0e0" : "#333",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: darkMode ? "#e0e0e0" : "#333",
          }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
