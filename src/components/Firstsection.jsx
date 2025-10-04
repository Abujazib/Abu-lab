import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "..//Css/Firstsac.css";

const list = [
  {
    id: 1,
    name: "Convenient Home Visit - Get tests done at the comfort of your home.",
  },
  {
    id: 2,
    name: "Save Time - No waiting in long queues. Book your slot in minutes.",
  },
  {
    id: 3,
    name: "Easy Communication - Get instant updates via WhatsApp.",
  },
  {
    id: 4,
    name: "Hassle-free Process - Simple form, secure booking, quick confirmation.",
  },
  {
    id: 5,
    name: "Anywhere, Anytime - Book appointments online from any device.",
  },
];

function Firstsection() {
  return (
    <>
      <Card className="first">
        <CardContent className="first-content">
          <Card>
            <CardContent className="form">
              <iframe
                src="https://abulab-79efc.web.app/appointments"
                className="appointment-frame"
              ></iframe>
            </CardContent>
          </Card>
          <div className="content">
            <h1>Benefits of Online Appointment</h1><br/>
            <p>Quick | Easy | Hassle-Free</p><br/>
            {list.map((iteam) => (
              <ul key={iteam.id}>
                <li>{iteam.name}</li>
              </ul>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Firstsection;
