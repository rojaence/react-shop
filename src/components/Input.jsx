import React, { Fragment, useRef, forwardRef } from "react";
import "@styles/input.scss";
import Icon from "@components/Icon";

const Input = forwardRef(function Input( {
  type = "text",
  hint = "",
  label = "",
  icon = "",
  name = '',
  id = '',
  iconSize = 32,
  disabled = false,
  block = false,
  customClass = "",
  error = false,
  errorMessage = '',
  onChange = () => {},
}, ref) {

  const inputStyleClass = () => {
    let styleClass = ["field"];
    if (customClass) styleClass.push(customClass);
    if (disabled) styleClass.push('field--disabled');
    if (block) styleClass.push('field--block');
    if (error) styleClass.push('field--error');
    return styleClass.join(" ");
  };

  return (
    <Fragment>
      <div tabIndex={0} className={inputStyleClass()}>
        {label && (
          <label className="field__label" htmlFor={id}>
            {label}
          </label>
        )}
        <div className="field__slot">
          {icon && (
            <label className="field__prepend-icon" htmlFor={id}>
              <Icon name={icon} size={iconSize} />
            </label>
          )}
          <input
            className="field__input"
            ref={ref}
            id={id}
            type={type}
            name={name}
            placeholder={hint}
            disabled={disabled}
            onChange={onChange}
          />
          {
            error && <span className="field__error-message">{errorMessage}</span>
          }
        </div>
      </div>
    </Fragment>
  )
})

export default Input;
