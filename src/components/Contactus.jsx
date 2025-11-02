import React from "react";
import "..//Css/contactus.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { cardData, socialMedia } from "../uidata/Contactdata";


function Contantus() {
  return (
    <div className="contact-page">
      <div className="title-con">
        <h1>CONTACT US</h1>
      </div>
      <Card className="title-bo" sx={{fontFamily:"Open Sans", fontWeight:"bold"}}>
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
              <Typography variant="h6" sx={{fontWeight:"bold", fontFamily:"Open Sans"}}>{iteam.heading}</Typography>
              <Typography variant="subtitle1" onClick={()=>(window.open(iteam.url,"_blank"))}>{iteam.description}</Typography>
            </CardContent>
          </Card>
        ))}
        <Card className="title-bo" sx={{fontFamily:"Open Sans", fontWeight:"bold"}}>
          <h1>Follow Us On</h1>
        </Card>
        <div className="social-container">
          {socialMedia.map((iteam) => (
            <Card
              key={iteam.id}
              sx={{ boxShadow: "none", border: "none" }}
              className="soc-cla"
            >
              <CardContent className="soc" sx={{color: "info.main", '&:hover':{color: "sucess.main"},}}>
                <Typography>{iteam.icon}</Typography>
                <Typography onClick={() => window.open(iteam.url, "_blank")}>
                  {iteam.head}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Card className="title-bo" sx={{fontFamily:"Open Sans", fontWeight:"bold"}}>
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
    </div>
  );
}

export default Contantus;
