import React from "react";

import "./JobTile.styles.scss";

const JobTile = (item) => {
  const { category, jobTitle, location, duration } = item;

  return (
    <div className="category-tile">
      <p className="job-category">{category}</p>
      <span className="job-title">{jobTitle}</span>
      <div className="job-details">
        <span className="job-location">{location}</span>
        <ul>
          <li className="job-duration">{duration}</li>
        </ul>
      </div>
    </div>
  );
};

export default JobTile;
