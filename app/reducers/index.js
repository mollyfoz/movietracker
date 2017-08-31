import { combineReducers } from 'redux'
import { movies, login } from './reducers'

const rootReducer = combineReducers({
  movies,
  login
})

export default rootReducer
