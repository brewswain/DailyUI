import React from "react";

import "./JobLocation.styles.scss";

const JobLocation = () => (
  <div className="job-location-container">
    <span>You are now seeing jobs from Trinidad.</span>
    <span>The Hub is also available in:</span>
    <div className="country-list">
      <ul>
        <li>
          <a href="/">Barbados</a>
        </li>
        <li>
          <a href="/">Grenada</a>
        </li>
        <li>
          <a href="/">Curacao</a>
        </li>
        <li>
          <a href="/">Guyana</a>
        </li>
      </ul>
    </div>
  </div>
);

export default JobLocation;
