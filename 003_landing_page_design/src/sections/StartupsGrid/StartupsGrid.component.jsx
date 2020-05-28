import React from "react";

import STARTUPS_DATA from "../../data/startups.data";
import StartupsTile from "../../components/StartupsTile/StartupsTile.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import JobLocation from "../../components/JobLocation/JobLocation.component";

import "./StartupsGrid.styles.scss";

const StartupsGridSection = () => {
  const { items } = STARTUPS_DATA;

  return (
    <section className="grid-container">
      <h1 className="category-header">Startups</h1>
      <p className="category-subtitle">
        FInd your second home.
        <span className="text-highlight">Set Career Interests</span>
      </p>

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
    </section>
  );
};

export default StartupsGridSection;
