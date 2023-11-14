

import React, { useState } from 'react'
import "./Login.css"
import Navbar from '../navbar/Navbar'
import { useFormik } from 'formik'
import {validationSchem} from "./loginSchema"
import { useNavigate } from 'react-router-dom'
import axios from "../constant/Axios"
import {message} from "antd"

function Login() {

    axios.defaults.withCredentials = true;

     
    const navigate=useNavigate();
    
    const initionValues={
        
        email:"",
        password:""

    }

     
    const {errors,values,handleChange,handleBlur,handleSubmit,touched}=useFormik({
        
        initialValues:initionValues,
        validationSchema:validationSchem,

        onSubmit:(value)=>{


             axios.post("/login",value).then((respo)=>{

                const result=respo.data ;

                     if(result.nouser){

                        message.error("This email doesn't match ");

                     }else if(result.flag){

                          navigate("/");
                    
                        }else{

                         message.error("This email and password doesn't match ");
                     }
             })


        }


    })


    return (
        <div>

            <Navbar />

            <div className='login-main'>

                <div className='log-form-box-main'>

                    <p className='log-form-title'> Login </p>

                    <form onSubmit={handleSubmit} className='log-form' >

                       

                        <input
                            type="text"
                            placeholder='enter email id'
                            name='email'
                            onChange={handleChange}
                            value={values.email}
                        /><br />

                        {
                            errors.email && touched.email ?

                                <span> {errors.email}</span>
                                : null
                        }


                        <br /><br />



                        <input
                            type="text"
                            placeholder='enter password'
                            name='password'
                            onChange={handleChange}
                            value={values.password}

                        /><br />

                        {
                            errors.password && touched.password ?

                                <>  <span> {errors.password} </span><br /> </>

                                : null
                        }



                        <button type='submit' className='log-btn'> Login   </button><br/>

                        <p className='log-sigopt' onClick={()=>{navigate("/sig")}} > Create New Account ?   </p>







                    </form>





                </div>




            </div>










        </div>
    )
}

export default Login
