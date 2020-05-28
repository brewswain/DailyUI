import React from "react";

import LandingSection from "../../sections/Landing/Landing.component";
import CategoryGridSection from "../../sections/CategoryGrid/CategoryGrid.component";
import JobGridSection from "../../sections/JobGrid/JobGrid.component";
import StartupsGridSection from "../../sections/StartupsGrid/StartupsGrid.component";

import "./Home.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <LandingSection />
    <CategoryGridSection />
    <JobGridSection />
    <StartupsGridSection />
  </div>
);

export default HomePage;
