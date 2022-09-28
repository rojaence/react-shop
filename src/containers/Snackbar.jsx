import React, { useEffect } from "react";
import Icon from "@components/Icon";
import Button from "@components/Button";
import "@styles/snackbar.scss";

const Snackbar = ({
  snackID = "",
  message = "",
  severity = "",
  style = {},
  timeout = 4000,
  closeAction = () => {},
}) => {
  useEffect(() => {
    // const timer = setTimeout(() => closeAction, )
    console.log(`snackId nuevo: ${snackID}`);
    if (snackID) {
      const timer = setTimeout(closeAction, timeout);
      return () => clearTimeout(timer);
    }
  }, [snackID]);

  const iconName = {
    success: "check-outline",
    error: "alert",
    warning: "alert",
  };
  return (
    <article
      className={`snackbar elevation-1${
        severity ? ` snackbar--${severity}` : ""
      }`}
      style={style}
    >
      <Icon name={iconName[severity]} size={28} />
      <h2 className="snackbar__message">{message}</h2>
      <Button icon="close" iconSize={30} fab flat onClick={closeAction} />
    </article>
  );
};

export default Snackbar;
