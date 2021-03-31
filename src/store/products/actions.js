import { SET_DELETE_PRODUCT, SET_PRODUCT, SET_PRODUCTS } from './const-type'

export const productsActions = {
  setData: (payload) => ({
    type: SET_PRODUCTS,
    payload,
  }),
  create: (payload) => ({
    type: SET_PRODUCT,
    payload,
  }),
  delete: (payload) => ({
    type: SET_DELETE_PRODUCT,
    payload,
  }),
}
