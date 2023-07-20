import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
  
  <div className="nav-links">

    <Link  className="link-link" to="/">Home </Link>


    <Link  className="link-link" to="/about"> About Us</Link>

    <Link   className="link-link" to="/contact"> Contact Us</Link>

  </div>

 
     <video  src="/videos/round-hands.mp4" width="240" height="240" autoPlay loop muted ></video>

  </div>

);

export default Navbar;
