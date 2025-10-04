import React from "react";
import "..//Css/Footer.css";
import Abulogo from "..//assets/abulablogo.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Card
      sx={{
        color: "#ffebaf",
        backgroundColor: "#4c9db0",
        fontFamily: "Noto Serif",
        padding: "10px",
        display:"flex",
        justifyContent:"space-between"
      }}
    >
      <CardContent>
        <h2>Abu Laboratory</h2>
      </CardContent>
      <CardContent>
        <h2>Pages</h2>
        <div className='links-fa'>
          <Link to="/">Home</Link>
          <Link to="">About Us</Link>
          <Link to="">Our Test</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default Footer;
