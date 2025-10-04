import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "..//src/page/Home";
import Loginpage from "./Page/Loginpage";
import Contactuspa from "./page/Contactuspa";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/contact-us" element={<Contactuspa />} />
        </Routes>
        <Routes>
          <Route path="/admin-5jz" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
