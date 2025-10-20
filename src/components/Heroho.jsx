import React from "react";
import "..//Css/Heroho.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import labimg from "..//assets/lab.jpeg";
import { heroHome } from "..//uidata/Contactdata"

function Heroho() {
  return (
    <Card
      className="hero"
      sx={{
        backgroundColor: "#0F9E99",
      }}
    >
      <div className="her-fir">
        <Typography variant="h4" sx={{ color: "#EFE9E0" }}>
          <TypeAnimation
            sequence={["Abu Labs", 500, "Abu Digital X-Ray, ECG &  Lab", 500]}
            typeSpeed={50}
            backSpeed={30}
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "5px", color: "#f6d55c", fontWeight: "bold" }}
        >
          We Care Your Health
        </Typography>
        <Typography sx={{color:"#EFE9E0"}} variant="h6">
            Welcome to Abu Digital X-Ray, ECG & Lab
        </Typography>
        <Typography variant="h6" sx={{ color: "#f6d55c", marginLeft:"20px" }}>
        {heroHome.map((iteam) =>(<ul key={iteam.id}>
            <li>{iteam.name}</li>
        </ul>))}
        </Typography>
      </div>
      <div className="img-her">
        <img src={labimg} alt="lab image" className="img" />
      </div>
    </Card>
  );
}

export default Heroho;
