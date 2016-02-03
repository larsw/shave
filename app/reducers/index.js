import { combineReducers } from 'redux'
import ProductListReducer from './reducer_product-list'
import ActiveProductReducer from './reducer_active-product'

export const rootReducer = combineReducers({
  activeProduct: ActiveProductReducer,
  products: ProductListReducer
})
