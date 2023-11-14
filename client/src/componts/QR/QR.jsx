

import React from 'react'
import "./QR.css"
import Navbar from '../navbar/Navbar'
import { useState } from 'react'
import qr from "qrcode"
import { message } from "antd"
import { saveAs } from "file-saver"

function QR() {

    const [input, setinput] = useState('')
    const [qrvalue, setqrvalue] = useState("")
    const [flag, setflag] = useState(false)

    const genqr = () => {

        qr.toDataURL(
            input,
            {

                color: {

                    dark: "#335383FF",
                    light: "#EEEEEEFF"
                }

            },
            (err, url) => {

                if (err) {

                    message.error("errrr")
                    return

                }

                setqrvalue(url)
                console.log(url)

                setflag(true)
            }
        )
    }


    const downloadfunc = () => {

        saveAs(qrvalue, "qrimage.jpg")
    }

    const qrcancel = () => {

        setqrvalue('')
        setflag(false)
        setinput("")


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

                    < button onClick={genqr} className='qr-gen-btn'> Genarate QR   </button>



                </div>


                <div className='qr-div-main'>

                    {

                        flag ?


                            <div className='qr-box'>

                                <img className='qr-img' src={qrvalue} alt='loding...' />

                            </div>

                            : null

                    }



                </div>


                <div className='btn-main'>

                    {

                        flag ?

                            <>

                                <button className='dwn-btn' onClick={downloadfunc}>  download </button>

                                <button onClick={qrcancel} className='can-btn' >  Cancel   </button>

                              

                            </>

                            : null


                    }




                </div>








            </div>







        </div>
    )
}

export default QR
