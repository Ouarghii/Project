import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ServicesCards from '../components/Services'
import Video from '../components/Video'


const Services = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='SERVICES.' text='Choose how you want to connect'/>
        <ServicesCards/>
        <Footer/>
    </div>
  )
}

export default Services