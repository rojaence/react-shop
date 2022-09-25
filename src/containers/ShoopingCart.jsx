import React, { useContext, Fragment, useEffect, useState } from "react";
import Button from "@components/Button";
import "@styles/shoopingCart.scss";

import ProductContext from "@context/products/ProductContext";

const ShoopingCart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { shoopingCart, deleteFromCart, addToCart, decreaseItemCart } = useContext(ProductContext);

  useEffect(() => {
    let total = 0;
    [...shoopingCart].map(([id, data]) => total += parseFloat(data.quantity * data.price))
    setTotalCart(total);
  })

  const renderItems = () => {
    return (
      <Fragment>
        {[...shoopingCart].map(([id, data]) => {
          return (
            <li className={"product"} key={id}>
              <img
                className={"product__image"}
                src={data.images[0]}
                alt="Product image"
              />
              <span className={"product__title"}>{data.title}</span>
              <div className={"product__und"}>
                <Button icon='remove' iconSize={24} fab flat customClass='elevation-1 remove-button' onClick={() => decreaseItemCart(data.id)}/>
                <Button icon='add' iconSize={24} fab flat customClass='elevation-1 add-button' onClick={() => addToCart(data)}/>
                <span className={"quantity"}>{data.quantity} U.</span>
              </div>
              <span className={"product__price"}>$ {(data.price * data.quantity).toFixed(2)}</span>
              <Button icon="close" iconSize={24} flat fab onClick={() => deleteFromCart(data)}/>
            </li>
          );
        })}
      </Fragment>
    );
  };
  return (
    <div className={"shooping-cart"}>
      {shoopingCart.size === 0 && <span style={{ display: 'block', textAlign: 'center'}}>Empty cart</span>}
      <ul className={"shooping-cart__list"}>{renderItems()}</ul>
      <div className="shooping-cart__purchase">
        <div className={"shooping-cart__total"}>
          <span>Total</span>
          <span>$ {totalCart.toFixed(2)}</span>
        </div>
        <Button text="Checkout" disabled={shoopingCart.size === 0} block color="primary" customClass='checkout-button'/>
      </div>
    </div>
  );
};

export default ShoopingCart;
