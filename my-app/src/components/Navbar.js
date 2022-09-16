import React from "react"

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <h3 className="navbar-home"> Home </h3>
      <h3 className="navbar-margin-right"> Projects </h3>
      <h3 className="navbar-margin-right"> Skills </h3> 
      <h3 className="navbar-margin-right"> Academics </h3> 
      <h3 > Contact </h3>
    </div>
  )
}