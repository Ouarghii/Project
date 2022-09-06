import React ,{useState} from 'react'
import './NavbarStyles.css'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color,setColor]=useState(false);

    const changeColor =()=>{
        if(window.scrollY >=100)
        {
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
   window.addEventListener('scroll',changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link style={{textDecoration:'none'}}to='/'><h1>NHR</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>Acceuil</Link>
            </li>
            <li>
                <Link style={{color:'white',textDecoration:'none'}} to='/services'>Services</Link>
            </li>
            <li>
                <Link style={{color:'white',textDecoration:'none'}} to='/about'>A propos</Link>
            </li>
            <li>
                <Link style={{color:'white',textDecoration:'none'}}to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}> 
        {click ?(<FaTimes size={20} style={{color: '#fff'}}/> ) : (<FaBars size={20} style={{color: '#fff'}}/>) }
            
        </div>

    </div>
  )
}

export default Navbar