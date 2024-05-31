import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaHome,FaCity,   } from "react-icons/fa";
import { MdSignpost } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


import  "./form.css";


const Formdata  = () => {
   
    return(
        
        <div className="page">
              <div className="wrapper-data" >
                    <div className="form-box login">
                        <form action="/Education">
                         <h1>Personal Data</h1>
                        <div className="input-box">
                        <input type="text"
                        placeholder='First Name' required />
                      <FaUser className="icon"/>
                         </div>
                        <div className="input-box">
                         <input type="text"
                        placeholder='Last Name' required />
                      <FaUser className="icon"/>
                        </div>
                        <div className="input-box">
                      <input type="text"
                      placeholder='Phone Number' required />
                      <FaPhone  className="icon"/>

                     </div>

                        <div className="input-box">
                      <input type="text"
                      placeholder='Address' required />
                      <FaHome  className="icon"/>

                        </div>
                     <div className="input-box">
                      <input type="text"
                      placeholder='city' required />
                      <FaCity  className="icon"/>

                         </div>
                        <div className="input-box">
                        <input type="text"
                      placeholder='Postal Number' required />
                      <MdSignpost  className="icon"/>

                         </div>
                    <div className="input-box">
                      <input type="email"
                      placeholder='email' required />
                      <IoIosMail className="icon"/>
                    </div>
                    
                   
                        <button type="submit">Education 
                          <CiLocationArrow1  className="icon"/>
                        </button>
                    
                 </form>
            </div> 
        </div>
        </div>
        
    );

};

export default Formdata;