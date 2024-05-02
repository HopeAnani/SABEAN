import Navbar from "./Components/navbar";
import './index.css'
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about"
import Footer from "./Components/footer";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Product1 from "./pages/product1";
import Product2 from "./pages/product2";

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
        <Route path="/products/multijet-water-meters" exact element={<Product1 />} />
        <Route path="/products/gate-valve" exact element={<Product2 />} />
        <Route path="/services" exact element={<Service />} />
        <Route path="/contact-us" exact element={<Contact />} />

      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
