import { combineReducers } from 'redux'
import { movies, login, loginFail } from './reducers'

const rootReducer = combineReducers({
  movies,
  login,
  loginFail
})

export default rootReducer
