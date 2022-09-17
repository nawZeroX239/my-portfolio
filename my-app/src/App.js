import React from "react"

import Homepage from "./components/Homepage"
import Projects from "./components/Projects"
import Academics from "./components/Academics"
import Skills from "./components/Skills"
import Contacts from "./components/Contacts"

import "./App.css"

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  
  return (
    
    <div className="app">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesSetting}
      />
      <div className="app-content">
        <Homepage />
        <Projects />
        <Skills />
        <Academics />
        <Contacts />
      </div>
    </div>
  );
 }

export default App;

const particlesSetting = {
  background: {
      color: {
          value: "#292F36",
      },
  },
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: false,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      collisions: {
          enable: true,
      },
      move: {
          directions: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 45,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,
  fullScreen: { enable: false }
};