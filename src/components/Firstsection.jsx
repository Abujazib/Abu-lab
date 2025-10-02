import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "..//Css/Firstsac.css";


function Firstsection() {
  return (
    <>
      <Card className="first">
        <CardContent className="first-content">
          <Card className="form">
              <iframe src="https://abulab-79efc.web.app/appointments"></iframe>
          </Card>
          <div>
              <h1>Text</h1>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Firstsection;
