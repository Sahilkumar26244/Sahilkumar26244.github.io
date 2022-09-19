import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyles.css"
import react1 from "../assets/react1.jpg"


export const AboutContent = () => {
  return (
    <div className='about' >
        <div className='left' >
            <h1>Who Am I?</h1>
            <p>Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</p>
            <p>Drop a mail👇  kumarsahil8981@gmail </p>
            
            <Link to="/contact" >
                <button className='btn' >Contact</button>
            </Link>
        </div>
        <div className='right' >
            <div className='img-container' >
                <div className='img-stack top' >
                    <img style={{borderRadius:"30%"}} src={react1} alt="img-react" className='img' />
                </div>
                {/* <div className='img-stack bottom' >
                    <img src={react2} alt="img-react" className='img' />
                </div> */}
            </div>
        </div>
    </div>
  )
}
