import React from "react";
import Navbar from "..//components/Navbar";
import Footer from "..//components/Footer";
import Card from "@mui/material/Card";
import Abulogo from "..//assets/abulablogo.jpg";
import "..//Css/Callback.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CardContent from '@mui/material/CardContent';

function Callback() {
  return (
    <>
      <Navbar />
      <Card sx={{ marginTop: "60px", textAlign: "center" }}>
        <img src={Abulogo} alt="Abulab logo" className="logo-call" />
        <Typography>Request for a Call back</Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ marginTop: "50px", width: "500px" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          type="tel"
          sx={{ marginTop: "50px", width: "500px" }}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Gmail"
          type="email"
          variant="outlined"
          sx={{ marginTop: "50px", width: "500px" }}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Short Message"
          multiline
          rows={10}
          sx={{ marginTop: "50px", width: "500px" }}
        /><br/>
        <Button variant="contained" sx={{marginTop:"50px", marginBottom:"50px"}}>Submit</Button>
      </Card>
      <Footer />
    </>
  );
}

export default Callback;
