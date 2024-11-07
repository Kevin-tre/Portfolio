import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const ProjectModal = ({ title, description, isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      fullWidth
      maxWidth="sm"
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
        <Button onClick={onClose}>Close</Button>
        <Button
          href="https://kevin-tre.github.io/Projet-7-Kasa/"
          color="primary"
          variant="contained"
        >
          Github Live
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
