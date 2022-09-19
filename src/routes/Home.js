import React from 'react'
import { Footer } from '../components/Footer'
import { Heroimg } from '../components/Heroimg'
import { Navbar } from '../components/Navbar';
import { HeroImg2 } from '../components/HeroImg2';
import { Work } from '../components/Work';
import { AboutContent } from '../components/AboutContent';
import { SkillsContent } from '../components/SkillsContent';
import { Form } from '../components/Form'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg/>
        <br/>
        <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer" />
        <AboutContent/>
        <br/>
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
        <Work/>
        <br/>
        <HeroImg2 heading="SKILLS." text="Tools that I have to use" />
        <SkillsContent/>
        <br/>
        <HeroImg2 heading="CONTACT." text="Lets have a chat" />
        <Form/>

        <Footer/>
    </div>
  )
}


