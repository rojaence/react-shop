import React, { useReducer, useMemo } from "react";
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  ADD_TO_CART,
  DELETE_FROM_CART,
  DECREASE_ITEM_CART,
} from "../types";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = (props) => {
  const baseURL = 'https://api.escuelajs.co/api/v1';
  const initialState = {
    products: [],
    categories: [],
    shoopingCart: new Map(),
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const options = { method: "GET" };
    const request = await fetch(`${baseURL}/products`, options);
    const response = await request.json();
    dispatch({ type: GET_PRODUCTS, payload: response });
  };

  const getCategories = async () => {
    const options = { method: "GET" };
    /* const request = await fetch(
      "https://fakestoreapi.com/products/categories",
      options
    ); */
    const request = await fetch(`${baseURL}/categories`, options); 
    const response = await request.json();
    response.unshift("all");
    dispatch({ type: GET_CATEGORIES, payload: response });
  };

  const addToCart = (item) => {
    let cart = state.shoopingCart;
    if (cart.has(item.id)) {
      let data = cart.get(item.id);
      data.quantity += 1;
      cart.set(item.id, data);
    } else {
      let data = { ...item, quantity: 1 };
      cart.set(item.id, data);
    }
    dispatch({ type: ADD_TO_CART, payload: cart });
  };

  const decreaseItemCart = (id) => {
    let cart = state.shoopingCart;
    let item = state.shoopingCart.get(id);
    if (item.quantity === 1) {
      cart.delete(id);
    }
    else {
      item.quantity -= 1;
      cart.set(id, item);
    } 
    dispatch({ type: DECREASE_ITEM_CART, payload: cart})
  }

  const deleteFromCart = (item) => {
    let cart = state.shoopingCart;
    cart.delete(item.id);
    dispatch({ type: DELETE_FROM_CART, payload: cart });
  };

  const getProductsByCategory = async (category) => {
    
  }

  const value = useMemo(() => ({
    getProducts,
    getCategories,
    addToCart,
    deleteFromCart,
    decreaseItemCart,
    products: state.products,
    categories: state.categories,
    shoopingCart: state.shoopingCart,
  }));

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
