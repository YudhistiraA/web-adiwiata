import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './navbar.css'


function Navbar() {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click)
     
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
     
 
window.addEventListener('resize',showButton)
useEffect(()=>{
    showButton();
}, []);
 
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                <Link to="/"className="navbar-logo" onClick={closeMobileMenu}>
                     ADIWIYATA <i className="fab fa-typo3"></i>    
                </Link>
                 <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fa fa-bars'}/>
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                     
                </li>

                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        galeri
                    </Link>
                     
                </li>


                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Hari penghijauan
                    </Link>
                     
                </li>


                <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle ="btn--outline">SIGN UP</Button>}
               
               </div>
               </nav>  
        </>
    );
} 

export default Navbar
