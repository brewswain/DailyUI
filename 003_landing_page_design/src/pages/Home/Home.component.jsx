import React from "react";

import {
  LandingSection,
  CategoryGridSection,
  JobGridSection,
  StartupsGridSection,
} from "../../sections";

import { Footer } from "../../components";

import "./Home.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <LandingSection />
    <CategoryGridSection />
    <JobGridSection />
    <StartupsGridSection />
    <Footer />
  </div>
);

export default HomePage;
