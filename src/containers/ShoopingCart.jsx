import React, { useContext, Fragment, useEffect, useState } from "react";
import Button from "@components/Button";
import CartItem from "@containers/CartItem";
import "@styles/shoopingCart.scss";

import ProductContext from "@context/products/ProductContext";

const ShoopingCart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { shoopingCart, deleteFromCart, addToCart, decreaseItemCart } =
    useContext(ProductContext);

  useEffect(() => {
    let total = 0;
    [...shoopingCart].map(
      ([id, data]) => (total += parseFloat(data.quantity * data.price))
    );
    setTotalCart(total);
  });

  const renderItems = () => {
    return (
      <Fragment>
        {[...shoopingCart].map(([id, item]) => {
          return <CartItem data={item} key={id} />;
        })}
      </Fragment>
    );
  };

  return (
    <div className={"shooping-cart"}>
      {shoopingCart.size === 0 && (
        <span style={{ display: "block", textAlign: "center" }}>
          Empty cart
        </span>
      )}
      <ul className={"shooping-cart__list"}>{renderItems()}</ul>
      <div className="shooping-cart__purchase">
        <div className={"shooping-cart__total"}>
          <span>Total</span>
          <span>$ {totalCart.toFixed(2)}</span>
        </div>
        <Button
          text="Checkout"
          disabled={shoopingCart.size === 0}
          block
          color="primary"
          customClass="checkout-button"
        />
      </div>
    </div>
  );
};

export default ShoopingCart;
