import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import AboutSection from '../components/About'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='A PROPOS.' text='En savoir plus sur nous.'/>
        <AboutSection/>
        <Footer/>
    </div>
  )
}

export default About