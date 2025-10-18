import React from "react";
import "..//Css/Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link } from "react-router-dom";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import Tooltip from "@mui/material/Tooltip";
import InstagramIcon from "@mui/icons-material/Instagram";
import { cardData, socialMedia } from "../uidata/Contactdata";

function Footer() {
  const contactItems = cardData.filter(
    (item) => item.id === 2 || item.id === 3
  );

  return (
    <>
      <Card
        sx={{
          color: "#f6d55c",
          backgroundColor: "#006989",
          fontFamily: "Open Sans",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="card-con"
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
        <CardContent sx={{ textAlign: "center" }}>
          <h2>Follow as on</h2>
          {contactItems.map((iteam) => (
            <Tooltip key={iteam.id} title={iteam.heading}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#f6d55c" } }}
                onClick={() => window.open(iteam.url, "_blank")}
              >
                {iteam.icon}
              </IconButton>
            </Tooltip>
          ))}
        </CardContent>
        <CardContent sx={{ textAlign: "center" }}>
          <h2>Contact as</h2>
          <Tooltip title="Gmail">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#f6d55c" } }}
            >
              <EmailRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call">
            <IconButton
              sx={{ color: "white", "&:hover": { color: "#f6d55c" } }}
            >
              <CallRoundedIcon />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f6d55c",
          textAlign: "center",
          color: "#006989",
          height: "100px",
        }}
      >
        <CardContent>
          <CopyrightIcon />
        </CardContent>
      </Card>
    </>
  );
}

export default Footer;
