import {React, useState, useEffect} from "react"
import {nanoid} from 'nanoid'

import ProjectCard from "./ProjectCard"
import projectData from "../data/projects.json"
import "./Projects.css"

export default function Projects() {

  return (
    <div className="projects" id="projects">
      <h1 className="section-title"> Projects </h1>
      {projectData && projectData.map(project => <ProjectCard key={nanoid()} {...project}/>)}
    </div>
  )
}