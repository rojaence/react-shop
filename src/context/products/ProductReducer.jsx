import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  ADD_TO_CART,
  DELETE_FROM_CART,
  DECREASE_ITEM_CART,
} from "../types";

export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        shoopingCart: payload,
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        shoopingCart: payload,
      };
    case DECREASE_ITEM_CART:
      return {
        ...state,
        shoopingCart: payload,
      };
    default:
      return state;
  }
};
