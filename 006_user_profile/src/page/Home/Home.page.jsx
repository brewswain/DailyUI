import React from "react";

import { Header } from "../../components";

import "./Home.style.scss";

const HomePage = () => (
  <div className="home-page">
    <Header />

    <div className="home-page-container">
      <div className="home-page-content">Main Content Here!</div>
      <div className="home-page-image-container">Profile Picture Here!</div>
    </div>
  </div>
);

export default HomePage;
