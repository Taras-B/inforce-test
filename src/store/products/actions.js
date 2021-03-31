import { SET_PRODUCT, SET_PRODUCTS } from './const-type'

export const productsActions = {
  setData: (payload) => ({
    type: SET_PRODUCTS,
    payload,
  }),
  create: (payload) => ({
    type: SET_PRODUCT,
    payload,
  }),
}
