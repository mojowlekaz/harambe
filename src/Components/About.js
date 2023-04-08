import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "/Users/macbook/token/src/styles/About.css";
import { useNavigate } from 'react-router-dom';


export default function About() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/whitelist');
  }

  return (
    <div className='About'>
      <div className='box'>
        <div className='inner-text'>
        <label className='labe'>About Project</label> 
        < img className='img-ha' style={{width: '300px', float: 'right'}} alt='logo' src={(require("/Users/macbook/token/src/assets/images-1.jpeg"))} /> <br /> <br />
        <p className='p'>

        Harambe (May 27, 1999 – May 28, 2016) was a western lowland <br />
        gorilla who lived at the Cincinnati Zoo from 2014 to 2016, andv<br />
         previously at the Gladys Porter Zoo for 15 years. On May 28, 2016, <br />
          a three-year-old boy climbed into a gorilla enclosure at the Cincinnati <br />
          Zoo and Botanical Garden where he was grabbed and dragged by Harambe.<br />
           Fearing for the boy's life, a zoo worker shot and killed Harambe. The incident <br />
            was recorded on video and received broad international coverage and commentary, <br />
            including controversy over the choice to use lethal force. A number of primatologists <br />
             and conservationists wrote later that the zoo had no other choice under the circumstances, <br />
            and that it highlighted the danger of zoo animals near humans and the need for better standards of care.His
             death sparked controversy and Harambe soon became a social media icon. And Twitter still hasn't forgotten him, then we bring our project
              to support and build a community for which is called HarambeDAO. HarambeDao project consist of NFT, chat application, and token.
          </p>    <br /> <br /><br /><br /> <br /> <br /> 

        
        </div> <br /> <br />
        <div className='inner-text-1'>
 <button style={{width: "200px", height: "50px"}} onClick={handleClick} > <label style={{fontSize: "18px"}}>Get Airdrop</label> </button> 
        </div>

      <div className='boo'>
      <label className='labe'>About Project</label> 
      <p className='t'>

Harambe (May 27, 1999 – May 28, 2016) was a western lowland 
gorilla who lived at the Cincinnati Zoo from 2014 to 2016, andv
 previously at the Gladys Porter Zoo for 15 years. On May 28, 2016, 
  a three-year-old boy climbed into a gorilla enclosure at the Cincinnati 
  Zoo and Botanical Garden where he was grabbed and dragged by Harambe.
   Fearing for the boy's life, a zoo worker shot and killed Harambe. The incident 
    was recorded on video and received broad international coverage and commentary, 
    including controversy over the choice to use lethal force. A number of primatologists 
     and conservationists wrote later that the zoo had no other choice under the circumstances, 
    and that it highlighted the danger of zoo animals near humans and the need for better standards of care.  <br />  
    His death sparked controversy and Harambe soon became a social media icon. And Twitter still hasn't forgotten him,
     then we bring our project to support and build a community for which is called HarambeDAO. HarambeDao project consist of NFT, chat application, and token.
  </p> 

        <Link to='whitelist'>  <button style={{width: "200px", height: "50px"}} > <label style={{fontSize: "18px"}}>Get Airdrop</label> </button> </Link>
     </div> <br />

      </div>
     {/* MOBILE VIEW */}

    </div>
  );
}

