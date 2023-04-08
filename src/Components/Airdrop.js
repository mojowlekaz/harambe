import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "/Users/macbook/token/src/styles/Airdrop.css";
import Button from '@mui/material/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {TbCopy} from "react-icons/tb"
import Axios from "axios";
import supabase from '/Users/macbook/token/src/config/supabaseClient.js'

export default function Airdrop() {

    const [walletAddress, setWalletAddress] = useState("")
    const [enable, setEnable] = useState(false)
    const [count, setCount] = useState(0)
    const [error, setError] = useState('')
    const [click, setClick] = useState(0)
    const [disable, setDisable] = useState(true)
     const [name , setName] = useState("")
     const [copy, setCopy] = useState()
     const [copied, setCopied] = useState(false)
     const [Connecterror, setConnectError] = useState("")

     
    const[pattern , setPattern] = useState('https://twitter.com/')
    const [show, setShow] = useState(false)
    const ethers = require("ethers");
    async function connect(){
        if (typeof window.ethereum !== 'undefined') 
        try{
        const provider = new ethers.providers.Web3Provider(window.ethereum)            
        await provider.send("eth_requestAccounts", []);
        let signer = await provider.getSigner();
        const message = "Verify Your Identity"
        let signedMessage = await signer.signMessage (message);
        const signerAddr = await ethers.utils.verifyMessage(message, signedMessage)
        // setIsSignature(signerAddr)
        console.log("Accounts address:", await signer.getAddress());
        let Accounts = await signer.getAddress();
        // setSignature(signature)
        setWalletAddress(Accounts)
        // setSigned(true)
          } 
          catch(err){
           setConnectError("error")
          }
          else {
            setConnectError("error")
          }
     
        } 

        useEffect( () => {
            // fetch('https://api.crew3.xyz/communities/:subdomain/leaderboard')
            // .then(res => {
            //    return res
            // })
            // .then(data => {
            //     console.log(data)
            // })

        
            const getCount = () => {
               if(count ===1) 
               setDisable(false)
            }

          const getPattern = () => {
            if(!pattern)
            setError('error')
          }
          const getClick = () => {
            if(!pattern)
            setError('error')
          }
            getCount();
            getPattern();
            getClick();
        })


        const handleSubmit = async (e) => {
            // e.preventDefault();
    
            const {data, error} = await supabase 
            .from('applicants')
            .insert({walletAddress})
            .single()
    
    
            if(error){
                console.log(error)
                
            } if(data) {
            //   setRes("tabke")
                console.log(data)
                setError(null)
    
            }
    

    
        }

        const Refferal = 0

          
        
  return (
    <div className='airdrop'>

        
        {/* <button onClick={embedCompetition}>gogo</button> */}
        <a> <img style={{width: "100px", height: "100px", }} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} /></a>
        {/* <Navbar /> */}
        <div className='cont'>
        <div className='slide-right'>
< img className='img' style={{width: '50%', marginTop: '-70px', float: 'right'}} alt='logo' src={(require("/Users/macbook/token/src/assets/hara (6).png"))} />
      </div>
        <article>Get Early Access</article>  <br />
        <aside>to the future of HARAMBE DAO</aside>

        {
                    Connecterror ? <div className='pop'>
                        <h2>Please Connect to metamask</h2>
                        
                    </div>
                    : ""
                }
        <div className='step'>
                    
            <form onSubmit={handleSubmit}>
        <Stepper  orientation='vertical' activeStep={count}>
            <Step   style={{ color:'red'}}>
                <StepLabel color= 'red' ><aside> 
                <input value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} className='inoputtrack' type='url'  placeholder='Enter Your Wallet  Address'/> 
                 </aside></StepLabel>

            </Step> 
            <Step>
                <StepLabel >
                    {
                        walletAddress.length == 11 ? <Button 
                        // disabled={disable}
                        style={{
                            background: 'none',
                            fontSize: '19px', 
                            borderRadius: "25px",
                            backgroundSize:  '0% 3px',
                            color: '#0c1a13',   height:'0px' ,width: '180px', border: "none"
                        }}
                         variant='contained'
                        >
                        <aside><a  onClick={() => {
                            // setClick(1)
                            setCount(+2)
                        }} target="blank" href='https://twitter.com/intent/tweet/?text=APEs are here in %23Hedera ecosystem 👀🦧 Claiming my @Harambe_DAO Access Free Mint NFT at https://harambedao.xyz#BullishAF %23 HBAR %23Hedera %23Apecoin %23nft %23crypto %23memecoin %23memecoinoftheyear %23memecoins'>Share Tweet</a></aside></Button> :
                        <Button 
                        disabled={disable}
                        style={{
                            background: 'none',
                            fontSize: '19px', 
                            borderRadius: "25px",
                            backgroundSize:  '0% 3px',
                            color: '#0c1a13',   height:'0px' ,width: '180px', border: "none"
                        }}
                         variant='contained'
                        >
                        <aside><a  onClick={() => {
                            // setClick(1)
                            setCount(+2)
                        }} target="blank" href='https://twitter.com/intent/tweet/?text=APEs are here in #Hedera ecosystem 👀🦧 
                        Claiming my @Harambe_DAO Access Free Mint NFT at https://harambedao.xyz#BullishAF %23 HBAR %23Hedera %23Apecoin %23nft %23crypto %23memecoin %23memecoinoftheyear %23memecoins'>Share Tweet</a></aside></Button>
                    }
                </StepLabel>
            </Step>
            <Step>
                <StepLabel ><aside>Paste the link to your tweet here: </aside>  <input value={name} onChange={(e) => setName(e.target.value)} className='inoputtrack' type='url'  pattern={pattern}  placeholder='Enter Your Tweet Link'/>  <br />
                {
                    name === pattern || name.length > 45 ? <Button 
                    onClick={() => {
                        setCount(+3)
                    }}
                    // disabled={disable}
                    style={{
                        background: '#fff',
                        fontSize: '19px', 
                        borderRadius: "25px",
                        backgroundSize:  '0% 3px',
                        color: '#0c1a13',   height:'50px' ,width: '180px', border: "none"
                    }}
                     variant='contained'
                    ><aside style={{  color: '#0c1a13'}}>Verify</aside></Button> :  <Button 
                    disabled={disable}
                    style={{
                        background: '#757575',
                        fontSize: '19px', 
                        borderRadius: "25px",
                        backgroundSize:  '0% 3px',
                        color: '#0c1a13',   height:'50px' ,width: '180px', border: "none"
                    }}
                     variant='contained'
                    ><aside style={{  color: '#0c1a13'}}>Verify</aside></Button>
                }
                    </StepLabel>
            </Step>
            <Step>
                <StepLabel>
                    {
            count === 3 ? <a target="blank" href='https://t.co/Ev1DqMkEEY'><button  
            onClick={ () => 
               {
            //    setShow(true)
            setCount(+4)
            //    handleSubmit()
            }} ><label>Join Discord</label></button> </a> :
           <Button 
           onClick={ () => 
               setShow(true)
           }
           disabled={disable}
           style={{
               background: '#757575',
               fontSize: '1px', 
               borderRadius: "25px",
               backgroundSize:  '0% 5px',
               color: '#0c1a13',   height:'50px' ,width: '180px', border: "none"
           }}
            variant='contained'
           ><aside style={{  color: '#0c1a13'}}>Join Discord</aside></Button>
                    }
                </StepLabel>
            </Step>

            <Step>
                <StepLabel>
                    {
            count === 4 ? <a target="blank" href='https://t.me/harambedao2'><button  
            onClick={ () => 
               {
            //    setShow(true)
            setCount(+5)
            }} ><label>Join Telegram</label></button></a> :
           <Button 
           onClick={ () => 
            //    setShow(true)
            setCount(+5)
           }
           disabled={disable}
           style={{
               background: '#757575',
               fontSize: '1px', 
               borderRadius: "25px",
               backgroundSize:  '0% 5px',
               color: '#0c1a13',   height:'50px' ,width: '180px', border: "none"
           }}
            variant='contained'
           ><aside style={{  color: '#0c1a13'}}>  Join Telegram</aside></Button>
                    }
                </StepLabel>
            </Step>

            <Step disabled={true}>
            <StepLabel>
                    {
                        count === 5 && walletAddress.length === 11 ?<button  
                         onClick={ () => 
                            {
                            setShow(true)
                            handleSubmit()
                         }} ><label>Get Airdrop</label></button> :
                        <Button 
                        onClick={ () => 
                            setShow(true)
                        }
                        disabled={disable}
                        style={{
                            background: '#757575',
                            fontSize: '1px', 
                            borderRadius: "25px",
                            backgroundSize:  '0% 5px',
                            color: '#0c1a13',   height:'50px' ,width: '180px', border: "none"
                        }}
                         variant='contained'
                        ><aside style={{  color: '#0c1a13'}}>Get Airdrop</aside></Button>

                    }
                    </StepLabel>
            </Step>
        </Stepper>
        </form>
      {error && <p>error</p>}
        </div> <br />
        {
            show  === true ? 
             <div>
            <aside style={{color:'#fff'}}>Copy Your refferal code:</aside>
               <div className='boxx'    >
               <a style={{color: '#0c1a13'}}>https://harambedao.xyz/#/{walletAddress}</a>
               </div>
               <CopyToClipboard text={`https://harambedao.xyz/#/${walletAddress}`}>
      <button type='button' className='btnn' onClick={() => setCopied(true)}><TbCopy /></button> 
    </CopyToClipboard> 
    <br />
          <aside>Your Refferals: {Refferal}</aside> 
            </div> 
             :
            ""
        }
{copied ? <p style={{color: 'red'}}>Copied!</p> : ""}  
        </div>
     
        </div>
        

  )
}
