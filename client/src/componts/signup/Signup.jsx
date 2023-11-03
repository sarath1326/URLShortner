


import React from 'react'
import "./Signup.css";
import Navbar from '../navbar/Navbar';
import {useFormik} from "formik"
import {validationSchem} from "./schemaSignup"
import { useNavigate } from 'react-router-dom';

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

                 console.log(value)


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
                <p className='sig-logopt'  onClick={()=>{navigate("/log")}}  > Have You Already Account ? </p>







            </form>





        </div>




        </div>






      
    </div>
  )
}

export default Signup