import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProdutContext from "@context/products/ProductContext";
import CartItem from "@containers/CartItem";
import "@styles/customerOrder.scss";

const MyOrder = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { shoopingCart } = useContext(ProdutContext);
  
  const renderItems = () => {
    
    return (
      <Fragment>
        {[...shoopingCart].map(([id, item]) => {
          return <CartItem data={item} key={id} />;
        })}
      </Fragment>
    );
  };

  const currentDate = () => {
    const today = new Date();
    return `${today.getMonth() + 1}.${today.getDate()}.${today.getYear()}`;
  };
  
  useEffect(() => {
    let price = 0, items = 0;
    [...shoopingCart].map(
      ([id, data]) => {
        total += parseFloat(data.quantity * data.price);
        totalItems += data.quantity;
      }
    );
    setTotalCart(price);
    setTotalItems(items);
  }, [shoopingCart]);

  return (
    <section className="costumer-order">
      <div className="total-order">
        <span className="total-order__date">{currentDate()}</span>
        <span className="total-order__count">{totalItems}</span>
        <span className="total-order__count">{totalCart}</span>
      </div>
      <h2 className="title">My Order</h2>
      <ul className="costumer-order__list">{renderItems()}</ul>
      {shoopingCart.size === 0 && (
        <span style={{ display: "block", textAlign: "center" }}>
          Empty cart
        </span>
      )}
    </section>
  );
};

export default MyOrder;
