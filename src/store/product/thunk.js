import { productsAPI } from '../../api/products'
import { productActions } from './actions'

export const getProductById = (id) => {
  return async (dispatch) => {
    const res = await productsAPI.getProductById(id)

    dispatch(productActions.setData(res))
  }
}
export const updateProduct = (data, productId) => {
  return async (dispatch, getState) => {
    let newData = {
      count: data.count,
      imageUrl: data.image,
      name: data.name,
      size: {
        height: data.height,
        width: data.width,
      },
      weight: data.weight,
      comments: null,
    }
    let response = await productsAPI.updateProduct(newData, productId)

    dispatch(productActions.setData(response.data))
  }
}
