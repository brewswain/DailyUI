import React from "react";

import "./StartupsTile.styles.scss";

const StartupsTile = (item) => {
  const {
    companyLogo,
    companyName,
    companyDetails,
    companyCategory,
    location,
    openings,
  } = item;

  return (
    <div className="category-tile startups">
      <img className="company-logo" src={companyLogo} alt="" />
      <div className="company-container">
        <p className="company-name">{companyName}</p>
        <span className="company-details">{companyDetails}</span>
      </div>
      <div className="card-footer">
        <div className="details-container">
          <span className="company-category">{companyCategory}</span>
          <ul>
            <li className="job-location">{location} </li>
          </ul>
        </div>
        <span className="openings">{openings} jobs</span>
      </div>
    </div>
  );
};

export default StartupsTile;
