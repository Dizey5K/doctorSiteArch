import "./App.scss";
import React, { useEffect } from "react";
import { Route, Routes as Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Prices from "./components/Prices";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import hero2_bg from "./images/hero2-bg.jpg";
import Landing from "./components/Landing";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const location = useLocation();

  return (
    <div
      className="masthead bg-first"
      style={{
        minHeight: "100vh",
        textShadow: "none",
      }}
    >
      <Navigation _path={window.location.pathname} />
      <AnimatePresence mode="wait">
        <Switch location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<motionAdmin />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/cold" element={<Landing />} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
