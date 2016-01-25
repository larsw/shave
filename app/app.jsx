import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import components
import {Hello} from './components/Hello'
import {Yo} from './components/Yo'

import { store } from './store/createStore'

ReactDOM.render(<Provider store={store}>
                  <Hello>
                    <Yo />
                  </Hello>
                </Provider>,
                document.getElementById('app-container'))
