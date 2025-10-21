import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import Abulogo from "../assets/abulablogo.jpg";
import "../Css/Callback.css";

function Callback() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Failed, setFailed] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setSuccess(true);
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setFailed(true);
        }
      );
  };

  return (
    <>
      <Navbar />
      <Card sx={{ marginTop: "60px", textAlign: "center", padding: "30px" }}>
        <img src={Abulogo} alt="Abulab logo" className="logo-call" />
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Request for a Call Back
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            sx={{ marginTop: "20px", width: "90%", maxWidth: "500px" }}
            required
          />
          <br />

          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            type="tel"
            sx={{ marginTop: "20px", width: "90%", maxWidth: "500px" }}
            required
          />
          <br />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            type="email"
            sx={{ marginTop: "20px", width: "90%", maxWidth: "500px" }}
            required
          />
          <br />

          <TextField
            label="Short Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={6}
            variant="outlined"
            sx={{ marginTop: "20px", width: "90%", maxWidth: "500px" }}
          />
          <br />

          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "30px", width: "90%", maxWidth: "500px" }}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Submit"}
          </Button>

          {success && (
            <Alert
              variant="filled"
              severity="success"
              sx={{ marginLeft: "30%",marginTop: "20px", width: "90%", maxWidth: "500px" }}
            >
              Message Sent Successfully!
            </Alert>
          )}
          {Failed && (
            <Alert
              variant="filled"
              severity="error"
              sx={{ marginLeft: "30%",marginTop: "20px", width: "90%", maxWidth: "500px" }}
            >
              Failed to send. Please try again.
            </Alert>
          )}
        </form>
      </Card>
      <Footer />
    </>
  );
}

export default Callback;
