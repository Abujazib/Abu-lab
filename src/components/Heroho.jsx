import React from "react";
import "..//Css/Heroho.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import labimg from "..//assets/lab.jpeg";
import { heroHome } from "..//uidata/Contactdata"

function Heroho() {
  return (
    <Card className="hero">
      <div className="her-fir">
        <Typography variant="h4" sx={{ color: "#FCFAEE" }}>
          <TypeAnimation
            sequence={["Abu Labs", 2000, "Abu Digital X-Ray, ECG &  Labs", 2000]}
            typeSpeed={50}
            backSpeed={30}
            repeat={Infinity}
          />
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "5px", color: "#1E3C65", fontWeight: "bold" }}
        >
          We Care Your Health
        </Typography>
        <Typography sx={{color:"#FCFAEE"}} variant="h6">
            Welcome to Abu Digital X-Ray, ECG & Lab
        </Typography>
        <Typography variant="h6" sx={{ color: "#1E3C65", marginLeft:"20px" }}>
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
