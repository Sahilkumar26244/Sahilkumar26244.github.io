import React from 'react'
import { Footer } from '../components/Footer'
import { Heroimg } from '../components/Heroimg'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg/>
        <Footer/>
    </div>
  )
}
