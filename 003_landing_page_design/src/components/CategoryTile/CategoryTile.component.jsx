import React from "react";

import "./CategoryTile.styles.scss";

const CategoryTile = (item) => {
  const { name, logo, id } = item;
  return (
    <div className={`${id} category-tile`}>
      <img src={logo} alt="Tile Logos" className="category-logo" />
      <p className="category-title">{name}</p>
    </div>
  );
};

export default CategoryTile;
