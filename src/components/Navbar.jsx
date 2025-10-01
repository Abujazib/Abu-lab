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
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Abulogo from "..//assets/relogo.png";

function Navbar() {
  
  const [open,setOpen]= useState(false);
  const handleopen = () =>{
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
              <img src={Abulogo} alt="Abulablogo" className="logo"/>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                className="title"
              >
                Abu Laboratory
              </Typography>
              <div className="links">
                <Button>
                  <a href="">Home</a>
                </Button>
                <Button>
                  <a href="">About Us</a>
                </Button>
                <Button>
                  <a href="">Our Test</a>
                </Button>
                <Button>
                  <a href="">Contact Us</a>
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
                  <FaBars onClick={handleopen}/>
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
            <a href="">Home</a>
          </Button>
          <Button onClick={handleclose}>
            <a href="">About Us</a>
          </Button>
          <Button onClick={handleclose}>
            <a href="">Our Test</a>
          </Button>
          <Button onClick={handleclose}>
            <a href="">Contact Us</a>
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
