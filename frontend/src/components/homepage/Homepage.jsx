import Header from "../header/Header";
import Donatecard from "./Donatecard";
import Mantra from "./Mantra";
import Story from "./Story";
import Workwithus from "./Workwithus";
import Footer from "../footer/Footer";
import React from 'react';
import Events from "./Events";
import Shop from "./Shop";


const Homepage = () => {
  return (
    <div>
      <Header />
      <Donatecard />
      <Story />
      <Events />
      <Workwithus />
      <Shop />
      <Mantra />
      <Footer />
    </div>
  );
};

export default Homepage;
