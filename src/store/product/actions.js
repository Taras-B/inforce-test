export const SET_PRODUCT_INFO = 'product/setProductInfo'

export const productActions = {
  setData: (payload) => ({
    type: SET_PRODUCT_INFO,
    payload,
  }),
}
