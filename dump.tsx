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


import {useState} from 'react';

const App = () => {
  // 👇️ const employees: {salary: number;name: string;}[]
  const [employees, setEmployees] = useState<{salary: number; name: string}[]>(
    [],
  );

  return (
    <div>
      <button
        onClick={() =>
          setEmployees(prevEmployees => [
            ...prevEmployees,
            {salary: 100, name: 'Bob'},
          ])
        }
      >
        Add employee
      </button>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>
              salary: {employee.salary} / name: {employee.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;

