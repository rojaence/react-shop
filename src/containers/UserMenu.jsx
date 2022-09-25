import React, { useState } from "react";
import "@styles/userMenu.scss";
import Icon from "@components/Icon";
import Button from "@components/Button";
import "@styles/userMenu.scss";

const UserMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleItemClick = () => {
    // TODO: Something action to item click or replace the items with Links to routes
    closeMenu();
  };
  const closeMenu = () => setIsOpenMenu(false);
  const openMenu = () => setIsOpenMenu(true);
  const toggleMenu = () => setIsOpenMenu(prevValue => !prevValue);

  return (
    <div
      tabIndex={0}
      className={`user-menu${
        isOpenMenu ? " user-menu--active" : ""
      }`}
      onBlur={closeMenu}
    >
      <div className="user-menu__control" onClick={toggleMenu}>
        <span className="user-menu__email">
          platzi@example.com
        </span>
        <div className="icon-account">
          <Icon name="account" size={24} />
        </div>
        <div className="icon-menu">
          <Icon name="chevron" />
        </div>
      </div>
      <div className="user-menu__popup">
        <ul className={`popup-menu elevation-1${isOpenMenu ? " popup-menu--active" : ""}`}>
          <li className="popup-menu__item" onClick={handleItemClick}>My orders</li>
          <li className="popup-menu__item" onClick={handleItemClick}>My account</li>
          <li className="popup-menu__item popup-menu__item--divider"></li>
          <li className="popup-menu__item popup-menu__item--logout" onClick={handleItemClick}>Sign out</li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
