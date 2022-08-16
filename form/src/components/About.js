import React from 'react'
import computer1 from '../assets/computer1.jpg'
import computer2 from '../assets/computer2.jpg'
import {Link} from 'react-router-dom'
import './AboutStyles.css'

const About = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>A propos</h1>
            <p>Notre application assure la bonne gestion des clients .Elle permet de simplifier les démarches administratives et facilite le quotidien des employés en
termes de communication et leur font bénéficier d'un gain de temps non négligeable.Ce qui prouve bien leur utilité au sein d'une entreprise.
 </p>
            <Link to='/contact'> <button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={computer2} className='img' alt=''/>
                </div>
                <div className='image-stack bottom'>
                    <img src={computer1} className='img' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About