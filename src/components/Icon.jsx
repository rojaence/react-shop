import React, { Fragment } from 'react';
import AddedToCartIcon from "@components/icons/AddedToCardIcon";
import AddToCartIcon from "@components/icons/AddToCartIcon";
import AlertIcon from "@components/icons/AlertIcon";
import ChevronIcon from "@components/icons/ChevronIcon";
import CloseIcon from "@components/icons/CloseIcon";
import EmailIcon from "@components/icons/EmailIcon";
import MenuIcon from "@components/icons/MenuIcon";
import AccountIcon from '@components/icons/AccountIcon';
import SearchIcon from "@components/icons/SearchIcon";
import RemoveIcon from "@components/icons/RemoveIcon";
import AddIcon from "@components/icons/AddIcon";
import ShoopingCartIcon from "@components/icons/ShoopingCartIcon";
import ShoopingCartNotificationIcon from "@components/icons/ShoopingCartNotificationIcon";
import CheckOutlineIcon from '@components/icons/CheckOutlineIcon';

const Icon = ({ name = 'add-to-cart', size = 40, color = '', customClass = '' }) => {
  const iconStyleClass = () => {
    let styleClass = ['icon'];
    if (color) styleClass.push(`icon--${color}`)
    if (customClass) styleClass.push(customClass)
    return styleClass.join(' ')
  }


  const iconsList = {
    'add-to-cart': <AddToCartIcon/>,
    'added-to-cart': <AddedToCartIcon/>,
    'alert': <AlertIcon size={size} styleClass={iconStyleClass()}/>,
    'chevron': <ChevronIcon/>,
    'close': <CloseIcon size={size} styleClass={iconStyleClass()}/>,
    'email': <EmailIcon size={size} styleClass={iconStyleClass()}/>,
    'add':  <AddIcon size={size} styleClass={iconStyleClass()}/>,
    'remove':  <RemoveIcon size={size} styleClass={iconStyleClass()}/>,
    'menu': <MenuIcon styleClass={iconStyleClass()}/>,
    'account': <AccountIcon size={size} styleClass={iconStyleClass()}/>,
    'search': <SearchIcon size={size} styleClass={iconStyleClass()}/>,
    'shooping-cart': <ShoopingCartIcon styleClass={iconStyleClass()}/>,
    'shooping-cart-notification': <ShoopingCartNotificationIcon/>,
    'check-outline': <CheckOutlineIcon size={size} styleClass={iconStyleClass()}/>
  }

  return (
    <Fragment>
      { iconsList[name] }
    </Fragment>
  )
}

export default Icon;