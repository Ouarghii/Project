import React from 'react'
import './ServicesStyles.css'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Admin -</h3>
                <span className='bar'></span>
                <p >1 BTC</p>
                
                <button  className='btn' onClick={()=>window.location='/registrationa'}>Admin</button>
            </div>
            <div className='card'>
                <h3>- User -</h3>
                <span className='bar'></span>
                <p >1 BTC</p>
    
                <button  className='btn' onClick={()=>window.location='/registration'}>User</button>
            </div>
   
        </div>

    </div>
  )
}

export default Services