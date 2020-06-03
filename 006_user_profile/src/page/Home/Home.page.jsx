import React from "react";

import { Header } from "../../components";
import { ImageContainer, ProfileContent } from "../../partials";

import "./Home.style.scss";

const HomePage = () => (
  <div className="home-page">
    <Header />

    <div className="home-page-container">
      <ProfileContent />
      <ImageContainer />
    </div>
  </div>
);

export default HomePage;
