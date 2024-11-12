import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { DarkModeContext } from "../../context/DarkModeContext";

const ProjectModal = ({ title, description, GitHubRepo, isOpen, onClose }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: darkMode ? "#8d8982" : "#ffffff",
          color: darkMode ? "#fdf6f0" : "black",
          textAlign: "justify",
        },
      }}
    >
      <DialogTitle id="project-dialog-title" component="h3">
        {title}
      </DialogTitle>
      <DialogContent>
        <Typography id="project-dialog-description" variant="body1" paragraph>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            bgcolor: darkMode ? "#63531a" : "#000080",
            color: darkMode ? "#ffffff" : "#ffffff",
          }}
        >
          Fermer
        </Button>
        <Button
          href={GitHubRepo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: darkMode ? "#63531a" : "#000080",
          }}
          variant="contained"
        >
          Repo GitHub
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
