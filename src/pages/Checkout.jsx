import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProdutContext from "@context/products/ProductContext";
import CartItem from "@containers/CartItem";
import Logo from "@components/AppLogo";
import Button from "@components/Button";
import "@styles/checkout.scss";

const Checkout = () => {
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
    let month = (today.getMonth() + 1);
    let day = today.getDate();
    let year = today.getFullYear();
    return `${month > 9 ? month : `0${month}`}.${day}.${year}`;
  };

  useEffect(() => {
    let price = 0,
      items = 0;
    [...shoopingCart].map(([_, data]) => {
      price += parseFloat(data.quantity * data.price);
      items += data.quantity;
    });
    setTotalCart(price);
    setTotalItems(items);
  });

  return (
    <div className="costumer-order">
      <header className="header costumer-order__header">
        <Link to='/'>
          <Logo />
        </Link>
      </header>
      <section className="costumer-order__checkout">
        <h2 className="costumer-order__title">My Order</h2>
        <div className="total-order elevation-1">
          <span className="total-order__date">{currentDate()}</span>
          <span className="total-order__count">
            {totalItems}{" "}
            {`${totalItems === 0 || totalItems > 1 ? "articles" : "article"}`}
          </span>
          <span className="total-order__price">$ {totalCart.toFixed(2)}</span>
        </div>
        <ul className="costumer-order__list">{renderItems()}</ul>
        {shoopingCart.size === 0 && (
          <span style={{ display: "block", textAlign: "center" }}>
            Empty cart
          </span>
        )}
        <Link to='/' className="app-link" style={{ marginTop: '3rem' }}>
          <Button text='More products' icon='chevron-left' color='primary'/>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;
