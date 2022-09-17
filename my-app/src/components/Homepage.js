import React from "react"

import Navbar from "./Navbar"
import Hero from "./Hero"

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import "./Homepage.css"

export default function Homepage() {

  return (
    <div className="homepage" id="homepage">
      <Navbar />
      <Hero />
    </div>
  )
}