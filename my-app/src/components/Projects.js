import React from "react"

import ProjectCard from './ProjectCard'

import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="section-title"> Projects </h1>
      <ProjectCard />
    </div>
  )
}