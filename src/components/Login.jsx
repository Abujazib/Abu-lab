import React from "react";
import "..//Css/Login.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Abulogo from "..//assets/abulablogo.jpg";
import TextField from "@mui/material/TextField";
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

function Login() {

  return (
    <div className="log-div">
      <img src={Abulogo} alt="Abulogo" className="logo-lo" />
      <Card className="logca">
        <CardContent>
          <TextField id="fullWidth" label="Username*" variant="outlined" sx={{width:"300px"}} /> <br/> <br/>
          <TextField id="fullWidth" label="Password*" variant="outlined" type="password" sx={{width:"300px"}} />
          <br/><br/>
          <div className="but-log">
            <Button variant="contained" sx={{textAlign:"left"}}><LoginIcon/> &nbsp; Login</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
