import React, { useReducer, useMemo } from "react";
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  ADD_TO_CART,
  DELETE_FROM_CART,
  DECREASE_ITEM_CART,
  NEW_SNACKBAR,
  CLOSE_SNACKBAR,
  SET_LOADING_CATEGORIES,
  SET_LOADING_PRODUCTS
} from "../types";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = (props) => {
  const baseURL = "https://api.escuelajs.co/api/v1";
  const initialState = {
    products: [],
    loadingProducts: false,
    categories: [],
    loadingCategories: false,
    snackbars: [],
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
    const request = await fetch(`${baseURL}/categories`, options);
    const response = await request.json();
    response.sort((a, b) => a.name.localeCompare(b.name));
    response.unshift({
      id: 'allProducts',
      name: 'all',
      image: ''
    });
    dispatch({ type: GET_CATEGORIES, payload: response });
    return response;
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
    } else {
      item.quantity -= 1;
      cart.set(id, item);
    }
    dispatch({ type: DECREASE_ITEM_CART, payload: cart });
  };

  const deleteFromCart = (item) => {
    let cart = state.shoopingCart;
    cart.delete(item.id);
    dispatch({ type: DELETE_FROM_CART, payload: cart });
  };

  const getProductsByCategory = async (categoryId) => {
    const options = { method: "GET" };
    const request = await fetch(`${baseURL}/categories/${categoryId}/products`, options);
    const response = await request.json();
    dispatch({ type: GET_PRODUCTS, payload: response });
  };

  const generateUniqueID = () => {
    let guid = () => {
      let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };
      return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    };
    return guid();
  };

  const newSnackbar = (data) => {
    let snackbarList = state.snackbars.slice();
    let newUniqueID = generateUniqueID();
    snackbarList.push({
      snackID: newUniqueID,
      message: data.message,
      severity: data.severity || "success",
      timeout: data.timeout || 5000,
    });
    dispatch({ type: NEW_SNACKBAR, payload: snackbarList });
  };

  const closeSnackbar = (snackID) => {
    let snackbarList = state.snackbars
      .slice()
      .filter((snackbar) => snackbar.snackID != snackID);
    dispatch({ type: CLOSE_SNACKBAR, payload: snackbarList });
  };

  const value = useMemo(() => ({
    getProducts,
    getCategories,
    addToCart,
    deleteFromCart,
    decreaseItemCart,
    newSnackbar,
    closeSnackbar,
    getProductsByCategory,
    products: state.products,
    categories: state.categories,
    snackbars: state.snackbars,
    shoopingCart: state.shoopingCart,
  }));

  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
