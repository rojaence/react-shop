import React, { Fragment, useRef } from "react";
import "@styles/input.scss";
import Icon from "@components/Icon";

function Input({
  type = "text",
  hint = "",
  label = "",
  icon = "",
  name = '',
  value = '',
  iconSize = 32,
  disabled = false,
  customClass = "",
  onChange = () => {},
}) {

  const inputElement = useRef(null);

  const inputStyleClass = () => {
    let styleClass = ["field"];
    if (customClass) styleClass.push(customClass);
    return styleClass.join(" ");
  };
  return (
    <Fragment>
      <div tabIndex={0} className={inputStyleClass()}>
        {label ? (
          <label className="field__label" htmlFor={label}>
            {label}
          </label>
        ) : null}
        <div className="field__slot">
          {icon ? (
            <div className="field__prepend-icon" onClick={() => inputElement.current.focus()}>
              <Icon name={icon} size={iconSize} />
            </div>
          ) : null}
          <input
            className="field__input"
            ref={inputElement}
            id={label}
            type={type}
            name={name}
            value={value}
            placeholder={hint}
            disabled={disabled}
            onChange={onChange}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Input;
