import Navbar from "./Components/navbar";
import './index.css'
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about"
import Footer from "./Components/footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
