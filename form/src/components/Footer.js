import React from 'react'
import './FooterStyles.css'
import {FaFacebook,FaLinkedin,FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer' style={{'background-color':'#000'}}>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>
                
                <div>
                    <p>-Tunisie-</p>
                </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>1-800-123-1234</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color:'#ffffff',marginRight:'2rem'}}/>NHR-holding@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>A propos de nous</h4>
<p>L'objectif n°1 de notre groupe a toujours été et demeure la sécurité de nos collaborateurs. La sécurité de nos salariés est pour nous une préoccupation constante et majeure dans notre quotidien.</p>
                 <div className='social'>
                        <FaFacebook size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#ffffff',marginRight:'1rem'}}/>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Footer