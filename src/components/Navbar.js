import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
  
  {/* <div className="nav-links">

    <Link  className="link-link" to="/">Home </Link>


    <Link  className="link-link" to="/about"> About Us</Link>

    <Link   className="link-link" to="/contact"> Contact Us</Link>

  </div> */}

  <div className="nav-mobile">

    <Link  className="link-link mobile-nav" to="/">Home </Link>


    <Link  className="link-link mobile-nav" to="/about"> About Us</Link>

    <Link   className="link-link mobile-nav" to="/contact"> Contact Us</Link>

  </div>
 
  </div>

);

export default NavBar;