import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImg2 } from '../components/HeroImg2'
import { Navbar } from '../components/Navbar'

export const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer" />
      <Footer/>
    </div>
  )
}
