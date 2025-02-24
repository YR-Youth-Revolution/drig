import React from 'react'
import Header from '../Home/Header/Header'
import Banner from '../Home/Banner/Banner'
import Scroller from '../Home/Scroller/Scroller'
import ScrollerRight from '../Home/Scroller/ScrollerRight'
import Who from '../Home/Aboutdrig/Who'
import HomeServices from '../Home/HomeServices/HomeServices'
import HomeClients from '../Home/HomeClients/HomeClients'
import HomeCaseStudy from '../Home/HomeCaseStudy/HomeCaseStudy'
import HomeTeam from '../Home/HomeTeam/HomeTeam'

const Home = () => {
  return (
    <>
     <div className="header-section">
      <Header />
     </div>
     <div className="home-banner-section">
      <Banner />
     </div>
     <Scroller />
     <ScrollerRight />
     <div className="who-section">
      <Who />
     </div>
     <div className="home-services-section">
      <HomeServices />
      </div>
     <div className="home-services-section">
      <HomeClients />
      </div>
     <div className="home-services-section">
      <HomeCaseStudy />
      </div>
     <div className="home-services-section">
      <HomeTeam />
      </div>
    </>
  )
}

export default Home