import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import MovieList from './MovieList/MovieList'
import MovieListContainer from '../containers/MovieListContainer'
// import Movies from '../helpers/fetch'
// import cleanData from '../helpers/clean'
import './app.css'


export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <div className='movie-container'>
          <MovieListContainer />
        </div>
      </div>
    )
  }
}
