import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home';
import { NavBar } from './NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Home />  
  </React.StrictMode>,
)
