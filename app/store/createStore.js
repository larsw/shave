import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'

import { rootReducer } from '../reducers'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

export const store = createStoreWithMiddleware(rootReducer)
