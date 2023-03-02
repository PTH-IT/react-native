import {API_CHANGE,FETCH_PRODUCTS_PENDING,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR} from '../constants/constants';

export function fetchProductsPending() {
  return {
      type: FETCH_PRODUCTS_PENDING
  }
}

export function fetchProductsSuccess(products) {
  return {
      type: FETCH_PRODUCTS_SUCCESS,
      products: products
  }
}

export function fetchProductsError(error) {
  return {
      type: FETCH_PRODUCTS_ERROR,
      error: error
  }
}
