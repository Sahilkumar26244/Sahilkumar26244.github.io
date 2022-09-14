import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImg2 } from '../components/HeroImg2'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat" />
      <Footer/>
    </div>
  )
}
