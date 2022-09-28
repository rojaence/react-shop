import React from "react";
import "@styles/header.scss";
import UserMenu from "@containers/UserMenu";
import Logo from "@components/AppLogo";

const Header = ({ cartActivator, mainMenuActivator }) => {

  return (
    <header className="header">
      <nav className="main-nav">
        { mainMenuActivator }
        <div className="navbar-left">
          <Logo customStyle={{ marginBottom: "0" }} />
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
