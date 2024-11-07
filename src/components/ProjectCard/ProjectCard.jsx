import React, { useContext } from "react";
import "../ProjectCard/projectcard.scss";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { DarkModeContext } from "../../context/DarkModeContext";
import Tag from "../Tag/Tag";

const ProjectCard = ({ project, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Card
      onClick={() => onClick(project)}
      sx={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        width: "80%", // Largeur fixe pour uniformité
        height: "320px", // Hauteur fixe pour la card
        bgcolor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",

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
        sx={{
          width: "100%",
          height: "250px", // Hauteur augmentée pour afficher plus de l'image
          objectFit: "cover",
          objectPosition: "top", // Positionne l'image vers le haut
        }}
      />
      <CardContent className="description-container">
        <Typography
          component="h3"
          sx={{
            color: darkMode ? "#e0e0e0" : "#333",
          }}
        >
          {project.title}
        </Typography>
        <Tag tags={project.tags} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
