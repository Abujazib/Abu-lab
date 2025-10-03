import React from "react";
import "..//Css/contactus.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlaceIcon from "@mui/icons-material/Place";
import TimerIcon from "@mui/icons-material/Timer";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";

const cardData = [
  {
    id: 1,
    icon: <PlaceIcon />,
    heading: "Visit Us",
    description:
      " 1H/3, Nehruji Road (Police Station Road), Allah Pitchai Abubacker Complex (Near Jabbar Tea Kadai), Melapalayam,Tirunelveli-5",
  },
  {
    id: 2,
    icon: <CallIcon />,
    heading: "Call Us",
    description: "96007 50275, 89407 08607",
  },
  {
    id: 3,
    icon: <EmailRoundedIcon />,
    heading: "Write Us to",
    description: "abulabs2020@gmail.com",
  },
  {
    id: 4,
    icon: <TimerIcon />,
    heading: "Your Timing",
    description:
      " Monday to Saturday 7:00AM to 8:30PM Sunday 7:00AM to 12PM and 7:00PM to 8:30PM",
  },
];
const socialMedia = [
  {
    id: 1,
    icon: <InstagramIcon />,
    head: "abu_lab_medicals_official",
    url: "https://www.instagram.com/abu_lab_medicals_official?utm_source=qr&igsh=MWd3bzVyZThyM2ZmaA==",
  },
  {
    id: 2,
    icon: <FacebookIcon />,
    head: "Abu Lab Medicals",
    url: "https://www.facebook.com/people/Abu-Lab-Medicals/61566550533940",
  },
];

function Contantus() {
  return (
    <>
      <div className="title-con">
        <h1>CONTACT US</h1>
      </div>
      <div className="title-bo">
        <h1>We Are Here For You</h1>
      </div>
      <div>
        {cardData.map((iteam) => (
          <Card
            key={iteam.id}
            className="ca"
            sx={{ boxShadow: "none", border: "none" }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "25px" }}>{iteam.icon}</Typography>
              <Typography variant="h6">{iteam.heading}</Typography>
              <Typography variant="subtitle1">{iteam.description}</Typography>
            </CardContent>
          </Card>
        ))}
        <div className="title-bo">
          <h1>Follow Us On</h1>
        </div>
        <div className="social-container">
          {socialMedia.map((iteam) => (
            <Card
              key={iteam.id}
              sx={{ boxShadow: "none", border: "none" }}
              className="soc-cla"
            >
              <CardContent className="soc">
                <Typography>{iteam.icon}</Typography>
                <Typography onClick={() => window.open(iteam.url, "_blank")}>
                  {iteam.head}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="title-bo">
        <h1>Fill this form Appoinment</h1>
        <br />
        <Typography sx={{ color: "#00000" }}>
          <p>
            or&nbsp;
            <a href="https://abulab-79efc.web.app/appointments" target="_blank">
              click here &nbsp;
              <OpenInNewIcon sx={{ fontSize: "15px" }} /> &nbsp;
            </a>
            to appionment page
          </p>
        </Typography>
      </div>
      <iframe
        src="https://abulab-79efc.web.app/appointments"
        className="if"
      ></iframe>
    </>
  );
}

export default Contantus;
