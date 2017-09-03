import { combineReducers } from 'redux'
import { movies, login, loginFail, handleFaves } from './reducers'

const rootReducer = combineReducers({
  movies,
  login,
  loginFail,
  handleFaves
})

export default rootReducer
