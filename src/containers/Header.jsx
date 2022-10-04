import React from "react";
import "@styles/header.scss";
import UserMenu from "@containers/UserMenu";
import Logo from "@components/AppLogo";
import {Link} from "react-router-dom"

const Header = ({ cartActivator, mainMenuActivator }) => {

  return (
    <header className="header">
      <nav className="main-nav">
        { mainMenuActivator }
        <div className="navbar-left">
          <Link to='/' style={{ display: 'grid', placeItems: 'center'}}>
            <Logo customStyle={{ marginBottom: "0" }} />
          </Link>
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
