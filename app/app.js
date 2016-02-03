import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import components
import {Hello} from './components/Hello'
import {Yo} from './components/Yo'
import ProductList from './containers/ProductList'

import store from './store/createStore'

const fakeProducts = [
  { name: 'Bananas', price: '9.99'},
  { name: 'Apples', price: '8.99'},
  { name: 'Pears', price: '7.99'},
]

//
ReactDOM.render(<Provider store={store}>
                  <Hello>
                    <div>
                      <Yo />
                      <ProductList>
                      </ProductList>
                    </div>
                  </Hello>
                </Provider>,
                document.getElementById('app-container'))
