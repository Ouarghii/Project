import React from 'react'
import './ServicesStyles.css'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> Admin </h3>
                <p>Les tâches principales de l'Administrateur incluent la gestion des clients, leurs types et la réservation des modifications des bases de données </p>
                
                <button  className='btn' onClick={()=>window.location='/registrationa'}>Admin</button>
            </div>
            <div className='card'>
                <h3> User </h3>
                <p >Créer de nouveaux clients , rechercher et mettre à jour leus types </p>
    
                <button  className='btn' onClick={()=>window.location='/registration'}>User</button>
            </div>
   
        </div>

    </div>
  )
}

export default Services