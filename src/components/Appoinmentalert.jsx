import React, { useState } from "react";
import "..//Css/Appoinmentalert.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

function Appionmentalert() {
  const [openalert, setOpenalert] = useState(true);
  const closealert = () => {
    setOpenalert(false);
  };
  const gotopage = () => {
    window.open("https://abulab-79efc.web.app/appointments", "_blank");
    setOpenalert(false);
  };
  return (
    <>
      <Dialog
        open={openalert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className="alert-box">
          <DialogTitle id="alert-dialog-title">
            Ready to Book an Appionment?
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className="body-alert"
            >
              We'll take you to the appointment portal where you can choose your
              preferred date and time for a home visit. <br /> <br/> Please make sure
              you have a stable internet connection. <br /> <br/> To book your
              appointment, follow these steps: <br /> <br/>
              <ol>
                <li>Enter your personal details</li>
                <li>Provide your WhatsApp number (for communication)</li>
                <li>Fill in your full address</li>
                <li>Choose an available slot</li>
                <li>Add your doctor's name (if applicable)</li>
              </ol>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closealert} sx={{ color: "error.main" }}>
              No thank's
            </Button>
            <Button onClick={gotopage} sx={{ color: "success.main" }}>
              Let's go
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default Appionmentalert;
