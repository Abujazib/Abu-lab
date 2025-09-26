import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "..//Css/Navbar.css";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="navbox">
        <AppBar position="static" className="navbar">
          <div className="bar">
            <Toolbar className="toolbar">
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
                <Button className="glow-btn" variant="outlined" onClick={() => window.open("https://abulab-79efc.web.app/appointments", "_blank")}>
                    <ClassRoundedIcon /> Book an Appoinment
                    {/*https://abulab-79efc.web.app/appointments*/}
                </Button>
              </div>
            </Toolbar>
          </div>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
