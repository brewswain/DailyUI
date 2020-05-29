import React from "react";

import { Header, SearchBar } from "../../components";

import "./Landing.styles.scss";

const LandingSection = () => (
  <section className="landing">
    <Header />
    <h1 className="caption">Find your perfect startup job</h1>
    <SearchBar />

    <p className="landing-subtitle">
      Made by{" "}
      <span className="text-highlight">
        <a
          href="https://github.com/brewswain"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Blee,
        </a>
      </span>{" "}
      mock up of{" "}
      <span className="text-highlight">
        <a
          href="https://dribbble.com/shots/7158635-TheHub-Website-Exploration-01/attachments/161786?mode=media"
          target="_blank"
          rel="noopener noreferrer"
        >
          This
        </a>
      </span>
    </p>
  </section>
);

export default LandingSection;
