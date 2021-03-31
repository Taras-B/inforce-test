import { SET_DELETE_PRODUCT, SET_PRODUCT, SET_PRODUCTS } from './const-type'

const initialState = {
  isProducts: false,
  products: [],
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, isProducts: true, products: action.payload }
    case SET_PRODUCT:
      return { ...state, products: [...state.products, action.payload] }
    case SET_DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
