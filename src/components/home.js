
import React from 'react';
import { useState } from 'react';
import './about.css';
import './home.css';
import  Navbar from './Navbar';
import Nav from './nav';
import grandpa from '../image/oldpa-daughter.jpg';
import america from '../image/american-flag.webp';
import crippled from '../image/crippled-dad-kids.jpg';
import eating from '../image/old-military-eating.jpg';
 import playing from '../image/military-playing.jpg';
import horse from '../image/charity-watch-logo.jpg';
import house from '../image/house.jpg';
import united from '../image/united-logo.png';
import cfc from '../image/cfc-logo2.jpg';
import charity from '../image/charity-navigator-logo.png';
import platinum from '../image/patinum.jpg';
import instagram from '../image/instagram.jpg';
import facebook from '../image/facebook.jpg';
import twitter from '../image/twitter.jpg';
import handing from '../image/Round-Hands-Design-Logo.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  const [showNav, setShowNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  };

     return (

    <div className="main-div">
      <div className="head-nav">
        <div className="heading" ><h4>Covid 19 message</h4></div>
        <div className="second-head">

        
          <input  class="input" type="text" placeholder="Search T & SONS HELPING. org" name="search">
            </input>
          
      
        
            <bold className="hambuger" onClick={handleHamburgerClick}><i class="fa-solid fa-bars"></i></bold>
        </div>
      </div>

      <main className="papa" style={{ backgroundImage: `url(${grandpa})`}} > 
      
      <div className="america" style={{ backgroundImage: `url(${america})`}}> </div>
     
      <div className="ameri">

        <Nav />
      
         {showNav && (
        <Navbar />
         )}

      </div>
     

    
      <div className="welcome">
      </div>

      <div className="new-logo">
          
          <img src={handing} alt="logo for t & sons" />

      </div>


      <div className="amer">
 
      <h1><span className="color">because   </span> <strong className="white"> A FAMILY'S LOVE  </strong> <span className="color"> is good medicine</span></h1>

      </div>

      </main>

      
        <div className="about">
         

          <div className="about-boxing">

           
            <div className="fix-fix">

              <div>
                <img className="leading1" src={house} alt="couples kissing" />
                      
                      <div class="cover-location">
                        <h4>Locations</h4>
                        <p className="find">Find T & SONS HELPING HANDS FOUNDATION</p>
                      </div>
              </div>

              <div>
                <img className="leading2" src={eating} alt="couples kissing" />
                      
                <div class="cover-location">
                        <h4 className="hero-reflect second-hero">Hero Reflects On T & SONS FOUNDATION</h4>
                        <p className="fix-cover"> Mat. Pat Miller was wounded during the Ft.Hood 
                        shooting and the T & SONS FOUNDATION  was there for his family.</p>
                </div>
              </div>
              
              <div>
                <img className="leading3" src={playing} alt="couples kissing" />
                      
                      <div class="cover-location">
                        <h4>Learn More...</h4>
                        <p>Learn More About T & SONS
                          <br></br>
                          HELPING HANDS FOUNDATION.</p>
                      </div>
              </div>

            </div>

            <div className="big-box">
              <ul className="big-house">

                <li className="house biggy"> <b>A+ Military
                  <br></br>
                  Charity </b> 
                <br></br>
                <span className="red">Supporting All Veterans </span></li>

                
                <br></br>
                

                <li className="house hoho"><b> Rated 4 Stars </b> 
                <br></br>
                </li>
              </ul>

            </div>
          </div>


          <div className="third-div">
            <div className="flex-pic">
              <img src={crippled} alt="man in wheel chair hugging kids" />
              
              <h2>WE STARTED WITH ONE, NOW WE ARE ON THE ROAD TO 100</h2>
              <div className="overlay"></div>

              {/* <div className="put-first">
                

                  <p>ON THE ROAD TO 
                    <br></br>
                    <strong> 100 T & SONS HELPING
                      <br></br>
                       HANDS FOUNDATION</strong>
                  </p>

              </div> */}

            </div>
            <div className="blue-black">
              <h2>Officially on the 
                <br></br>
                Road to 100</h2>

                <img  className="put-img" src={handing} alt="logo for t & sons" />

            </div>
          </div>


          <div className="fallen">
            <div className="fallen-logo">

                  <div className="add-img">
                  <img src={handing} alt="logo for t & sons" />

                  <Link to="/contact" className="submit-button">DONATE</Link>

                  </div>


                <div className="media">

                  <div className="media-m"> 
                  <p>Find Us on Social Media ... </p>

                  <div className="media-media">
                    <img src={instagram} alt="instagram logo" />
                    <img src={facebook} alt="facbook logo" />
                    <img src={twitter} alt="twitter logo" />
                  </div>

                  </div>

                  <div className="fisher-list">
                    <div className="fisher-fish">
                      <h2>About</h2>
                      <ul>
                        <li> Board of Trustees</li>
                        <li> Financial & Annual reports</li>
                        <li> Our Impact </li>
                        <li> FAQ'S</li>
                      </ul>
                    </div>

                    <div className="fisher-fish">
                      <h2>Programs</h2>
                      <ul>
                        <li> Scholarship</li>
                        <li> Hero Miles</li>
                        <li> Hotels for Heroes </li>
                        <li> T & SONS Awards</li>
                      </ul>
                    </div>

                    <div className="fisher-fish">
                      <h2>Get Involved</h2>
                      <ul>
                        <li> Ways to Give</li>
                        <li> Fundraise</li>
                        <li>Upcoming Events </li>
                      </ul>
                    </div>

                    <div className="fisher-fish">
                      <h2>Stories</h2>
                      <ul>
                        <li> New Articles</li>
                        <li> Videos</li>
                        <li>Media Kit </li>
                      </ul>

                    </div>

                    <div className="fisher-fish">
                      <h3 className="hands">T & SONS HELPING HANDS
                        <br></br>
                        Location
                      </h3>
                    </div>

                  </div>

                </div>

                </div>

          </div>

        </div>

        <div className="footer">
          <div className="foot">
             <img src={horse} alt="logo" />

             <img src={united} alt="logo" />

             <img src={cfc} alt="logo" />

             <img src={charity} alt="logo" />

             <img src={platinum} alt="logo" />
          </div>

          <p> &copy; {new Date().getFullYear()} <bold> T & SONS HELPING HANDS FOUNDATION ...6161 Edsall rd Apt 601 Alexandria VA 22304</bold></p>

          
        </div>

    </div>
  );
}


export default Home;