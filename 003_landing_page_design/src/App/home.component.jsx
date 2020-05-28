import React from "react";

import LandingSection from "./home.component/landing.component";
import CategoryGridSection from "../../sections/grid-container/grid-container.component";

import "./home.component/home.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <LandingSection />
    <CategoryGridSection />
  </div>
);

export default HomePage;
