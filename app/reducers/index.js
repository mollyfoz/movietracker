import { combineReducers } from 'redux'
import { movies, login, handleFaves } from './reducers'

const rootReducer = combineReducers({
  movies,
  login,
  handleFaves
})

export default rootReducer
