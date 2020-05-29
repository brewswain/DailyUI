import React from "react";

import { STARTUPS_DATA } from "../../data";
import { StartupsTile, CustomButton, JobLocation } from "../../components";

import "./StartupsGrid.styles.scss";

const StartupsGridSection = () => {
  const { items } = STARTUPS_DATA;

  return (
    <section className="grid-container startups-grid">
      <div className="internal-wrapper">
        <div className="caption-container">
          <h1 className="category-header">Startups</h1>
          <p className="category-subtitle">
            FInd your second home.
            <span className="text-highlight">Set Career Interests</span>
          </p>
        </div>

        <div className="grid-tiles-container">
          {items.map((item) => (
            <StartupsTile
              key={item.id}
              companyLogo={item.companyLogo}
              companyName={item.companyName}
              companyDetails={item.companyDetails}
              companyCategory={item.companyCategory}
              location={item.location}
              openings={item.openings}
            />
          ))}
        </div>

        <CustomButton>Show all startups</CustomButton>

        <JobLocation />
      </div>
    </section>
  );
};

export default StartupsGridSection;
