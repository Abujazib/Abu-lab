import React from 'react';
import "..//Css/Login.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Abulogo from "..//assets/abulablogo.jpg"


function Login() {
  return (
    <div className='log-div'>
    <img src={Abulogo} alt="Abulogo" className='logo-lo'/>
    <Card>
      <CardContent>
      </CardContent>
    </Card>
    </div>
  )
}

export default Login