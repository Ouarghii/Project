import React from 'react'
import './Wlcm.css'
function Wlcm(props) {
  return (
  
    <div className='carrd text-center'>
        <div className='overflow'>
            <img src={props.imgsrc} alt='img1'  className='card-img-top'></img>
        </div>
        <div className='card-body text-dark'>
          <h4 className='card-title' style={{color:"black"}}>{props.title}</h4>
          <p className='card-text text-secondary'>{props.txt}</p>
           <a href={props.link} className='lk btn btn-outline-success'>{props.btn}</a>
        </div>
        
      
    </div>
   
  )
}

export default Wlcm