import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
