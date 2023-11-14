

import React from 'react'
import Home from './componts/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Signup from './componts/signup/Signup';
import Login from './componts/login/Login';
import QR from './componts/QR/QR';
import Url from './componts/shorturl/Url';
import Save from './componts/save/Save';




function App() {
  return (
    <div>
      

    <Routes>

      <Route element={<Home />} path='/' />
      <Route element={<Signup />} path='/sig' />
      <Route element={<Login />} path='/log' />
      <Route element={<QR />} path='/qr' />
      <Route element={<Url />} path='/url' />
      <Route element={<Save />} path='/save' />


    </Routes>
    







      
    </div>
  )
}

export default App

