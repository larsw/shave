export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    payload: product
  }
}
