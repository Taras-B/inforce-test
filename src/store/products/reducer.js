const initialState = {
  isProducts: false,
  products: [],
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, isProducts: true, products: action.payload }

    default:
      return state
  }
}
