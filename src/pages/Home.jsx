import React, { useContext, useEffect, useState, Fragment } from "react";
import Header from "@containers/Header";
import "@styles/home.scss";

import ProductFilters from "@containers/ProductFilters";
import ProductCard from "@containers/ProductCard";

import Button from "@components/Button";
import Icon from "@components/Icon";
import AsideDrawer from "@containers/AsideDrawer";
import ShoopingCart from "@containers/ShoopingCart";
import Snackbar from "@containers/Snackbar";
import CategoryNav from "@containers/CategoryNav";
import Spinner from "@components/Spinner";
import Input from "@components/Input";
import Select from "@components/Select";

import ProductContext from "@context/products/ProductContext";
import { useAsideDrawer } from "@hooks/useAsideDrawer";
import { useSelect } from "@hooks/useSelect";
import { useParams } from "react-router-dom";

const Home = () => {
  const { productCategory } = useParams();
  const {
    products,
    snackbars,
    categories,
    getCategories,
    closeSnackbar,
    getProducts,
    shoopingCart,
    getProductsByCategory,
  } = useContext(ProductContext);

  const [productInfo, setProductInfo] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(false);

  const cartDrawer = useAsideDrawer(false);
  const productInfoDrawer = useAsideDrawer(false);
  const mainMenuDrawer = useAsideDrawer(false);

  useEffect(() => {
    const getAllProducts = async (category, categoryItems) => {
      
      try {
        setLoadingProducts(true);
        if (category === "all" || !category) {
          await getProducts();
        } else {
          let categoryId = categoryItems.find(
            (item) => item.name === category
          ).id;
          await getProductsByCategory(categoryId);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingProducts(false);
      }
    };

    getCategories()
      .then((result) => {
        setProductNameFilter('');
        productOrderFilter.setSelected(orderFiltersList[0]);
        getAllProducts(productCategory, result);
      })
      .catch((error) => console.log(error));
  }, [productCategory]);

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
      <Button icon="menu" flat onClick={() => mainMenuDrawer.showDrawer()} />
    );
  };

  const NoProductItems = () => {
    return (
      <p style={{ textAlign: "center" }}>
        {`No products in ${productCategory}`}
      </p>
    );
  };

  const NoProductsInSearch = () => {
    return (
      <p style={{ textAlign: "center", maxWidth: '250px', margin: '0 auto', overflowWrap: 'break-word' }}>
        {`No products found by '${productNameFilter}'`}
      </p>
    );
  }


  /*IMPORTANT: Configuración de filtros*/

  const orderFiltersList = [
    { text: "Most recent", value: "mostRecent" },
    { text: "Higher cost", value: "higherCost" },
    { text: "Lower cost", value: "lowerCost" },
  ];

  const productOrderFilter = useSelect(orderFiltersList.slice(), {
    ...orderFiltersList[0],
  });
  const [productNameFilter, setProductNameFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let items = products
      .slice()
      .filter((product) =>
        product.title.toLowerCase().includes(productNameFilter.trim().toLowerCase())
      );
    setFilteredProducts(items);
  }, [productNameFilter, products]);

  useEffect(() => {
    let items = filteredProducts.slice();
    if (productOrderFilter.selected.value === 'higherCost') items.sort((a, b) => b.price - a.price)
    else if (productOrderFilter.selected.value === 'lowerCost') items.sort((a, b) => a.price - b.price)
    else items = products.slice();
    setFilteredProducts(items);
  }, [productOrderFilter.selected, products])

  return (
    <div className="home">
      <Header
        cartActivator={<CartActivator />}
        mainMenuActivator={<MainMenuActivator />}
      ></Header>
      <main className="main">
        <ProductFilters totalItems={products.length} shown={filteredProducts.length}>
          <Input
            hint="Search product"
            icon="search"
            iconSize={24}
            value={productNameFilter}
            onChange={(e) => setProductNameFilter(e.target.value)}
            customClass="elevation-1"
          />
          <Select
            label="order"
            items={productOrderFilter.items}
            onChange={productOrderFilter.handleOnChange}
            selected={productOrderFilter.selected}
          />
        </ProductFilters>

        {loadingProducts && <Spinner size={100} /> }
        <Fragment>
        <ul
          className="products-list"
          style={{ opacity: loadingProducts ? 0 : 1 }}
        >
          {filteredProducts
            .map((product) => {
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
        
          {filteredProducts.length === 0 && !loadingProducts && <NoProductsInSearch/>}
          {!loadingProducts && products.length === 0 && <NoProductItems />}
        </Fragment>
        
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
        <CategoryNav
          categories={categories}
          onClickItem={mainMenuDrawer.hideDrawer}
        />
      </AsideDrawer>

      <Fragment>
        {snackbars.map((snackbar, index) => {
          return (
            <Snackbar
              {...snackbar}
              key={snackbar.snackID}
              closeAction={() => closeSnackbar(snackbar.snackID)}
              style={{ bottom: ` ${index * 60 + 10}px` }}
            />
          );
        })}
      </Fragment>
    </div>
  );
};

export default Home;