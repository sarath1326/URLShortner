


import React from 'react'
import "./Signup.css";
import Navbar from '../navbar/Navbar';
import {useFormik} from "formik"
import {validationSchem} from "./schemaSignup"
import { useNavigate } from 'react-router-dom';
import axios from "../constant/Axios";
import {message} from "antd";




function Signup() {

 const navigate=useNavigate()

    const initionValues={
          name:"",
          email:"",
          password:""
    }

    
    const{errors,values,handleChange,handleBlur,handleSubmit,touched}=useFormik({
 
            
               initialValues:initionValues,
               validationSchema:validationSchem,

               onSubmit:(value)=>{

                 axios.post("/sign",value).then((respo)=>{

                  const result=respo.data ;

                  if(result.exit){

                    message.error("This email already exit..")
                  
                  }else if(result.flag){

                     navigate("/log");
                      
                  }else{

                     message.error("server err");
                  }
                
                }).catch(err=>{

                  message.error("somthing worng...! ");


                 })


               }



    })






  return (
    <div>
        <Navbar />

        <div className='signup-main'>

        <div className='sig-form-box-main'>

            <p className='sig-form-title'> Signup </p>

            <form onSubmit={handleSubmit} className='sig-form' >

                <input 
                type="text" 
                placeholder='enter name' 
                name='name'
                onChange={handleChange}
                value={values.name}
                
                /><br/>

                {
                  errors.name && touched.name ?

                   <span> { errors.name}</span>
                   : null
                     
                }
                
                
                <br/><br/>

                <input 
                type="text" 
                placeholder='enter email id' 
                name='email'
                onChange={handleChange}
                value={values.email}
                /><br/>

                {
                    errors.email && touched.email ?

                    <span> {errors.email}</span>
                    : null
                }
                
                
                <br/><br/>
                
                

                <input 
                type="text" 
                placeholder='enter password' 
                name='password'
                onChange={handleChange}
                value={values.password}
                
                /><br/>

                {
                    errors.password && touched.password ?

                  <>  <span> {errors.password} </span><br/> </>

                     : null
                }



                <button type='submit' className='sig-btn'> Signup   </button><br/>

                </form>
               
               
                <button className='google-btn' > <img className='google-img' src='./google.png' />  Google  </button>
                <p className='sig-logopt'  onClick={()=>{navigate("/log")}}  > Have You Already Account ? </p>







           





        </div>




        </div>






      
    </div>
  )
}

export default Signup
