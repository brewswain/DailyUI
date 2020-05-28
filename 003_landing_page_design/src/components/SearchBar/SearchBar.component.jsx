import React from "react";

import CustomButton from "../CustomButton/CustomButton.component";

import "./SearchBar.styles.scss";

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-box">
      <div className="search-entry">Job title or keyword</div>
    </div>
    <div className="search-location-dropdown">Tacarigua, Trinidad</div>
    <CustomButton>Search</CustomButton>
  </div>
);

export default SearchBar;
