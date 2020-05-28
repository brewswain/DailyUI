import React from "react";

import CategoryTile from "../../components/CategoryTile/CategoryTile.component";
import CATEGORY_DATA from "../../data/category.data";

import "./CategoryGrid.styles.scss";

const CategoryGridSection = () => {
  const { items } = CATEGORY_DATA;

  return (
    <section className="grid-container">
      <h1 className="category-header">Explore by category</h1>
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
    </section>
  );
};

export default CategoryGridSection;
