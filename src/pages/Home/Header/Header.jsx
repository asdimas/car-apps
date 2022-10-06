import React from "react";
import NavbarComponent from "../Component/NavbarComponent";
import Jumbotron from "../Component/Jumbotron";
import "../HomeComponent.css";

const Header = () => {
  return (
    <>
      <div className="container-hero">
        <NavbarComponent />
        <Jumbotron />
      </div>
    </>
  );
};

export default Header;
