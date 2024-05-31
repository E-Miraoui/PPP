import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaHome,FaCity,FaCalendarAlt   } from "react-icons/fa";
import { MdSignpost } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoBriefcase } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import './experience.css'



import  "./form.css";


const Experience  = () => {
   
    return(
        
        <div className="wrapper-experience" >
        <div className="form-box login">
        <form action="">
          <h1> Professional Experience </h1>
          <div className="input-box">
             <input type="text"
             placeholder='city' required />
            <FaCity  className="icon"/>

          </div>

          <div className="input-box">
            <input type="text"
            placeholder='Description' required />
            <TbFileDescription className="icon"/>

          </div>
          <div className="input-box">
            <input type="text"
            placeholder='Company name' required />
            <FaCalendarAlt  className="icon"/>

          </div>
          <div className="input-box">
            <input type="text"
            placeholder='Finish Year' required />
            <FaCalendarAlt  className="icon"/>

          </div>
          <div className="input-box">
       <input type="text"
       placeholder='Finish month' required />
       <FaCalendarAlt  className="icon"/>

     </div>
     <div className="input-box">
            <input type="text"
            placeholder='Position' required />
            <IoBriefcase  className="icon"/>

          </div>
          <div className="input-box">
       <input type="text"
       placeholder='Start Month' required />
       <FaCalendarAlt  className="icon"/>

     </div>
     <div className="input-box">
       <input type="text"
       placeholder='Start year' required />
       <FaCalendarAlt  className="icon"/>

     </div>
     
   
        
          <button type="submit">Intrests & languages
          <CiLocationArrow1  className="icon"/> </button>
          
       </form>
  </div>
  </div>
  
        
    );

};

export default Experience;