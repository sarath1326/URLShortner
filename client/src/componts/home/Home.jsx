

import React from 'react'
import "./Home.css";
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "../constant/Axios"


function Home() {

  const navigate=useNavigate()

  const [input,setinput]=useState('')
  const [short,setshort]=useState('')
  const [getdata,setgetdata]=useState('')
  // const [baseurl,setbaseurl]=useState("http://localhost:3001/redirect?short=")

  const baseurl="http://localhost:3001/redirect?short="

  const create=()=>{

        const data={

            url:input,
            short:short
        }
        
        axios.post("/createurl",data).then((respo)=>{

           console.log(respo.data.data)

           setgetdata(respo.data.data)

           
        }).catch(err=>{

           
        })


       
  }





  return (
    <div>

      <Navbar />

      <div className='home-main'>


        <div >

          <button onClick={()=>{navigate("/url")}} className='home-btn-url'> Shotr Url </button>

          <button onClick={()=>{navigate("/qr")}} className='home-btn-qr'> QR Code </button>



        </div>

       


     </div>







    </div>
  )
}

export default Home
