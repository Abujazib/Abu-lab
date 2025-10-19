import React from "react";
import "..//Css/Footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { cardData, socialMedia } from "../uidata/Contactdata";
import Typography from "@mui/material/Typography";

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
          <h2>Contact as</h2>
          {contactItems.map((iteam) => (
            <Tooltip key={iteam.id} title={iteam.name}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#f6d55c", transition:"1s" } }}
                onClick={() => window.open(iteam.url, "_blank")}
              >
                {iteam.icon}
              </IconButton>
            </Tooltip>
          ))}
        </CardContent>
        <CardContent sx={{ textAlign: "center" }}>
          <h2>Follow as on</h2>
          {socialMedia.map((iteam) => (
            <Tooltip title={iteam.name}>
              <IconButton
                sx={{ color: "white", "&:hover": { color: "#f6d55c", transition:"1s" } }}
                onClick={() => window.open(iteam.url, "_blank")}
              >
                {iteam.icon}
              </IconButton>
            </Tooltip>
          ))}
        </CardContent>
        <CardContent>
          <h2>Officially Certified By</h2>
          <Typography sx={{ color: "#ffff", "&:hover": { color: "#f6d55c", transition:"1s" } }}>
            <RiVerifiedBadgeFill />
            &nbsp;ISO 9001:2015 Certified Laboratory <br /> <RiVerifiedBadgeFill />
            &nbsp;CMC Vellore Certified for Quality Testing
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          backgroundColor: "#f6d55c",
          textAlign: "center",
          color: "#006989",
          height: "70px",
        }}
      >
        <CardContent>
          <Typography>
            <CopyrightIcon /> 2025 Abu Digital X-Ray, ECG, & Labs | All Rights
            Reserved
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Footer;
