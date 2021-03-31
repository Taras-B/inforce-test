export const SET_PRODUCT_INFO = 'product/setProductInfo'
export const CREATE_COMMENT = 'product/setCreateComment'
export const DELETE_COMMENT = 'product/setDeleteComment'

export const productActions = {
  setData: (payload) => ({
    type: SET_PRODUCT_INFO,
    payload,
  }),
  createComment: (payload) => ({
    type: CREATE_COMMENT,
    payload,
  }),
  deleteComment: (payload) => ({
    type: DELETE_COMMENT,
    payload,
  }),
}
