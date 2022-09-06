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
        <HeroImage heading='SERVICES.' text='NHR est une application trés précieuse qui permet la création d’un espace de travail commun et regroupe l’ensemble des informations propres à chaque usager.'/>
        <ServicesCards/>
        <Footer/>
    </div>
  )
}

export default Services