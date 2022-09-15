import React from "react"

import Homepage from "./components/Homepage"
import Projects from "./components/Projects"
import Academics from "./components/Academics"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="app">
      <Homepage />
      <Projects />
      <Skills />
      <Academics />
    </div>
  );
 }

export default App;
