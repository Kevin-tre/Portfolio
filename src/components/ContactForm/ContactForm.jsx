import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
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
        setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
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
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contactez moi par mail
      </Typography>
      {alert.show && (
        <Alert
          severity={alert.severity}
          onClose={() => setAlert({ show: false })}
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
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Envoyer
      </Button>
    </Box>
  );
};

export default ContactForm;
