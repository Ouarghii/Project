import React from 'react'
import './VideoStyles.css'
import { Link } from 'react-router-dom'


import video2 from '../assets/video2.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={video2} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>BIENVENUE DANS NHR</h1>
            <p>Qu'est-ce que vous attendez ?</p>
        
        <div>
            <Link to='/Services' className='btn'>Services</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>

    </div>
  )
}

export default Video