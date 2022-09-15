import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImg2 } from '../components/HeroImg2'
import { Navbar } from '../components/Navbar'
import { SkillsContent } from '../components/SkillsContent'

export const Skills = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="SKILLS." text="Tools that I have to use" />
        <SkillsContent/>
        <Footer/>
    </div>
  )
}
