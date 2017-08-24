import { combineReducers } from 'redux'
import locationReducer from './location'
import ui from './ui'
import home from './home'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ui,
    home: home,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
