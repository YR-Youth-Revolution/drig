import React from 'react'
import Home from './components/Pages/Home'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
     
     
     </BrowserRouter>   
     
    </>
  )
}

export default App