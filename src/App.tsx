/** @format */

import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Navbar from "./components/Navbar/Nav_tab";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact_Us/Contact";
import Messages from "./components/Messages/Messages";
import Showcase from "./components/R&D_Showcase/Showcase";
import ProgramGuide from "./components/Program_Guide/Program_Guide";
import Outreach from "./components/Outreach/Outreach";
import Logistics from "./components/Logistics/Logistics";

import { Routes, Route } from "react-router-dom";

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Particles
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
              />{" "}
              <Home />
            </>
          }
        />
        <Route
          path="/Home/"
          element={
            <>
              <Particles
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
              />{" "}
              <Home />
            </>
          }
        />
        <Route path="/Messages/" element={<Messages />} />
        <Route path="/R&D_Showcase/" element={<Showcase />} />
        <Route path="/Program_Guide/" element={<ProgramGuide />} />
        <Route path="/Outreach/" element={<Outreach />} />
        
        <Route path="/Logistics/" element={<Logistics />} />
        <Route path="/Contact/" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
