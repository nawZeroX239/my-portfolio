import React from "react"

import "./Hero.css"

export default function Hero() {
  const linkedInURL = "https://www.linkedin.com/in/naw-naw-4548b81a4/";
  const githubURL =  "https://github.com/nawZeroX239";
  const resumeURL = "https://drive.google.com/file/d/1JR2L23ZGlIhsfhdS2AqJ6w7ebkyb4bDU/view?usp=sharing";
  const redirect = (url) => {
     window.location.assign(url);
  }
  return (
    <div className="hero">

      <div className="hero-greeting">
        <h3 className="greeting-small no-margin"> HELLO WORLD.
          <span className="greeting-large"> I am
            <span style={{color:"#FCA311"}}> Naw </span>.
          </span> 
        </h3> 
      </div>

      <p className="hero-intro">
        I am in my third year computer science student @ UW Seattle.  I am actively looking a software internship for summer 2023.
      </p>

      <div className="hero-actions">
        <button className="action-button" onClick={()=>redirect(resumeURL)}>
          Resume
        </button>
        <button className="action-button" onClick={()=>redirect(linkedInURL)}>
          LinkedIn
        </button>
        <button className="action-button" onClick={()=>redirect(githubURL)}>
          Github
        </button> 
      </div>
    </div>
  )
}