import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
  
  <div className="nav-links">

    <Link  className="link-link" to="/">Home </Link>


    <Link  className="link-link" to="/about"> About Us</Link>

    <Link   className="link-link" to="/contact"> Contact Us</Link>

  </div>


  </div>
)

export default Nav;