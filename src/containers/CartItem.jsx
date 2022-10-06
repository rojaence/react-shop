import React, { useContext } from "react";
import ProductContext from "@context/products/ProductContext";
import "@styles/cartItem.scss";
import Button from "@components/Button";

const CartItem = ({ data = {} }) => {
  const { addToCart, deleteFromCart, decreaseItemCart } = useContext(ProductContext);
  return (
    <li className={"product"}>
      <img
        className={"product__image"}
        src={data.images[0]}
        alt="Product image"
      />
      <span className={"product__title"}>{data.title}</span>
      <div className={"product__und"}>
        <Button
          icon="remove"
          iconSize={24}
          fab
          flat
          customClass="elevation-1 remove-button"
          onClick={() => decreaseItemCart(data.id)}
        />
        <Button
          icon="add"
          iconSize={24}
          fab
          flat
          customClass="elevation-1 add-button"
          onClick={() => addToCart(data)}
        />
        <span className={"quantity"}>{data.quantity} U.</span>
      </div>
      <span className={"product__price"}>
        $ {(data.price * data.quantity).toFixed(2)}
      </span>
      <Button
        icon="close"
        iconSize={24}
        flat
        fab
        customClass='delete-button'
        onClick={() => deleteFromCart(data)}
      />
    </li>
  );
};

export default CartItem;

