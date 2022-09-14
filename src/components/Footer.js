import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-container" >
            <div className="left" >
                <div className="location" >
                    <FaHome size={20} style={{color:"white" , marginRight:"2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Bangelore</p>
                    </div>
                </div>
                <div className="phone" >
                    <h4>
                    <FaPhone size={20} style={{color:"white" , marginRight:"2rem"}} />
                    +91 7004190523
                    </h4>
                </div>
                <div className="email" >
                    <h4>
                    <FaMailBulk size={30} style={{color:"white" , marginRight:"2rem"}} />
                    kumarsahil8981@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right" >
                <h4>
                    About Me!
                </h4>
                <p>This is me Sahil Kumar. Masai Student . I enjoy discussing new projects and design challenges</p>
                <div className="social" >
                    <FaFacebook size={30} style={{color:"white" , marginRight:"2rem"}} />
                    <FaTwitter size={30} style={{color:"white" , marginRight:"2rem"}} />
                    <FaLinkedin size={30} style={{color:"white" , marginRight:"2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}
