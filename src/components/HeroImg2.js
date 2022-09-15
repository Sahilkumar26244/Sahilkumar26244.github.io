import React from 'react'
import "./HeroImg2Styles.css"

export const HeroImg2 = ({heading,text}) => {
  return (
    <div className='hero-img' >
        <div className='heading' >
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
