import React, { Fragment, useState, useEffect } from "react";
import Icon from "@components/Icon";
import "@styles/select.scss";

const Select = ({ label = "", items, customClass = '', selected = {}, onChange}) => {
  const [toggleList, setToggleList] = useState(false);
  // const [selected, setSelected] = useState({});

  /* useEffect(() => {
    if (items.length > 0) setselected(items[0]);
  }, []); */

  /* useEffect(() => {
    handleChangeValue(selected);
  }, [selected]); */

  const handleItemClick = (param) => {
    // setselected(param);
    onChange(param);
    setToggleList(false);
  }

  const selectStyleClass = () => {
    let styleClass = ['select'];
    if (toggleList) styleClass.push('select--active');
    if (customClass) styleClass.push(customClass);
    return styleClass.join(' ');
  }

  return (
    <Fragment>
      <div tabIndex={0} className={selectStyleClass()} onBlur={() => setToggleList(false)}>
        <div className="select__control" onClick={() => setToggleList(!toggleList)}>
          {label ? (
            <label className="select__label" onClick={() => setToggleList(!toggleList)}>
              {label}:
            </label>
          ) : null}
          <span className="select__value" onClick={() => setToggleList(!toggleList)}>
            {selected.text}
          </span>
          <div className="select__icon" onClick={() => setToggleList(!toggleList)}>
            <Icon name='chevron'/>
          </div>
        </div>
        <ul className='select__list elevation-1'>
          {items.map((item) => {
            return (
              <li
                key={item.value}
                className={`select__item${
                  item.value === selected.value ? " select__item--selected" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Select;
