

import React from 'react'
import Home from './componts/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Signup from './componts/signup/Signup';
import Login from './componts/login/Login';




function App() {
  return (
    <div>
      

    <Routes>

      <Route element={<Home />} path='/' />
      <Route element={<Signup />} path='/sig' />
      <Route element={<Login />} path='/log' />


    </Routes>
    







      
    </div>
  )
}

export default App

