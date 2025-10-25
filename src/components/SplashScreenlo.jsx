import React, { useEffect, useState } from "react";
import "../Css/SplashScreen.css";
import Abulogo from "../assets/abulablogo.jpg";

function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // splash lasts 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null; // hide splash after timeout

  return (
    <div className="splash-screen">
      <img src={Abulogo} alt="Abu Lab Logo" className="splash-logo" />
      <h1 className="splash-title">Abu Digital X-Ray, ECG & Lab</h1>
      <p className="splash-tagline">We Care Your Health</p>
    </div>
  );
}

export default SplashScreen;
