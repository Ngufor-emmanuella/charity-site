import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => (
  <div>
  

  <div className="nav-mobile">

    <Link  className="link-link mobile-nav" to="/">Home </Link>


    <Link  className="link-link mobile-nav" to="/about"> About Us</Link>

    <Link   className="link-link mobile-nav" to="/contact"> Contact Us for more</Link>

  </div>
 
  </div>

);

export default Navbar;