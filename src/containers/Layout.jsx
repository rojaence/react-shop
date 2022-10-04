import React, { useEffect, useContext, Fragment, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Header from "@containers/Header";
import AsideDrawer from "@containers/AsideDrawer";
import ShoopingCart from "@containers/ShoopingCart";
import CategoryNav from "@containers/CategoryNav";
import Button from "@components/Button";
import Icon from "@components/Icon";

import ProductContext from "@context/products/ProductContext";
import { useAsideDrawer } from "@hooks/useAsideDrawer";

const Layout = ({ children }) => {
  const location = useLocation();
  const cartDrawer = useAsideDrawer(false);
  const mainMenuDrawer = useAsideDrawer(false);

  const { categories, shoopingCart } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    cartDrawer.hideDrawer();
    let newLocationParam = location.pathname.substring(1).toLowerCase();
    let newCategory = "all";
    if (newLocationParam != "")
      if (categories.length > 0) {
        let categoryMatch = categories.find(
          (category) => category.name.toLowerCase() === newLocationParam
        )
        categoryMatch && setSelectedCategory(categoryMatch.name);
      }
  }, [location]);

  const CartActivator = () => {
    return (
      <li
        className="navbar-right__item navbar-shopping-cart elevation-1 button button--flat button--fab"
        onClick={() => cartDrawer.showDrawer()}
      >
        <Icon name="shooping-cart" customClass={"menu"} />
        <div className="shooping-cart__items">{shoopingCart.size}</div>
      </li>
    );
  };

  const headerHidePaths = [
    "login",
    "recovery-sent",
    "new-password",
    "recovery-password",
    "checkout",
  ];

  const backMenuPaths = ["account"];

  const denyPathMatching = () =>
    headerHidePaths.every((path) => !location.pathname.includes(path));
  const allowBackMatching = () =>
    backMenuPaths.some((path) => location.pathname.includes(path));

  const MainMenuActivator = () => {
    return (
      <Fragment>
        {allowBackMatching() ? (
          <Link className="app-link" to="/">
            <Button icon="chevron-left" flat text="Home" />
          </Link>
        ) : (
          <Button
            icon="menu"
            flat
            onClick={() => mainMenuDrawer.showDrawer()}
          />
        )}
      </Fragment>
    );
  };

  return (
    <div className="layout">
      {denyPathMatching() && (
        <Header
          cartActivator={<CartActivator />}
          mainMenuActivator={<MainMenuActivator />}
        ></Header>
      )}

      <main className="main">{children}</main>

      <AsideDrawer
        title="Shooping cart"
        show={cartDrawer.isOpen}
        closeAction={cartDrawer.hideDrawer}
      >
        <ShoopingCart />
      </AsideDrawer>

      <AsideDrawer
        title="Categories"
        show={mainMenuDrawer.isOpen}
        closeAction={mainMenuDrawer.hideDrawer}
        nav
        left
      >
        <CategoryNav
          categories={categories}
          onClickItem={mainMenuDrawer.hideDrawer}
          activeItem={selectedCategory}
        />
      </AsideDrawer>
    </div>
  );
};

export default Layout;
