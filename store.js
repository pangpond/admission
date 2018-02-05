// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import rootReducer, { initialState } from './reducers'

// export default (state = initialState) => {
//   const middlewares = [thunkMiddleware, createLogger()]
//   return createStore(rootReducer, state, compose(applyMiddleware(...middlewares)))
// }

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import rootReducer, { initialState } from './reducers'

const middlewares = [thunkMiddleware, createLogger()]

const initStore = () =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

// const initStore = (state = initialState) => {
//   const middlewares = [thunkMiddleware, createLogger()]
//   return createStore(rootReducer, state, composeWithDevTools(applyMiddleware(...middlewares)))
// }
// export default store
export { initStore }
