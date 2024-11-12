import React, { useContext } from "react";
import "../ProjectCard/projectcard.scss";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { DarkModeContext } from "../../context/DarkModeContext";
import Tag from "../Tag/Tag";

const ProjectCard = ({ project, onClick }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Card
      className="card-general"
      onClick={() => onClick(project)}
      sx={{
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        bgcolor: darkMode ? "#dad7d2" : "#fff",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "100%",
          sm: "90%",
          md: "80%",
        },
        height: {
          xs: "300px",
          sm: "280px",
          md: "340px",
        },
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        alt={project.title}
        image={project.cover}
        sx={{
          width: "100%",
          height: {
            xs: "180px",
            sm: "220px",
            md: "250px",
          },
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <CardContent className="description-container">
        <Typography
          component="h3"
          sx={{
            color: darkMode ? "#000" : "#333",
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
