import React from "react";
import "..//Css/contactus.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PlaceIcon from '@mui/icons-material/Place';
import TimerIcon from '@mui/icons-material/Timer';
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';

const cardData = [
  {
    id: 1,
    icon:<PlaceIcon/>,
    heading:"Visit Us",
    description: " PP35+5JM, Nehruji Rd, Puthumanai Mohalla, Melapalayam, Tirunelveli, Tamil Nadu 627005"
  },
  {
    id: 2,
    icon:<CallIcon/>,
    heading:"Call Us",
    description: " 12345 67890, 12345 67890"
  },
  {
    id: 3,
    icon:<TimerIcon/>,
    heading:"Your Timing",
    description: " Monday to Saturday 7:00AM to 8:30PM Sunday 7:00AM to 12PM and 6:PM to 8:30PM"
  }
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
        {cardData.map((iteam)=> (
          <Card key={iteam.id} className="ca">
          <CardContent>
            {iteam.icon}
            <Typography variant="h5"></Typography>
            <Typography>
              {iteam.heading}
            </Typography>
            <Typography variant="body2">
              {iteam.description}
              <br />
            </Typography>
          </CardContent>
        </Card>
        ))}
      </div>
       <div className="title-bo">
        <h1>Book an Appoinment</h1>
      </div>
    </>
  );
}

export default Contantus;
