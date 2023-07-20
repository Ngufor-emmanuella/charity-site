import React from 'react';
import './contact.css';
import Navbar from './navbar';
import america from '../image/american-flag.webp';
import mendown from '../image/two-men-down.jpg';
import dollar from '../image/dollar.jpg';
import trouser from '../image/trouser.jpg';

const Contact = () => ( 
  <div clasName="main-div">
        <div className="head-nav">
          <div className="heading" ><h4>Covid 19 message</h4></div>
          <div className="second-head">

          <form action="/">
            <input  class="input" type="text" placeholder="Search T & SONS HELPING. org" name="search">
              </input>
            {/* <button type="submit">Submit</button> */}
          </form>
          
            <h4>Log In</h4>
          </div>
        </div>

        <main className="papa" style={{ backgroundImage: `url(${mendown})`}} > 
        
        <div className="america" style={{ backgroundImage: `url(${america})`}}> </div>
      
        <div className="ameri"> 
        <Navbar />

        </div>

        
        <div className="welcome">
        
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


    <form
      method="POST"
      action="#"
    >
      <input
        name="entry.739549164"
        type="name"
        placeholder="Name"
        className="second-input"
      />
      <input
        name="entry.1253042306"
        type="email"
        placeholder="Email address"
        className="second-input"
      />
      <label htmlFor="contract">
       <strong> What kind of assistance / donation do you want to offer? </strong> 
        <br />
        <br />
        <select
          name="entry.218023131_sentinel"
          id="contract"
          className="select-input"
        >
          <option value="Employment Agreement">For Injured Military Soldiers</option>
          <option value="NDA">For Old / Retired Military Soldiers</option>
          <option value="Founders Agreement">For Disabled Military Soldiers</option>
          <option
            value="Tenancy Agreement
"
          >
            To Support The Family Of The Deceased or Injured Military Soldiers
          </option>
          <option value="Partnership">Partnership..</option>
          <option value="Other:">Others:</option>
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

export default Contact;