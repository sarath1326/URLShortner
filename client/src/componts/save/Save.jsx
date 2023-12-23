

import React from 'react'
import "./Save.css"
import Navbar from '../navbar/Navbar'
import { BiSolidTrashAlt } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import axios from "../constant/Axios"
import { useEffect, useState } from 'react';
import { message } from "antd"
import { useNavigate } from 'react-router-dom';
import {baseurl} from "../constant/baseurl"








function Save() {

    const [getdata, setgetdata] = useState([])
    const naviget=useNavigate()

    useEffect(() => {


        axios("/saveurl").then((respo) => {

            const result = respo.data


            if(result.authfaild){

                naviget("/log")
                return
                  
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

    const copyfunc=(short)=>{

        

        navigator.clipboard.writeText(`${baseurl}${short}`);
        
        message.success("copy to clipboard ")
       
        


    }


    const deletefunc=(id,index)=>{


        axios.post("/save_delete",{id,index}).then((respo)=>{


            if(respo.data.flag){


              getdata.splice(index,1)
              setgetdata([...getdata])

                  
            }else{

              message.error("server err")
                
            }

             
        }).catch(err=>{


            message.error("somthing worng")
        
        })



    }








    return (
        <div>

            <Navbar />

            <div className='save-main'>

                <p className='save-title' > Your Save Urls</p>

                <div className="list-box-main">

                    <div className='save-data-box'>

                        {

                            getdata.map((obj,index) => (


                                <div className='save-url-div' >


                             <a  href={`${baseurl}${obj.short}`}> <span className='save-name'>{obj.short}  </span></a>   <FaCopy className='save-copy-icon' onClick={()=>{copyfunc(obj.short)}} />  <BiSolidTrashAlt onClick={()=>{deletefunc(obj._id,index)}} className='save-de-icon' />  



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
