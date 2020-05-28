import React from "react";

import JOB_DATA from "../../data/job.data";
import JobTile from "../../components/JobTile/JobTile.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";

import "./JobGrid.styles.scss";

const JobGridSection = () => {
  const { items } = JOB_DATA;

  return (
    <section className="grid-container">
      <h1 className="category-header">Jobs</h1>
      <p className="category-subtitle">
        Find a job you love.{" "}
        <span className="text-highlight">Set Career Interests</span>
      </p>

      <div className="grid-tiles-container">
        {items.map((item) => (
          <JobTile
            key={item.id}
            category={item.category}
            jobTitle={item.jobTitle}
            location={item.location}
            duration={item.duration}
          />
        ))}
      </div>

      <CustomButton>Show all jobs</CustomButton>
    </section>
  );
};

export default JobGridSection;
