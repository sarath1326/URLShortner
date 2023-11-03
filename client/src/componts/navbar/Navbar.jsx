

import React from 'react'
import "./Navbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

function Navbar() {

   const navigate=useNavigate();




    return (
        <div>

            <div className='nave-main'>

                <p className='nave-title'> .URL  </p>

                < AiFillHome onClick={()=>{navigate("/")}} className="nav-home-icon" />

                <div className='nave-drop-main'>

                <Dropdown   >
                    <Dropdown.Toggle className='nav-drop-btn'  variant="success" id="dropdown-basic"   >
                       Account
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={()=>{navigate("/log")}}> Login </Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> Another  </Dropdown.Item>
                        <Dropdown.Item href="#/action-3"> Something else </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


                </div>




            </div>





        </div>
    )
}

export default Navbar
