import {React} from "react"
import {nanoid} from "nanoid"

// import projectPhoto from '../images/hash-table.png'

import "./ProjectCard.css"

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-figure">
        <img
          src={require('../images/' + props.image)}
          className="project-photo"
        />
        <ul className="project-tags">
          {props.tools.map(tagName => <li key={nanoid()}>{tagName}</li>)}
        </ul>
      </div>
      <div className="project-info">
        <h2 className="project-title">{props.name}</h2>
        <h4 className="project-date">{props.date}</h4>
        <p className="project-description">{props.description}</p>
      </div>
        
    </div>
  )
}