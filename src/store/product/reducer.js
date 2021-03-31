import { SET_PRODUCT_INFO } from './actions'

const initialState = {
  product: null,
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_INFO:
      return { ...state, product: action.payload }

    default:
      return state
  }
}
