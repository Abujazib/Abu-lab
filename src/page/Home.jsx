import React, { useEffect, useState } from "react";
import Nabar from "../components/Navbar";
import Appoinmentalert from "../components/Appoinmentalert";
import Firstsection from "../components/Firstsection";
import Footer from "../components/Footer";

function Home() {
  // const [showalert, setShowalert] = useState(false);

  // useEffect(() => {
  //   setShowalert(true);
  // }, []);

  return (
    <>
      <Nabar />
      {/* {showalert && <Appoinmentalert />} */}
      <Firstsection />
      <Footer/>
    </>
  );
}

export default Home;
