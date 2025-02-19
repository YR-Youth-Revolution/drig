import React from 'react'
import Home from './components/Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/Pages/AboutUs';


const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
       </Routes>
     
     
     </BrowserRouter>   
     
    </>
  )
}
  
export default App