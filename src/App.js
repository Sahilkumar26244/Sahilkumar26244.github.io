import React from "react"
import "./index.js"
import { Home } from "./routes/Home.js";
import { About } from "./routes/About.js";
import { Contact } from "./routes/Contact.js";
import { Project } from "./routes/Project.js";
import { Route, Routes } from "react-router-dom";
import { Skills } from "./routes/Skills.js";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/skills" element={<Skills/>} />
     </Routes>
    </>
  );
}

export default App;
