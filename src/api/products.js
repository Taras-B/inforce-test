import http from './index'

export const productsAPI = {
  getProducts() {
    return http.get(`products.json`).then((data) => data.data)
  },
  createProduct(data) {
    return http.post(`products.json`, data).then((data) => data)
  },
  deleteProduct(id) {
    return http.delete(`products/${id}.json`).then((data) => data)
  },
}
