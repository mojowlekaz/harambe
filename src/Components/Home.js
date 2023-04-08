import React from 'react';
import { FaHome } from 'react-icons/fa';
import "/Users/macbook/token/src/styles/Home.css";
import { IoIosArrowForward  } from "react-icons/io";
import {FaTelegramPlane, FaTwitter} from "react-icons/fa"

export default function Hom() {
  return (
    <div className='first'>

      <div className='head' id='slide-in'>
        <h1>Harambe </h1>  <br />
        <p>Harambe is a token on  Hedera Hashgraph  with the aim to moving to different chains <br />
           to spread the love and improve the Ape communities through many ecosystem.</p>  <br />
           <a href='https://www.saucerswap.finance/swap/HBAR/0.0.2032074' target="blant"> <button  > <label>Buy $Harambe</label>  < IoIosArrowForward className='icon' color="#081613" 
        style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "3px", left: "" }}  /> </button></a>   <br />

        <div className='socials'>
        <a target="blank" href='https://t.me/harambedao2' style={{marginTop: '15px'}}><span> <FaTelegramPlane size={40} color={"##ffffff"} /></span></a> 
        &nbsp; &nbsp;
    
        <a target="blank" href='https://twitter.com/Harambe_DAO?s=20' style={{marginTop: '15px'}}><span><FaTwitter size={40} color={"##ffffff"} /></span></a> 
        </div>
      </div>
      <div>
      </div>

      <div className='slide-right'>
< img className='img' style={{width: '40%', padding: "50px", float: 'right', borderRadius: '100%'}} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} />
      </div>


      <div className='mobile-center'>
        <div >
        <img className='img' style={{width: '80%'}} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} />
        </div>

        <div>
        <h1>Harambe </h1>  <br />
        <p>Harambe is a token on the Hedera Hashgraph  with the aim to moving to different chains 
           to spread the love and improve the Ape communities through many ecosystem.</p>
        
        </div> <br />
        <a href='https://www.saucerswap.finance/swap/HBAR/0.0.2032074' target="blant">  <button > <label>Buy $Harambe</label>  < IoIosArrowForward className='icon' color="#081613" 
        style={{justifyContent: 'center', alignItems: 'center', position: 'relative', top: "3px", left: "" }}  /> </button> </a>

        
      </div>
    </div>
  )
}
