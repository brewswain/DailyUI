import React from "react";

import { CategoryTile } from "../../components";
import { CATEGORY_DATA } from "../../data";

import "./CategoryGrid.styles.scss";

const CategoryGridSection = () => {
  const { items } = CATEGORY_DATA;

  return (
    <section className="grid-container">
      <div className="internal-wrapper">
        <h1 className="category-header">
          Explore <span>by category</span>{" "}
        </h1>
        <div className="grid-tiles-container">
          {items.map((item) => (
            <CategoryTile
              key={item.id}
              name={item.name}
              logo={item.logo}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGridSection;
