import React from "react";
import Nabar from "../components/Navbar";
import Appoinmentalert from "../components/Appoinmentalert";
import Firstsection from "../components/Firstsection";
import Footer from "../components/Footer";
import Heroho from "../components/Heroho";
import SplashScreen from "../components/SplashScreenlo";

function Home() {

  return (
    <>
      <SplashScreen />
      <Nabar />
      <Appoinmentalert />
      <Heroho/>
      <Firstsection />
      <Footer/>
    </>
  );
}

export default Home;
