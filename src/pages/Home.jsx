import React, { useContext, useEffect, useState } from "react";
import Header from "@containers/Header";
import "@styles/home.scss";

import ProductFilters from "@containers/ProductFilters";
import ProductCard from "@containers/ProductCard";

import Button from "@components/Button";
import Icon from "@components/Icon";
import AsideDrawer from "@containers/AsideDrawer";
import ShoopingCart from "@containers/ShoopingCart";

import ProductContext from "@context/products/ProductContext";
import { useAsideDrawer } from "@hooks/useAsideDrawer";

const Home = ({ productCategory = "all" }) => {
  const { products, getProducts, shoopingCart } = useContext(ProductContext);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [productInfo, setProductInfo] = useState({});

  const cartDrawer = useAsideDrawer(false);
  const productInfoDrawer = useAsideDrawer(false);
  const mainMenuDrawer = useAsideDrawer(false);

  useEffect(() => {
    if (productCategory === "all") getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoadingProducts(true);
      await getProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const handleProductCardClick = (data) => {
    setProductInfo(data);
    productInfoDrawer.showDrawer();
  };

  const closeProdInfoDrawer = () => {
    setProductInfo({});
    productInfoDrawer.hideDrawer();
  };

  const CartActivator = () => {
    return (
      <li
        className="navbar-right__item navbar-shopping-cart elevation-1 button button--flat button--fab"
        onClick={() => cartDrawer.showDrawer()}
      >
        <Icon name="shooping-cart" customClass={"menu"} />
        <div className="shooping-cart__items">{shoopingCart.size}</div>
      </li>
    );
  };

  const MainMenuActivator = () => {
    return (
      <Button
        icon="menu"
        flat
        customStyle={{ heigth: "30px", width: "20px", padding: 0 }}
        onClick={() => mainMenuDrawer.showDrawer()}
      />
    );
  };

  return (
    <div className="home">
      <Header
        cartActivator={<CartActivator />}
        mainMenuActivator={<MainMenuActivator />}
      ></Header>
      <main className="main">
        <ProductFilters></ProductFilters>
        <ul className="products-list">
          {products.slice(0, 20).map((product) => {
            return (
              <li
                className="products-list__item"
                key={product.id}
                onClick={() => handleProductCardClick(product)}
              >
                <ProductCard
                  data={product}
                  dense
                  addedToCart={shoopingCart.has(product.id)}
                />
              </li>
            );
          })}
        </ul>
      </main>

      <AsideDrawer
        title="Shooping cart"
        show={cartDrawer.isOpen}
        closeAction={cartDrawer.hideDrawer}
      >
        <ShoopingCart />
      </AsideDrawer>

      <AsideDrawer
        show={productInfoDrawer.isOpen}
        closeAction={closeProdInfoDrawer}
        headerAlt
      >
        <ProductCard data={productInfo} />
      </AsideDrawer>

      <AsideDrawer
        title="Categories"
        show={mainMenuDrawer.isOpen}
        closeAction={mainMenuDrawer.hideDrawer}
        nav
        left
      >
        <p>
          Aquí debería ir el menú principal, <br />
          tal vez como un componente
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        ut similique expedita nostrum adipisci laudantium reprehenderit labore
        earum, provident itaque optio. Neque temporibus facilis, cum maiores
        magni aut consequatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        ut similique expedita nostrum adipisci laudantium reprehenderit labore
        earum, provident itaque optio. Neque temporibus facilis, cum maiores
        magni aut consequatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        ut similique expedita nostrum adipisci laudantium reprehenderit labore
        earum, provident itaque optio. Neque temporibus facilis, cum maiores
        magni aut consequatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        ut similique expedita nostrum adipisci laudantium reprehenderit labore
        earum, provident itaque optio. Neque temporibus facilis, cum maiores
        magni aut consequatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur
        ut similique expedita nostrum adipisci laudantium reprehenderit labore
        earum, provident itaque optio. Neque temporibus facilis, cum maiores
        magni aut consequatur.
      </AsideDrawer>
    </div>
  );
};

export default Home;
