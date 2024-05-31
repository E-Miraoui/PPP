import React, { useState } from "react";
import "./Welcome.css";
import image1 from '../Assets/Ali.jpg'
import image2 from '../Assets/rania.jpg'
import image3 from '../Assets/mahdi.jpg'


const Welcome = () => {
    return (
        <div>
             <div className="welcome-page">
            
            <div className="home" >  <h1>YOUR SUCCESS STORY</h1>
              </div>
           
             </div>
        
            <div className="home-sous" > <h2> 
                 STARTS WITH A RESUME </h2> </div>
           
             
        

             <div>
             <button className="button"> Get Started </button>
        </div>

        <div className="content-container"> {/* Container for content sections */}

             <div className="image-section"> {/* First content section */}
                <img src={image1} alt="Image 1" class="oval-image"/> {/* Add your image path */}
                
                <p><b>Ali: </b>I spent 6 months obsessively worrying about my resume 
                but when I found your platform, it was fixed</p>
             </div>
             <div className="image-section"> {/* Second content section */}
                <img src={image2} alt="Image 2" class="oval-image" /> {/* Add your image path */}
          
          <p> <b>Rania: </b>Very mediocre platform. It takes too long to generate a resume. </p>
          
             </div>
            <div className="image-section"> {/* Second content section */}
                <img src={image3} alt="Image 3" class="oval-image" /> {/* Add your image path */}
         
          <p> <b>Mahdi: </b>Best investment I’ve made in a long time. My resume has never received so much positive feedback .</p>
         
             </div>
        </div>
        <div className="about_us">
            

        </div>

        </div>
    );
};

export default Welcome;