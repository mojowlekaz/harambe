import React, { useState } from 'react';
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import About from './About';
import Hom from './Home';
import Road from './RoadMap';
import Buy from './Buy';
import {Link } from "react-scroll";
import Gall from './Gallery';





export default function Navbar() {



    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)
const fire = 'http://localhost:3002/'
  return (
    <div>


    <div className='nav'>
        <a> <img style={{width: "100px", height: "100px", }} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} /></a>
            <nav  ref={navRef}>
        <ul>

            <li>
            <Link to="Hom" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Harambe</Link>
            </li>
            <li>
            <Link to="About" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
            </li>
            <li>
            <Link to="Road" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>RoadMap</Link>
            </li>
            <li>
            <Link to="Buy" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>FAQS</Link>
            </li>
            <li>
            <Link to="Gall" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Gallery</Link>
            </li>


            
            <li>
                <button > <label>Connect Wallet</label> </button> 
            </li>
        </ul>
        <button id='btn' className="nav-btn nav-close-btn" onClick={showNav}>
             <FaTimes/>
         </button>
      </nav>

      <button className="nav-btn" onClick={showNav}>
          <FaBars />
         </button>
    </div>
    </div>
  )
}
