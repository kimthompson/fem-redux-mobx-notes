import './index.css'

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'
import Application from './components/Application'

const store = createStore(
  rootReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION
)

const HOC = () => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  )
}

export default HOC
