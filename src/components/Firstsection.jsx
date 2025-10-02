import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "..//Css/Firstsac.css";


function Firstsection() {
  return (
    <>
      <Card className="first">
        <CardContent className="first-content">
          <Card>
            <CardContent className="form">
              <iframe src="https://abulab-79efc.web.app/appointments" className="appointment-frame"></iframe>
            </CardContent>
          </Card>
          <div className="content">
              <h1>Benefits of Online Appointment</h1>
              <p>Quick | Easy | Hassle-Free</p>
              <ul>
                <li>Convenient Home Visit - Get tests done at the comfort of your home.</li>
                <li>Save Time - No waiting in long queues. Book your slot in minutes.</li>
                <li>Easy Communication - Get instant updates via WhatsApp.</li>
                <li>Doctor Reference - Option to add your doctor's name for personalized care.</li>
                <li>Hassle-free Process - Simple form, secure booking, quick confirmation.</li>
                <li>Anywhere, Anytime - Book appointments online from any device.</li>
              </ul>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Firstsection;
