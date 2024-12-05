import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/leads">Leads List</Link>
        </li>
        <li>
          <Link to="/add-lead">Add Lead</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
