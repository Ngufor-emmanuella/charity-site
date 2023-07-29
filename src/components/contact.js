import React from 'react';
import { useState } from 'react';
import './contact.css';
import Navbar from './navbar';
import america from '../image/american-flag.webp';
import mendown from '../image/two-men-down.jpg';
import dollar from '../image/dollar.jpg';
import trouser from '../image/trouser.jpg';
import Nav from './nav';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => { 

  const [showNav, setShowNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  };

   return ( 
  <div clasName="main-div">
        <div className="head-nav">
          <div className="heading" ><h4>Covid 19 message</h4></div>
          <div className="second-head">

          
            <input  class="input" type="text" placeholder="Search T & SONS HELPING. org" name="search">
              </input>
           
      
          
            <bold className="hambuger" onClick={handleHamburgerClick}><i class="fa-solid fa-bars"></i></bold>
          </div>
        </div>

        <main className="papa" style={{ backgroundImage: `url(${mendown})`}} > 
        
        <div className="america" style={{ backgroundImage: `url(${america})`}}> </div>
      
        <div className="ameri">

        <Nav />


        {showNav && (
        <Navbar />
        )}

        </div>

        
        <div className="welcome">

        </div>

        <div>
          <video autoPlay loop muted> 
              <source  src="/videos/round-hands.mp4" type="video/mp4"/>
          </video>
        </div>
  
  

  </main>

  <div className="contact-form">

  <h1 className="join">BE OUR DONATORS..</h1>

  <div class="coin">
  <div class="side heads">
    <img src={dollar} alt="dollar" />

  </div>
  </div>


  <div class="coins">
  <div class="sided heads">
    <img src={trouser} alt="dollar" />

  </div>
  </div>


    <form action="https://formsubmit.co/49a72ce95db7e0be7a29000003e2d001" method="POST">

      <input
        type="text" name="Name" placeholder="Full Name" className="second-input" required/>
     
      <input type="email" name="Email" placeholder="Email address" className="second-input" required />
      
      <label htmlFor="contract">
       <strong> What kind of assistance / donation do you want to offer? </strong> 
        <br />
        <br />

        <select id="contract" className="select-input" name="Offer">

          <option value="For Injured Military Soldiers">For Injured Military Soldiers</option>
          <option value="For Old / Retired Military Soldiers">For Old / Retired Military Soldiers</option>
          <option value="For Disabled Military Soldiers">For Disabled Military Soldiers</option>
          <option
            value="To Support The Family Of The Deceased or Injured Military Soldiers">
            To Support The Family Of The Deceased or Injured Military Soldiers
          </option>
          <option value="Partnership...">Partnership..</option>
          <option value="Others:">Others:</option>
        </select>
      </label>
      
      <button
        type="submit"
        className="signup-button"
      >
        Submit
      </button>
    </form>

  </div>

  </div>
  
  );
}


export default Contact;