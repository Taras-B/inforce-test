import { productsAPI } from '../../api/products'
import { productsActions } from './actions'

export const getProducts = () => {
  return async (dispatch) => {
    let res = await productsAPI.getProducts()
    console.log('GET_PRODUCTS___', res)
    const payload = Object.keys(res).map((key) => {
      return {
        ...res[key],
        id: key,
      }
    })

    dispatch(productsActions.setData(payload))
  }
}

export const createProduct = (data) => {
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
    const res = await productsAPI.createProduct(newData)

    const payload = {
      ...newData,
      id: res.data.name,
    }
    dispatch(productsActions.create(payload))
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const res = await productsAPI.deleteProduct(id)

    console.log(res)
    dispatch(productsActions.delete(id))
  }
}
