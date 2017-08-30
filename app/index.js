import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MovieList from './components/MovieList/MovieList'
import MovieListContainer from './containers/MovieListContainer'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import App from './components/App'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = configureStore(devTools)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
);
