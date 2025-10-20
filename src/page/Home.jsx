import React from "react";
import Nabar from "../components/Navbar";
import Appoinmentalert from "../components/Appoinmentalert";
import Firstsection from "../components/Firstsection";
import Footer from "../components/Footer";
import Heroho from "../components/Heroho";

function Home() {

  return (
    <>
      <Nabar />
      <Appoinmentalert />
      <Heroho/>
      <Firstsection />
      <Footer/>
    </>
  );
}

export default Home;
