import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyles.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

export const AboutContent = () => {
  return (
    <div className='about' >
        <div className='left' >
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure websites for mu clients.</p>
            <Link to="/contact" >
                <button className='btn' >Contact</button>
            </Link>
        </div>
        <div className='right' >
            <div className='img-container' >
                <div className='img-stack top' >
                    <img src={react1} alt="img-react" className='img' />
                </div>
                <div className='img-stack bottom' >
                    <img src={react2} alt="img-react" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}
