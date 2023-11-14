

import React from 'react'
import "./Navbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { useEffect,useState } from 'react';
import axios from "../constant/Axios"
import {message} from "antd"


function Navbar() {

    axios.defaults.withCredentials = true;

   const navigate=useNavigate();
   const [username,setusername]=useState("Account")

   useEffect(()=>{

     axios("/getuserdata").then((respo)=>{

          const result=respo.data

           if(result.flag){

            const{name}=result.data

             setusername(name)
            
            }else{

                  setusername("Account")
            }
        
        }).catch(err=>{


            message.error("somthing worng ")
          
     })


   },[])




    return (
        <div>

            <div className='nave-main'>

                <p className='nave-title'> .URL  </p>

                < AiFillHome onClick={()=>{navigate("/")}} className="nav-home-icon" />

                <div className='nave-drop-main'>

                <Dropdown   >
                    <Dropdown.Toggle className='nav-drop-btn'  variant="success" id="dropdown-basic"   >
                      {
                          username
                      }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        
                        <Dropdown.Item  onClick={()=>{navigate("/log")}}> Login </Dropdown.Item>
                        <Dropdown.Item onClick={()=>{navigate("/save")}} href="#/action-2"> Save </Dropdown.Item>
                       
                    </Dropdown.Menu>
                </Dropdown>


                </div>




            </div>





        </div>
    )
}

export default Navbar
