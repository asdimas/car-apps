import React from "react";
import Jumbotron from "./Component/Jumbotron";
import NavbarComponent from "./Component/NavbarComponent";
import WhyUs from "./Component/WhyUs";
import Testimonial from "./Component/Testimonial";
import "./HomeComponent.css";
import Service from "./Component/Service";
import CTA from "./Component/CTA";
import FAQ from "./Component/FAQ";
import FooterComponent from "./Component/FooterComponent";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="container-hero">
          <NavbarComponent />
          <Jumbotron />
        </div>
        <Service />
        <WhyUs />
        <Testimonial />
        <CTA />
        <FAQ />
        <FooterComponent />
      </div>
    </>
  );
};

export default Home;
