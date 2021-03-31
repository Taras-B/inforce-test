import { CREATE_COMMENT, DELETE_COMMENT, SET_PRODUCT_INFO } from './actions'

const initialState = {
  product: null,
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_INFO:
      return { ...state, product: action.payload }
    case CREATE_COMMENT:
      return {
        ...state,
        product: {
          ...state.product,
          comment:
            state.product.comment !== undefined
              ? [...state.product.comment, action.payload]
              : [action.payload],
        },
      }
    case DELETE_COMMENT:
      return {
        ...state,
        product: {
          ...state.product,
          comment: state.product.comment.filter((item) => item.id !== action.payload),
        },
      }

    default:
      return state
  }
}
