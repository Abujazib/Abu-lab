import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "..//Css/Navbar.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import Button from "@mui/material/Button";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Abulogo from "..//assets/Abulablogo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="navbox">
        <AppBar position="static" className="navbar">
          <div className="bar">
            <Toolbar className="toolbar">
              <img src={Abulogo} alt="Abulablogo" className="logo" />
              &nbsp;
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontFamily:"Playfair Display" }}
                className="title"
              >
                Abu Laboratory
              </Typography>
              <div className="links">
                <Button>
                  <Link to="/">Home</Link>
                </Button>
                <Button>
                  <Link to="">About Us</Link>
                </Button>
                <Button>
                  <Link to="">Our Test</Link>
                </Button>
                <Button>
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </div>
              <div className="appionment-link">
                <Button
                  className="glow-btn"
                  variant="outlined"
                  onClick={() =>
                    window.open(
                      "https://abulab-79efc.web.app/appointments",
                      "_blank"
                    )
                  }
                >
                  <ClassRoundedIcon /> Book an Appoinment
                </Button>
              </div>
              <div className="more">
                <IconButton className="more-button">
                  <FaBars onClick={handleopen} />
                </IconButton>
              </div>
            </Toolbar>
          </div>
        </AppBar>
      </Box>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className="side-bar"
      >
        <IconButton className="close-button" onClick={handleclose}>
          <CancelRoundedIcon />
        </IconButton>
        <div className="links">
          <Button onClick={handleclose}>
            <Link to="/">Home</Link>
          </Button>
          <Button onClick={handleclose}>
            <Link path="">About Us</Link>
          </Button>
          <Button onClick={handleclose}>
            <Link to="">Our Test</Link>
          </Button>
          <Button onClick={handleclose}>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
        <div className="appionment-link">
          <Button
            className="glow-btn"
            variant="outlined"
            onClick={() =>
              window.open("https://abulab-79efc.web.app/appointments", "_blank")
            }
          >
            <ClassRoundedIcon /> Book an Appoinment
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
