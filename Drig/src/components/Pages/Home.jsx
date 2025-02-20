import React from 'react'
import Header from '../Home/Header/Header'
import Banner from '../Home/Banner/Banner'

const Home = () => {
  return (
    <>
     <div className="header-section">
      <Header />
     </div>
     <div className="home-banner-section">
      <Banner />
     </div>
    </>
  )
}

export default Home