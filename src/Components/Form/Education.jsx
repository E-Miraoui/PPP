import React, { useState } from "react";
import { FaUsern, FaSchool, FaCalendarAlt,FaArrowRight   } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";

import { GrCertificate } from "react-icons/gr";

import './Education.css';

const Education = () => {

    return(
    

   <div className="page">
             <div className="wrapper-box" >
                  <div className="form-box login">
                  <form action="/experience">
                    <h1> Education </h1>
                    <div className="input-box">
                      <input type="text"
                      placeholder='Insitute Name' required />
                      <FaSchool  className="icon"/>
                    </div>
                    <div className="input-box">
                      <input type="text"
                      placeholder='Degree' required />
                      <GrCertificate className="icon"/>

                    </div>
                    <div className="input-box">
                      <input type="text"
                      placeholder='Last month' required />
                      <FaCalendarAlt  className="icon"/>

                    </div>
                    <div className="input-box">
                      <input type="text"
                      placeholder='Last Year' required />
                      <FaCalendarAlt  className="icon"/>

                    </div>
                    <div className="input-box">
                 <input type="text"
                 placeholder='Start month' required />
                 <FaCalendarAlt  className="icon"/>

               </div>
               <div className="input-box">
                 <input type="text"
                 placeholder='Start year' required />
                 <FaCalendarAlt  className="icon"/>

               </div>
               
             
                  
                    <button type="submit">Professional experience
                    <CiLocationArrow1  className="icon"/> </button>
                    
                 </form>
            </div>
            </div>
            </div> 
            

    );

};

export default Education ; 