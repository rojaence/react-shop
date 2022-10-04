import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@styles/categoryNav.scss";

const CategoryNav = ({ categories, onClickItem, activeItem = ''}) => {

  // const [activeItem, setActiveItem] = useState(initialActive);

  return (
    <ul className="category-nav">
      {categories.map((category) => {
        return (
          <li className="category-nav__item" key={`category-${category.id}`}>
            <Link to={`/${category.name}`} className={`category-nav__link ${category.name.toLowerCase() === activeItem.toLowerCase() && 'category-nav__link--active'}`} onClick={onClickItem}>
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryNav;
