import React from "react";
import "@styles/spinner.scss";

const Spinner = ({ size = 50, color = "primary", position='fixed'}) => {
  const spinnerStyle = {
    height: `${size}px`,
    width: `${size}px`,
    borderRadius: "50%",
    border: `${parseInt(size * 0.15)}px solid var(--${color}-color)`,
    borderColor: `var(--${color}-color) rgba(0, 0, 0, 0.1) var(--${color}-color) rgba(0, 0, 0, 0.1)`,
  };
  return (
    <div className="spinner-wrapper" style={{ position }}>
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default Spinner;
