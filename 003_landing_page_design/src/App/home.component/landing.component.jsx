import React from "react";

import Header from "./landing.component/header.component";
import SearchBar from "../../../components/search-bar/search-bar.component";

import "./landing.component/landing.styles.scss";

const LandingSection = () => (
  <section className="landing">
    <Header />
    <h1 className="caption">Find the most exciting startup job</h1>
    <SearchBar />

    <p className="landing-subtitle">
      Made by <span className="text-highlight">Rainmaking,</span> and powered by{" "}
      <span className="text-highlight">Danske Bank</span>
    </p>
  </section>
);

export default LandingSection;
