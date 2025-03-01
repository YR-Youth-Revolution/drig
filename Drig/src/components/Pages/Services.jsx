import React from "react";
import ServicesBanner from "../Services/ServicesBanner/ServicesBanner";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import AllServices from "../Services/AllServices/AllServices";

const Services = () => {
  return (
    <>
      <div className="header-section">
        <Header />
      </div>
      <section className="services-banner-section">
        <ServicesBanner />
      </section>
      <section className="services-all-section">
        <AllServices />
      </section>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
};

export default Services;
