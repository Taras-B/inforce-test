import { productsAPI } from '../../api/products'
import { productActions } from './actions'

export const getProductById = (id) => {
  return async (dispatch) => {
    const res = await productsAPI.getProductById(id)

    dispatch(productActions.setData(res))
  }
}
