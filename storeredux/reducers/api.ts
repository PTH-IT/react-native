import {API_CHANGE,FETCH_PRODUCTS_PENDING,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR} from '../constants/constants';
const initialState = {
  pending: false,
    products: null,
    error: null
}
const ApiReducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
  }
export default ApiReducer;
export const getProducts = state => state.Api.products;
export const getProductsPending = state => state.Api.pending;
export const getProductsError = state => state.Api.error;