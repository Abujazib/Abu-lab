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
    url: "https://www.google.com/maps/place/Abu+Digital+X-ray,ECG+and+Labs/@8.7031237,77.7062749,17z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3b0413bb769c4d85:0x18df3548bcc42169!2sPP35%2B5JM,+Nehruji+Rd,+Puthumanai+Mohalla,+Melapalayam,+Tirunelveli,+Tamil+Nadu+627005!2m2!1d77.709035!2d8.7029704!3m5!1s0x3b0413bb769c4d85:0x18df3548bcc42169!8m2!3d8.702966!4d77.7090342!16s%2Fg%2F11qp0ynhm_?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    icon: <CallIcon />,
    heading: "Call Us",
    description: "96007 50275, 89407 08607",
    url:"tel:+919600750275"
  },
  {
    id: 3,
    icon: <EmailRoundedIcon />,
    heading: "Write Us to",
    description: "abulabs2020@gmail.com",
    url: "mailto:abulabs2020@gmail.com",
  },
  {
    id: 4,
    icon: <TimerIcon />,
    heading: "Our Timing",
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
      <Card className="title-bo" sx={{fontFamily:"Noto Serif", fontWeight:"bold"}}>
        <h1>We Are Here For You</h1>
      </Card>
      <div>
        {cardData.map((iteam) => (
          <Card
            key={iteam.id}
            className="ca"
            sx={{ boxShadow: "none", border: "none" }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "25px" }}>{iteam.icon}</Typography>
              <Typography variant="h6" sx={{fontWeight:"bold", fontFamily:"Noto Serif"}}>{iteam.heading}</Typography>
              <Typography variant="subtitle1" onClick={()=>(window.open(iteam.url,"_blank"))}>{iteam.description}</Typography>
            </CardContent>
          </Card>
        ))}
        <Card className="title-bo" sx={{fontFamily:"Noto serif", fontWeight:"bold"}}>
          <h1>Follow Us On</h1>
        </Card>
        <div className="social-container">
          {socialMedia.map((iteam) => (
            <Card
              key={iteam.id}
              sx={{ boxShadow: "none", border: "none" }}
              className="soc-cla"
            >
              <CardContent className="soc" sx={{color:"info.main","&:hover":{color:"success.main"}}}>
                <Typography>{iteam.icon}</Typography>
                <Typography onClick={() => window.open(iteam.url, "_blank")}>
                  {iteam.head}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Card className="title-bo" sx={{fontFamily:"Noto serif", fontWeight:"bold"}}>
        <h1>Fill this form Appoinment</h1>
        <br />
        <Typography sx={{ color: "#00000" }}>
          <Typography variant="body2">
            or&nbsp;
            <a href="https://abulab-79efc.web.app/appointments" target="_blank">
              click here &nbsp;
              <OpenInNewIcon sx={{ fontSize: "15px" }} /> &nbsp;
            </a>
            to appionment page
          </Typography>
        </Typography>
      </Card>
      <iframe
        src="https://abulab-79efc.web.app/appointments"
        className="if"
      ></iframe>
    </>
  );
}

export default Contantus;
