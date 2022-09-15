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
          <p>&#x2022;</p>
          <p>C++</p> 
        </div>
      </div>
      <div className="project-info">
        <h2 className="project-title">Query Processor</h2>
        <h4 className="project-date">Spring 2022</h4>
        <p className="project-description">Query Processor is a simple command-line interface search engine written in C that
produces a list of documents that contains all the queries and ranks the results by
frequency. Query Processor also builds an index file that contains all the references from words
to file paths in the form of an inverted index. Learned POSIX file system through utilizing POSIX system calls to handle files and
traverse directories. Implemented necessary dynamics data structures such as hash table and linked list
from scratch with zero memory leaks in Valgrind. Executed with good coding practices by writing concise comments and following
existing code naming conventions for functions, local variables, and global variables</p>
      </div>
        
    </div>
  )
}