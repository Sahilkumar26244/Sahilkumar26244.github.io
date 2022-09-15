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
            <a href="https://drive.google.com/file/d/1kME-CswR7QdcIpB5SSK33ZpbLnHS4Hmq/view?usp=sharing" className="btn" >
                Resume
            </a>
            <Link to="/contact" className="btn btn-light" >
                Contacts
            </Link>
          </div>
        </div>
    </div>
  )
}
