import { combineReducers } from 'redux'
import formReducer from './formReducer'

export const intitialState = {
  data: {},
}
export default combineReducers({
  data: formReducer,
})
