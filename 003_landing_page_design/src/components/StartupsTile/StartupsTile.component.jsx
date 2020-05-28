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
    <div className="category-tile">
      <img src={companyLogo} alt="" className="company-logo" />
      <p className="company-name">{companyName}</p>
      <span className="company-details">{companyDetails}</span>
      <div className="card-footer">
        <div className="company-details">
          <span className="company-category">{companyCategory}</span>
          <ul>
            <li className="job-location">{location}</li>
          </ul>
        </div>
        <span className="openings">{openings} jobs</span>
      </div>
    </div>
  );
};

export default StartupsTile;
