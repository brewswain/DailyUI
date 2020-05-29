import React from "react";

import { CustomButton } from "../../components";

import "./SearchBar.styles.scss";

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-box">
      <input
        type="text"
        className="search-entry"
        placeholder="Job title or keyword"
      />
    </div>
    <div className="search-location-dropdown">Tacarigua, Trinidad</div>
    <CustomButton>Search</CustomButton>
  </div>
);

export default SearchBar;
