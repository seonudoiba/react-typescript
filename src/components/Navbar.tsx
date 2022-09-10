import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import { Route, Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="mainNav">
        <div className="logo">
            <span >StarrCart</span>
        </div>
        <nav>
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
