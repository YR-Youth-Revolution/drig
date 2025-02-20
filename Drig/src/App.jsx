import React from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/Pages/AboutUs';
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <AnimatedCursor 
        color="217, 224, 38"  // RGB equivalent of #d9e026
        innerSize={8} 
        outerSize={35} 
        outerAlpha={0.3} 
        innerScale={1}
        outerScale={2}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
