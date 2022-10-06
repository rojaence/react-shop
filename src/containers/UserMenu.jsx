import React, { useState } from "react";
import "@styles/userMenu.scss";
import { useNavigate } from "react-router-dom";
import Icon from "@components/Icon";
import "@styles/userMenu.scss";

const UserMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleItemClick = (e) => {
    closeMenu();
  };
  const closeMenu = () => setIsOpenMenu(false)
  const toggleMenu = () => setIsOpenMenu(prevValue => !prevValue);

  const navigate = useNavigate();
  const goToAccount = () => navigate('/account')
    
  return (
    <div
    tabIndex={0}
    className={`user-menu${
      isOpenMenu ? " user-menu--active" : ""
    }`}
    onBlur={() => closeMenu()}
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
          <li className="popup-menu__item" onClick={handleItemClick}>
            <span className="popup-menu__link">My orders</span>
          </li>
          <li className="popup-menu__item" onClick={handleItemClick}>
            <span className="popup-menu__link" to='/account' onClick={() => goToAccount()}>My account</span>
          </li>
          <li className="popup-menu__item popup-menu__item--divider"></li>
          <li className="popup-menu__item popup-menu__item--logout" onClick={handleItemClick}>Sign out</li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
