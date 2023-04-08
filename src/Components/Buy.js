import React from 'react'
import "/Users/macbook/token/src/styles/Buy.css";
import { FaList } from 'react-icons/fa';
import { BsFillCaretDownFill} from 'react-icons/bs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function Buy() {
    // const button = document.getElementById("go")
    // const show= document.getElementById("show")

    // show.style.display = "none";

    // button.addEventListener("click", (event) => {
    //     if( show.style.display = "none")
    //     show.style.display = "block";
    // })


  return (
    <div class='Buy'>
      <div>
      <label className='labee'>FAQS</label>
     </div> 
     <div  style={{ border: "1px solid #fff", borderRadius:"5px"}}  className='layout-1'> 
     <div className='tabl'>
     <Accordion  sx={{background: "#0c1a13",}} className='cord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <HelpOutlineIcon  sx={{color: "#fff"}} /> &nbsp; &nbsp;  <Typography  sx={{color: "#fff"}} > What is HARAMBE</Typography>
        </AccordionSummary >
        <AccordionDetails sx={{color: "#fff"}}  >
          <Typography>
          Harambe is a western lowland gorilla who lived at the Cincinnati Zoo from 2014 to 2016, and previously at the Gladys Porter Zoo for 15 years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{background: "#0c1a13",}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
      <HelpOutlineIcon sx={{color: "#fff"}}  /> &nbsp; &nbsp;  <Typography sx={{color: "#fff"}} > Is Minting Free</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{color: "#fff"}} >
          <Typography>
       Yes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{background: "#0c1a13",}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
   <HelpOutlineIcon sx={{color: "#fff"}}  /> &nbsp; &nbsp;  <Typography sx={{color: "#fff"}} > How do you intend to Integrate chatApp with Harambe</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "#fff"}} >
          <Typography>
          We intend to make the Hedera Hashgraph more fun by bringing chads together in a place where they can discuss about different updates and getting involved immediately, the Harambe chatapp would be a place where you can discuss and showcase your nfts for easy location access
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{background: "#0c1a13",}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
     <HelpOutlineIcon  sx={{color: "#fff"}} /> &nbsp; &nbsp;  <Typography sx={{color: "#fff"}} > When is Minting</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color: "#fff"}} >
          <Typography>
      TBA
          </Typography>
        </AccordionDetails  >
      </Accordion>
            {/* <Accordion  sx={{background: "#0c1a13",}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}  />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
   <HelpOutlineIcon sx={{color: "#fff"}}  /> &nbsp; &nbsp;  <Typography sx={{color: "#fff"}} > Is there Airdrop for testers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: "#fff"}} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

     </div>
     </div>
    </div>
  )
}
