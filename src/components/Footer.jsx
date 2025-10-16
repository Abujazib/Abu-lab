import React from "react";
import "..//Css/Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Abulogo from "..//assets/abulablogo.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link } from "react-router-dom";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import Tooltip from "@mui/material/Tooltip";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Card
        sx={{
          color: "#ffebaf",
          backgroundColor: "#4c9db0",
          fontFamily: "Open Sans",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <h2>Abu Laboratory</h2>
        </CardContent>
        <CardContent>
          <h2>Pages</h2>
          <div className="links-fa">
            <Link to="/">Home</Link>
            <Link to="">About Us</Link>
            <Link to="">Our Test</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </CardContent>
        <CardContent>
          <h2>Follow as on</h2>
          <Tooltip title="Instagram">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#ffebaf" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="FaceBook">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#ffebaf" } }}
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Gmail">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#ffebaf" } }}
            >
              <EmailRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#ffebaf" } }}
            >
              <CallRoundedIcon />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
      <Card sx={{backgroundColor: "#ffebaf", textAlign:"center", color:"#4c9db0", height:"100px"}}>
        <CardContent>
          <CopyrightIcon />
        </CardContent>
      </Card>
    </>
  );
}

export default Footer;
