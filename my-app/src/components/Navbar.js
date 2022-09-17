import React from "react"
import { HashLink, NavHashLink } from 'react-router-hash-link';

import "./Navbar.css"

export default function Navbar() {
  return (
    <ul className="navbar">
      <li className="navbar-home navbar-link" >
        <HashLink smooth to="#homepage" > Home </HashLink>
      </li>
      <li className="navbar-margin-right navbar-link" > 
        <HashLink smooth to="#projects" > Projects </HashLink>
      </li>
      <li className="navbar-margin-right navbar-link">
        <HashLink smooth to="#skills"> Skills </HashLink>
      </li> 
      <li className="navbar-margin-right navbar-link">
        <HashLink smooth to="#academics"> Academics </HashLink>
      </li>
      <li className="navbar-link">
        <HashLink smooth to="#contact"> Contact </HashLink>
      </li>
    </ul>
  )
}