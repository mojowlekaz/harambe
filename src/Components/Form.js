import React, { useEffect, useState } from 'react'
import '/Users/macbook/token/src/styles/Form.css'
import supabase from '/Users/macbook/token/src/config/supabaseClient.js'
import Navbar from './Navbar'

export default function Form() {
    const [email, setEmail] = useState('')
    const [post, setPost] = useState('')
    const [name , setName] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [community , setCommunity] = useState("")
    const [marketing, setMarketing] = useState('Marketing')
    const [development, setDevelopment] = useState('')
    const [promotion, setPromotion] = useState('')
    const [contents, setContents] = useState('')
    const [socials, setSocials] = useState('')
    const [ok, setOk] = useState(false)
    const [res, setRes] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name  || !email || !socials) {
            setError('fill all')
            return
        }

        console.log(email,  name, marketing, community, promotion, contents, development)

        const {data, error} = await supabase 
        .from('applicants')
        .insert([{email, socials, name, marketing , community, contents, development}])
        .single()


        if(error){
            console.log(error)
            
        } if(data) {
          setRes("tabke")
            console.log(data)
            setError(null)

        }

        if(name  || email || socials) {
          setRes('fill all')

      }

    }
  return (
    <div className='form'>
      <div className='navv'>
 <p className='ppp'>   <h2>FILL  FORM </h2></p> <hr />
      </div>  <br />
<form onSubmit={handleSubmit}>
                <div className='inputalign'>
                <span >Name:  {`Hi  ${name} `}</span>
               <input value={name} onChange={(e) => setName(e.target.value)} className='inoputtrack' type='text'  required placeholder='Enter Your  Name'/> 
               </div> <br />

            <div className='inputalign'>
                <span>Email:  &nbsp; {email}</span>
               <input value={email} onChange={(e) => setEmail(e.target.value)} className='inoputtrack' type='email'  required placeholder='Enter Your Email '/>
               </div> <br />

               <div className='inputalign'>
                <span>Socials: </span>
               <textarea value={socials} onChange={(e) => setSocials(e.target.value)} className='inoputtrack1' type='text'  required placeholder='Enter Your Social Links'/>
               </div> <br />

               <div className='inputalign'>
                <span>Choose Your Department: &nbsp;  {marketing}</span>
                <select
                 className='inoputtrack'
                 value={marketing}
                 onChange={(e) => setMarketing(e.target.value)} 
                 >
                    <option value="Marketing">Marketing</option>
                    <option value="Community Feedback">Community</option>
                    <option value="Development">Development</option>
                    <option value="Promotion">Promotion</option>
                    <option value="Youtube/Medium Contents">Contents</option>
               {/* <input value={post} onChange={(e) => setPost(e.target.value)} className='inoputtrack' type='text'  required placeholder='Choose your Dept '/> */}
               </select>
               </div>
               </form> 
               { error ? <p style={{color:'red'}}>please fill all</p> : ""}

               { res  ?  <div  className='pop'>
             <spam> Your responce has been recorded</spam>
            </div>
            : ""
               }
               
               <br />
               <button onClick={() => setOk(true)}>I agree</button>
               <br />
               {ok == false ? 
               <p className='ppp'>"Understand that this is not a paid post, all mmebers in each department will be given some percentage in the revenue <br /> of the project which it can not be disclosed now."
               </p>  :""}
               <br />

               
               {ok === false ?    <span>Click on I agree to continue</span> : <button onClick={handleSubmit}>Submit</button>}



    </div>
  )
}

