

import React from 'react'
import "./Save.css"
import Navbar from '../navbar/Navbar'
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import axios from "../constant/Axios"
import { useEffect, useState } from 'react';
import { message } from "antd"
import { useNavigate } from 'react-router-dom';





function Save() {

    const [getdata, setgetdata] = useState([])
    const naviget=useNavigate()

    useEffect(() => {


        axios("/saveurl").then((respo) => {

            const result = respo.data


            if(result.authfaild){

                naviget("/log")
                  
            }

            if (result.flag) {

                setgetdata(result.data)

                console.log(result.data)


            } else {

                message.error("server err")

            }


        }).catch(err => {

            message.error("somthing worng")
        })




    }, [])








    return (
        <div>

            <Navbar />

            <div className='save-main'>

                <p className='save-title' > Your Save Urls</p>

                <div className="list-box-main">

                    <div className='save-data-box'>

                        {

                            getdata.map((obj) => (


                                <div className='save-url-div' >


                             <a> <span> {obj.short}  </span>   <FaCopy className='save-copy-icon' />  <BiSolidTrashAlt className='save-de-icon' />   </a>



                                </div>




                            ) )


                        }







                    </div>













                </div>






            </div>

        </div>
    )
}

export default Save
