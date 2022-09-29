import React, { useEffect } from "react";
import Icon from "@components/Icon";
import Button from "@components/Button";
import "@styles/snackbar.scss";

const Snackbar = ({
  message = "",
  severity = "",
  style = {},
  show = true,
  closeAction = () => {},
}) => {
  const iconName = {
    success: "check-outline",
    error: "alert",
    warning: "alert",
  };

  const toastAnimation = {
    animationName: show ? "fadeIn" : "fadeOut",
    animationDuration: show ? ".2s" : ".3s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease",
  };

  return (
    <article
      className={`snackbar${severity ? ` snackbar--${severity}` : ""}`}
      style={{
        ...style,
        ...toastAnimation,
      }}
    >
      <Icon name={iconName[severity]} size={28} />
      <h2 className="snackbar__message">{message}</h2>
      <Button icon="close" iconSize={30} fab flat onClick={closeAction} />
    </article>
  );
};

export default Snackbar;
