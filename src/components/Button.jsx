import React from "react";
import Icon from "@components/Icon";
import "@styles/button.scss";

function Button({
  text = "",
  icon = "",
  autoHide = false,
  autoHideIcon = false,
  rounded = false,
  customStyle = {},
  customClass = "",
  iconSize = 48,
  fab = false,
  flat = false,
  block = false,
  outlined = false,
  disabled = false,
  submit = false,
  link = false,
  title = '',
  color = "",
  iconColor = "",
  onClick = () => {},
}) {
  const buttonClassStyle = () => {
    let classStyle = ["button"];
    if (fab) classStyle.push("button--fab");
    if (flat) classStyle.push("button--flat");
    if (outlined) classStyle.push("button--outlined");
    if (autoHide) classStyle.push("button--autohide");
    if (autoHideIcon) classStyle.push("button--autohide-icon");
    if (rounded) classStyle.push('button--rounded');
    if (disabled) classStyle.push('button--disabled');
    if (color) classStyle.push(`button--${color}`);
    if (link) classStyle.push('button--link');
    if (block) classStyle.push('button--block');
    if (customClass) classStyle.push(customClass);
    return classStyle.join(" ");
  };

  const buttonCustomStyle = () => {
    let fabStyle = {
      width: fab ? `${iconSize}px` : 'auto',
      height: fab ? `${iconSize}px` : 'auto',
    }
    if (fab) {
      customStyle.width = fabStyle.width,
      customStyle.height = fabStyle.height
    }
    if (text) {
      customStyle.gap = '.5rem';
    }
    return customStyle;
  }

  return (
    <button
      style={buttonCustomStyle()}
      className={buttonClassStyle()}
      type = {submit ? 'submit' : 'button'}
      disabled={disabled}
      title={title}
      onClick={onClick}
    >
      {icon ? <Icon name={icon} size={iconSize} customClass={iconColor ? `icon--${color}` : ''}/> : null}
      <span className="button__text">{text}</span>
    </button>
  );
}

export default Button;
