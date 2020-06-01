import React from "react";

import { JOB_DATA } from "../../data";
import { JobTile, CustomButton } from "../../components";

import "./JobGrid.styles.scss";

const JobGridSection = () => {
  const { items } = JOB_DATA;

  return (
    <section className="grid-container jobs-grid">
      <div className="internal-wrapper">
        <div className="caption-container">
          <h1 className="category-header">Jobs</h1>
          <p className="category-subtitle">
            Find a job you love.{" "}
            <span className="text-highlight">Set Career Interests</span>
          </p>
        </div>

        <div className="grid-tiles-container">
          {items.map((item) => (
            <JobTile
              key={item.id}
              category={item.category}
              jobTitle={item.jobTitle}
              location={item.location}
              duration={item.duration}
              color={item.color}
            />
          ))}
        </div>

        <CustomButton>Show all jobs</CustomButton>
      </div>
    </section>
  );
};

export default JobGridSection;
