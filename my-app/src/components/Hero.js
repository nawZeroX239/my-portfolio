import React from "react"

export default function Hero() {
  return (
    <div className="hero">

      <div className="hero-greeting">
        <h3 className="greeting-small no-margin"> HELLO WORLD. <span className="greeting-large"> I am <span style={{color:"#FCA311"}}>Naw</span>. </span>  </h3> 
      </div>
      <p className="hero-text">
        I am in my third year computer science student @ UW Seattle.  I am actively looking a software internship for summer 2023.
      </p>
      <div className="hero-actions">
        <button className="actions-bttn">Resume</button>
        <button className="actions-bttn">LinkedIn </button>
        <button className="actions-bttn">Github</button> 
      </div>
    </div>
  )
}