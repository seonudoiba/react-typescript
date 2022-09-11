import React from "react";

import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="mainNav">
        <div className="logo">
          <a href="/">StarrCart</a>
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
        <div className="cart">
        
          <span>
            <BsCart4 color="gray" fontSize="1.5em" />
            <div className="num-cart">1</div>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
