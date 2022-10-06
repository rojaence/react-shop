import React from "react";
import "@styles/aside.scss";
import Button from "@components/Button";

const AsideDrawer = ({
  children,
  show,
  title = "",
  closeAction,
  nav = false,
  headerAlt=false,
  left = false,
}) => {
  const handleContentClick = (event) => event.stopPropagation();

  const asideWrapperClass = () => {
    let styleClass = [];
    if (left) styleClass.push("aside-wrapper-left");
    else styleClass.push("aside-wrapper-right");
    if (show && !left) styleClass.push("aside-wrapper-right--active");
    else if (show && left) styleClass.push("aside-wrapper-left--active");
    return styleClass.join(" ");
  };

  return (
    <div className={asideWrapperClass()} onClick={closeAction}>
      <aside className={`aside-drawer${nav ? ' aside-drawer--nav' : ''}`} onClick={handleContentClick}>
        <div className={`aside-drawer__header${headerAlt ? ' aside-drawer__header--alt' : ''}`}>
          <Button
            rounded
            icon="close"
            flat
            fab
            outlined
            iconSize={40}
            customClass="close-button elevation-1"
            onClick={closeAction}
            customStyle={{ padding: "5px" }}
          />
          <span className="aside-drawer__title">{title}</span>
        </div>
        <div className="aside-drawer__content">{children}</div>
      </aside>
    </div>
  );
};

export default AsideDrawer;
