import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './App.css'
import ToDoList from './Pages/ToDoList';
import Forms from './Pages/Forms';

export default function App() {
  return (
  <BrowserRouter>
      <div className="mainContainer">

         <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/todo" element={<ToDoList />} />
          <Route path="/forms" element={<Forms />} />

        </Routes>

      </div>
    </BrowserRouter>
  )
}