import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { DarkModeContext } from "../../context/DarkModeContext";

const ContactForm = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const { darkMode } = useContext(DarkModeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    severity: "success",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceId, templateId, formData, publicId).then(
      (result) => {
        console.log("E-mail envoyé avec succès !", result.text);
        setAlert({
          show: true,
          severity: "success",
          message: "Votre message a été envoyé !",
        });
        setFormData({ name: "", email: "", message: "" }); // Vide le formulaire
      },
      (error) => {
        console.error("Erreur lors de l'envoi de l'e-mail", error.text);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: { xs: "90%", sm: "80%", md: 400 },
        margin: "auto",
        padding: { xs: 1, md: 2 },
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: darkMode ? "#fff" : "#000",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        Contactez-moi par mail
      </Typography>

      {alert.show && (
        <Alert
          severity={alert.severity}
          onClose={() => setAlert({ show: false })}
          sx={{
            backgroundColor: darkMode ? "#555" : "#fff",
            color: darkMode ? "#fff" : "#000",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          {alert.message}
        </Alert>
      )}

      <TextField
        label="Nom"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          input: { color: darkMode ? "#fff" : "#000" },
          label: { color: darkMode ? "#bbb" : "#000" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#888" : "#000",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "#bbb" : "#666",
            },
          },
        }}
      />

      <TextField
        label="E-mail"
        variant="outlined"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          input: { color: darkMode ? "#fff" : "#000" },
          label: { color: darkMode ? "#bbb" : "#000" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#888" : "#000",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "#bbb" : "#666",
            },
          },
        }}
      />

      <TextField
        label="Message"
        variant="outlined"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        required
        multiline
        rows={4}
        sx={{
          input: { color: darkMode ? "#fff" : "#000" },
          label: { color: darkMode ? "#bbb" : "#000" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: darkMode ? "#888" : "#000",
            },
            "&:hover fieldset": {
              borderColor: darkMode ? "#bbb" : "#666",
            },
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
        fullWidth
        sx={{
          backgroundColor: darkMode ? "#555" : "#1976d2",
          "&:hover": {
            backgroundColor: darkMode ? "#444" : "#115293",
          },
          padding: { xs: "8px", md: "10px" },
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        Envoyer
      </Button>
    </Box>
  );
};

export default ContactForm;
