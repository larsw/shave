import { combineReducers } from 'redux'

import { itemsReducer } from './itemsReducers.js'

export const rootReducer = combineReducers({
  items: itemsReducer
})
