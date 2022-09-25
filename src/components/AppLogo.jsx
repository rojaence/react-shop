import React from "react";
import Logo from '@logos/logo_yard_sale.svg';
import Favicon from '@logos/favicon_yard_sale.svg';

const AppLogo = ({ favicon = false, size = 97, customStyle = {} }) => {

  const appLogoStyle = {
    width: size,
    height: favicon ? size : parseFloat((20.62 * size) / 100).toFixed(2),
    ...customStyle
  };

  return (
    <img
      className="app-logo"
      style={appLogoStyle}
      src={favicon ? Favicon : Logo}
      alt={favicon ? "AppFavicon" : "AppLogo"}
    />
  );
};

export default AppLogo;
