import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieList from './components/MovieList/MovieList'
import movieListContainer from './containers/movieListContainer'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <MovieList />
  </Provider>,
  document.getElementById('main')
);
