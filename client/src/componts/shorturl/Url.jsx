


import React from 'react'
import "./Url.css"
import Navbar from '../navbar/Navbar'
import { useState } from 'react'
import { BiLinkExternal, BiSolidTrashAlt } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import { Oval } from 'react-loader-spinner'
import axios from "../constant/Axios"
import { message } from "antd"
import {baseurl} from "../constant/baseurl"
import { useNavigate } from 'react-router-dom';





function Url() {

    const [input, setinput] = useState('')
    const [short, setshort] = useState("")
    const [loding, setloding] = useState(false)
    const [flag, setflag] = useState(false)
    const [res, setres] = useState()

    const navigate=useNavigate()

    const create = () => {

        setloding(true)

        if (input && short) {

            const data = {

                url: input,
                short: short

            }

            axios.post("/createurl", data).then((respo) => {

                const result = respo.data

                if(result.authfaild){

                      navigate("/log")
                      return
                }

                setres(result.data)
                setloding(false)
                setflag(true)
                setinput('')
                setshort('')



            }).catch(err => {

                message.error("server err")
                setloding(false)
            })


        } else {

            message.error("enter err")
            setloding(false)

        }

    }




    return (
        <div>

            <Navbar />

            <div className='qr-home'>


                <div className='input-div-main'>

                    <input
                        type='text'
                        className='qr-inp'
                        placeholder='paste your url'
                        onChange={(e) => { setinput(e.target.value) }}
                        value={input}

                    />
                    <br /> <br />

                    <input

                        type='text'
                        className='qr-inp'
                        placeholder='Enter Short Name '
                        onChange={(e) => { setshort(e.target.value) }}
                        value={short}




                    />

                    < button onClick={create} className='qr-gen-btn'> Genarate Short Url   </button>



                </div>


                <div className='url-res-box-main'>

                    {
                        loding ?

                            <div className='url-loding'>

                                <Oval
                                    height={40}
                                    width={40}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />



                            </div>



                            :

                            <>
                                {

                                    flag ?

                                    <>

                                       <a href={`${baseurl}${res.short}`}> <p className='url-res-p'> <BiLinkExternal className='url-link-icon' />{res.short}   </p> </a>

                                        <p className='url-icons'>  <FaCopy className='url-copy-icon' />  <BiSolidTrashAlt className='url-de-icon' /> </p>


                                    </>

                                    : null


                                }

                            </>


                    }



                </div>




  










            </div>








        </div>
    )
}

export default Url
