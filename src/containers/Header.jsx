import React, { useContext, useEffect } from "react";
import "@styles/header.scss";
import { Link } from "react-router-dom";
import UserMenu from "@containers/UserMenu";
import Logo from "@components/AppLogo";
import Icon from "@components/Icon";
import Button from "@components/Button";

import ProductContext from "@context/products/ProductContext";

const Header = ({ cartActivator, mainMenuActivator }) => {
  const { categories, getCategories } =
    useContext(ProductContext);

  useEffect(() => {
    const getAllCategories = async () => {
      await getCategories();
    } 
    getAllCategories().catch(error => console.log(error));
  }, []); 

  const renderMainNav = () => {
    return (
      <ul className="main-nav__list navbar-left__list ">
        {categories.map((category) => {
          return (
            <li className="main-nav__item" key={`category-${category.id}`}>
              <Link to={"/"} className="main-nav__link">
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="main-nav">
        { mainMenuActivator }
        <div className="navbar-left">
          <Logo customStyle={{ marginBottom: "0" }} />
          {renderMainNav()}
        </div>

        <div className="navbar-right">
          <ul className="navbar-right__list">
            <li className="navbar-right__item">
              <UserMenu />
            </li>
            { cartActivator }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
