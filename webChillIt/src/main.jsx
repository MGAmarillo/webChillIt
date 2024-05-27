import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home';
import { NavBar } from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Artica} from '../src/Artica/index'
import {Wine} from '../src/Wine/index'
import {ChillItHome} from '../src/ChillItHome/index'
import {Contact} from '../src/Contact/index'
import {AboutUs} from '../src/AboutUs/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
        <NavBar/>
        <Routes>
            <Route path="/artica" element={<Artica/>} />
            <Route path="/" element={<Home />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/home" element={<ChillItHome />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about_us" element={<AboutUs />} />
        </Routes>
    </Router>  
  </React.StrictMode>,
)