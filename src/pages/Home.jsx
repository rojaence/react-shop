import React, { useContext, useEffect, useRef, useState, Fragment } from "react";
import "@styles/home.scss";

import ProductFilters from "@containers/ProductFilters";
import ProductCard from "@containers/ProductCard";

import AsideDrawer from "@containers/AsideDrawer";
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
    getCategories,
    getProducts,
    shoopingCart,
    getProductsByCategory,
  } = useContext(ProductContext);

  const [productInfo, setProductInfo] = useState({});
  const [loadingProducts, setLoadingProducts] = useState(false);
  const productInfoDrawer = useAsideDrawer(false);

  useEffect(() => {
    const getAllProducts = async (category, categoryItems) => {
      try {
        setLoadingProducts(true);
        setFilteredProducts([]);
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
        setProductNameFilter("");
        filterNameInput.current.value = '';
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

  const NoProductItems = () => {
    return (
      <p style={{ textAlign: "center" }}>
        {`No products in '${productCategory}'`}
      </p>
    );
  };

  const NoProductsInSearch = () => {
    return (
      <p
        style={{
          textAlign: "center",
          maxWidth: "250px",
          margin: "0 auto",
          overflowWrap: "break-word",
        }}
      >
        {`No products matching '${productNameFilter}'`}
      </p>
    );
  };

  /*IMPORTANT: Configuración de filtros*/

  const orderFiltersList = [
    { text: "Most recent", value: "mostRecent" },
    { text: "Higher cost", value: "higherCost" },
    { text: "Lower cost", value: "lowerCost" },
  ];

  const productOrderFilter = useSelect(orderFiltersList.slice(), {
    ...orderFiltersList[0],
  });
  const [productNameFilter, setProductNameFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filterNameInput = useRef(null);

  useEffect(() => {
    let items = products
      .slice()
      .filter((product) =>
        product.title
          .toLowerCase()
          .includes(productNameFilter.trim().toLowerCase())
      );
    setFilteredProducts(items);
  }, [productNameFilter]);

  useEffect(() => {
    let items = filteredProducts.slice();
    if (productOrderFilter.selected.value === "higherCost")
      items.sort((a, b) => b.price - a.price);
    else if (productOrderFilter.selected.value === "lowerCost")
      items.sort((a, b) => a.price - b.price);
    setFilteredProducts(items);
  }, [productOrderFilter.selected]);

  useEffect(() => {
    if (productOrderFilter.selected.value === 'mostRecent') setFilteredProducts(products)
  }, [products])

  return (
    <div className="home">
        <ProductFilters
          totalItems={products.length}
          shown={filteredProducts.length}
        >
          <Input
            hint="Search product"
            icon="search"
            iconSize={24}
            ref={filterNameInput}
            id='name-filter'
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

        {loadingProducts && <Spinner size={100} />}
        <Fragment>
          <ul
            className="products-list"
            style={{ opacity: loadingProducts ? 0 : 1 }}
          >
            {filteredProducts.map((product) => {
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

          {filteredProducts.length === 0 && !loadingProducts && productNameFilter && (
            <NoProductsInSearch />
          )}
          {!loadingProducts && products.length === 0 && <NoProductItems />}
        </Fragment>

      <AsideDrawer
        show={productInfoDrawer.isOpen}
        closeAction={closeProdInfoDrawer}
        headerAlt
      >
        <ProductCard data={productInfo} />
      </AsideDrawer>
    </div>
  );
};

export default Home;
