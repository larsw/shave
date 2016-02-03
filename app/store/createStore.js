import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'

import { rootReducer } from '../reducers'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const fakeProducts = [
  { name: 'Bananas', price: '9.99'},
  { name: 'Apples', price: '8.99'},
  { name: 'Pears', price: '7.99'},
]

const initialState = {
  products: fakeProducts,
  activeProduct: null
}

export default createStoreWithMiddleware(rootReducer, initialState)
