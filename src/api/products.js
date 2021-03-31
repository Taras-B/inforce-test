import http from './index'

export const productsAPI = {
  getProducts() {
    return http.getProducts(`products.json`).then((data) => data.products)
  },
  getProduct(id) {
    return http.get(`products/${id}.json`).then((data) => data)
  },
}
