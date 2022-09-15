import React from "react"

import projectPhoto from '../images/hash-table.png'

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-figure">
        <img
          src={projectPhoto}
          className="project-photo"
          alt="project-photo"
        />
        <div className="project-tags">
          <p>C</p>
          <p>C++</p> 
        </div>
      </div>
      <div className="project-info">
        <h2 className="project-title">Query Processor</h2>
      </div>
        
    </div>
  )
}