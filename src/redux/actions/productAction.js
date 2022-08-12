import { GET_PRODUCTS, SEARCH_ALL_PRODUCT } from "../constant";

export const fetchAllProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const searchAllProducts = (queryData) => {
  return {
    type: SEARCH_ALL_PRODUCT,
    queryData,
  };
};
