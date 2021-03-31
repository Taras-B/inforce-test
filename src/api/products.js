import http from './index'

export const productsAPI = {
  getProducts() {
    return http.get(`products.json`).then((data) => data.data)
  },
  getProductById(id) {
    return http.get(`products/${id}.json`).then((data) => data.data)
  },
  createProduct(data) {
    return http.post(`products.json`, data).then((data) => data)
  },
  deleteProduct(id) {
    return http.delete(`products/${id}.json`).then((data) => data)
  },
  deleteComment(productId, id) {
    return http.delete(`products/${productId}/comment/${id}.json`).then((data) => data)
  },
  updateProduct(data, id) {
    return http.put(`products/${id}.json`, data).then((data) => data)
  },
  createComment(data, id) {
    return http.post(`products/${id}/comment.json`, data).then((data) => data)
  },
}
