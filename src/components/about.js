import React from 'react';
import { useState } from 'react';
import './about.css';
import america from '../image/american-flag.webp';
import lovecouples from '../image/love-couples.jpg';
import crippled from '../image/crippled-dad-kids.jpg';
import leadership from '../image/leadership.jpg';
import eating from '../image/old-military-eating.jpg';
import parent from '../image/us-two.jpg';
import trust from '../image/us1.jpg';
import bottle from '../image/bottle-money.jpg';
import playing from '../image/military-playing.jpg';
import familyimpact from '../image/family-impact.jpg';
import crippledstaffs from '../image/crippled-staffs.jpg';
import horse from '../image/charity-watch-logo.jpg';
import united from '../image/united-logo.png';
import cfc from '../image/cfc-logo2.jpg';
import charity from '../image/charity-navigator-logo.png';
import platinum from '../image/patinum.jpg';
import instagram from '../image/instagram.jpg';
import facebook from '../image/facebook.jpg';
import twitter from '../image/twitter.jpg';
import handing from '../image/Round Hands Design Logo .jpg';
import { Link } from 'react-router-dom';
import Navbar from './navbar';


const About = () => {
  const [showNav, setShowNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  }

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

      <main className="papa" style={{ backgroundImage: `url(${parent})`}} > 
      
      <div className="america" style={{ backgroundImage: `url(${america})`}}> </div>
     
      <div className="ameri"> 
      {
        showNav && (
          <Navbar />
        )
      }
    

      </div>

      
      <div className="welcome">
       
      </div>
      
      

      </main>

      
        <div className="about">
          <h1>About</h1>

          <div className="about-box">

            <div className="about-text">
              <p><strong className="strong">
              T & SONS HELPING Hands Foundation builds comfort homes where military & veteran families can 
              stay free of charge, while a loved one is in the hospital.
              </strong>
              <br>
              </br>
              <br>
              </br>

              These homes are located at military and VA medical centers around the world.
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>


              T & SONS HELPING Hands Foundation have up to 21 suites, with private bedrooms and baths. Families share a 
               kitchen, laundry facilities, a warm dining room, and an inviting living room.
               <br>
              </br>
              <br>
              </br>


              Since inception, the program has saved military and veterans’ families 
              an estimated $20 million in out-of-pocket costs for lodging and transportation.

              <br>
              </br>
              <br>
              </br>

              T & SONS HELPING Hands Foundation also operates the Hero Miles program, using donated 
              frequent flyer miles to bring family members to the bedside of injured service members as well
               as the Hotels for Heroes program using donated hotel points to allow family members to stay at
              hotels near medical centers without charge. The Foundation also manages a grant program that
                supports other charities
               and scholarship funds for military children, spouses, and children of fallen and disabled veterans.
               <br>
              </br>
              <br>
              </br>

              <h2 className="second-head">By The Numbers</h2>
              <br>
              </br>
              <br>
              </br>

              <ul className="unordered-list">
                <li> Daily capacity: 500 families </li>
                <br>
              </br>
                <li> Families served: More than 500 since inception </li>
                <br>
              </br>
                <li> Number of lodging days offered: 1 million + </li>
                <br>
              </br>
                <li> 1,000 students have received $2,000,000 in scholarship awards </li>
                <br>
              </br>
                <li> Over 100 airline tickets provided by Hero Miles to service members and their families, worth nearly $50 million</li>
                <br>
              </br>

              </ul>
              </p>

            </div>

            <div className="about-grid">

              <div className="flip-cards">
                 <div class="book">
                 <img className="lead" src={lovecouples} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Our History</p>
                    </div>
                </div>

                <div class="book">
                 <img className="lead" src={ leadership } alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Leadership</p>
                    </div>
                </div>

                <div class="book">
                 <img className="lead" src={crippled} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Our Impact</p>
                    </div>
                </div>
              </div>

              <div className="flip-cards">

              <div class="book">
                 <img className="lead" src={trust} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Board of Trustees</p>
                    </div>
                </div>

                <div class="book">
                 <img className="eating" src={bottle} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Financials</p>
                    </div>
                </div>

                <div class="book">
                 <img className="lead" src={eating} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Our Mission</p>
                    </div>
                </div>


              </div>

              <div className="flip-cards">

              <div class="book">
                 <img className="lead" src={playing} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Events</p>
                    </div>
                </div>

                <div class="book">
                 <img className="lead" src={familyimpact} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Our Passion</p>
                    </div>
                </div>

                <div class="book">
                 <img className="lead" src={crippledstaffs} alt="couples kissing" />
                      
                    <div class="cover">
                      <p>Our Goals</p>
                    </div>
                </div>

              </div>

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

          <p> &copy; {new Date().getFullYear()} <bold> T & SONS Helping Hands Foundation ...6161 Edsall rd Apt 601 Alexandria VA 22304</bold></p>

          
        </div>

    </div>
  );
}

export default About;