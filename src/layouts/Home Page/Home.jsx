import React, { useState } from "react";
import "../Home Page/home.scss";
import Message from "../../components/Message/Message";
import projects from "../../data/projects.json";
import { Grid2 } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/Modal/ProjectModal";
import Formation from "../../components/Formation/Formation";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="home-container">
      <Message />
      <div className="card-container" id="projets">
        <h2 className="section-title">Mes projets</h2>
        <Grid2
          container
          rowSpacing={1}
          direction={{ xs: "column", md: "row" }} // xs (mobile) : colonne /md (tablette,desktop) en ligne
          size={{ xs: 6, md: 4 }}
        >
          {projects.map((project) => (
            <Grid2
              key={project.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              size="grow"
            >
              <ProjectCard project={project} onClick={showModal} />
            </Grid2>
          ))}
        </Grid2>
        {selectedProject && (
          <ProjectModal
            title={selectedProject.title}
            description={selectedProject.description}
            tags={selectedProject.tags}
            GitHubRepo={selectedProject.GitHubRepo}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
      <div className="formation-container" id="parcours">
        <h2 className="section-title">Mon parcours</h2>
        <Formation />
      </div>
      <div className="contact" id="contact">
        <h2 className="section-title">Me contacter</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
