import React from 'react'
import "/Users/macbook/token/src/styles/Footer.css";
import {FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {  Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='Foot'>
      <div>
      <a> < img style={{width: '300px'}} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} /></a>
      </div>

      <div className='lay-1'>
      {/* <a style={{marginTop: '0px'}}><span> <FaTelegramPlane size={50} color={"##ffffff"} /></span></a>
        <a style={{marginTop: '0px'}}><span> <FaTwitter size={50} color={"##ffffff"} /></span></a>  <br /> */}
        <a target="blank" href='https://t.me/harambedao2' style={{marginTop: '0px'}}><span> <FaTelegramPlane size={50} color={"##ffffff"} /></span></a> 
        &nbsp; &nbsp;
    
        <a target="blank" href='https://twitter.com/Harambe_DAO?s=20' style={{marginTop: '0px'}}><span><FaTwitter size={50} color={"##ffffff"} /></span></a>  <br />

            <Link style={{textDecoration: "none"}} to="/team"  >Jion Our  team</Link>

      </div>
      <h4 style={{marginLeft: '75px', color: "#fff"}}>&copy; HARAMBE 2023</h4>
    </div>
  )


}
