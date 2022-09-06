import React, { useState } from 'react'
import {IoMdPersonAdd, IoMdMenu, IoMdClose} from 'react-icons/io'
import {FaBuilding,FaPersonBooth,FaIndustry} from 'react-icons/fa'
import { Link} from 'react-router-dom'
import './Entete.css'
import Entreprise from '../container/Entreprise'
import '../container/Entreprise.css'
import {IoLogOutOutline} from "react-icons/io5"
import {BsPersonPlus} from "react-icons/bs"




const Entete = () => {

    const [active,setActive]= useState(false);
    const [show,setShow] = useState(false)

    const activateNav = ()=>{
        setActive(!active)
    }
  return (
   
   
    <div style={{backgroundColor:'#1A1A1A'}} className={active ? 'head': 'head-mobile'}>

        <div className='menu-icon' onClick={activateNav}>
             
               {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}
             
        </div>
       <nav>
           <ul className={ active ? 'ul-item': 'ul-item oicon'}>
             <li>
                <FaBuilding className='icon' onClick={()=>{
                  window.location='/entreprise'
                }}/>
                
                <Link to ='/entreprise'>Personne Morale</Link>
                
             </li>

             <li>
                <IoMdPersonAdd  className='icon' onClick={()=>{
                  window.location='/clients'
                }}/>
                <Link to='/clients'>Personne Physique</Link>

         
             </li>

             <li>
                <FaPersonBooth  className='icon' onClick={()=>{
                  window.location='/fournisseurs'
                }}/>
                <Link to='/fournisseurs'>Fournisseur</Link>
             </li>

             <li>
                <FaIndustry  className='icon' onClick={()=>{
                  window.location='/boite'
                }}/>
                <Link to='/boite'>Boite Informatique</Link>
             </li>
             <li>
                <BsPersonPlus  className='icon' onClick={()=>{
                  window.location='/autres'
                }}/>
                <Link to='/autres'>Autres</Link>
             </li>


             <li className='nour'>
  
               <IoLogOutOutline style={{marginTop:'300px'}} className='icon' onClick={()=>{
                  window.location='/'
                }}/>
               <Link to='/' style={{marginTop:'300px'}}>Logout</Link>
               
  
             </li>
             

            
           </ul>
        </nav> 
    </div>
    
  )
}

export default Entete