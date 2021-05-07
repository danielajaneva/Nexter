import React from "react";

import "./css/main.min.css";

import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import st1 from "./img/story-1.jpeg";
import st2 from "./img/story-2.jpeg";

const App = () => {
  return (
    <div className="container">
      <div class="sidebar">
        <button class="nav-btn"></button>
      </div>
      <Header />
      <Realtors />
      <Features />
      <div class="story__pictures">
        <img src={st1} alt="Couple with new house" class="story__img--1" />
        <img src={st2} alt="New house" class="story__img--2" />
      </div>

      <div class="story__content">
        <h3 class="heading-3 mb-sm">Happy Customers</h3>
        <h2 class="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p class="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button class="btn">Find your own home</button>
      </div>
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
