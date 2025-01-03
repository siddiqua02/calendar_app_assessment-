// src/components/Shared/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/admin">Admin</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/calendar">Calendar</Link>
  </nav>
);

export default Navbar;
