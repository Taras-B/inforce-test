import { productsAPI } from '../../api/products'
import { productActions } from './actions'

export const getProductById = (id) => {
  return async (dispatch) => {
    const res = await productsAPI.getProductById(id)

    if (res.comment !== undefined) {
      let payload = Object.keys(res.comment).map((key) => {
        return {
          ...res.comment[key],
          id: key,
        }
      })

      res.comment = payload
    }

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
      comments: getState().productInfo.product.comment,
    }
    let response = await productsAPI.updateProduct(newData, productId)

    dispatch(productActions.setData(response.data))
  }
}
export const createComment = (data, productId) => {
  return async (dispatch, getState) => {
    let res = await productsAPI.createComment(data, productId)
    const payload = {
      ...data,
      id: res.data.name,
    }
    dispatch(productActions.createComment(payload))
  }
}

export const deleteComment = (productId, id) => {
  return async (dispatch) => {
    const res = await productsAPI.deleteComment(productId, id)

    console.log(res)
    dispatch(productActions.deleteComment(id))
  }
}
