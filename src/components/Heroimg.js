import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.png"
import { Link } from "react-router-dom";

export const Heroimg = () => {
  return (
    <div className="hero" >
        <div className="mask" >
          <img className="into-img" src={IntroImg} alt="IntroImg" />
          
        </div>
        <div className="content" >
          <p>HI 👋 , I AM <strong>SAHIL</strong></p>
          <h1>MERN Developer .</h1>
          <div>
            <Link to="/project" className="btn" >
                Projects
            </Link>
            <Link to="/contact" className="btn btn-light" >
                Contacts
            </Link>
          </div>
        </div>
    </div>
  )
}
