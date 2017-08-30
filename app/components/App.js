import React, { Component } from 'react';
// import Navigation from './Navigation/Navigation'
import MovieIndex from './MovieIndex/MovieIndex'
import Movies from '../helpers/helper.js'
import './app.css'


export default class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const movieArray = new Movies()
      movieArray.fetchMovies()
      .then(results => console.log('YO DOG SHIT WORKS', results))
      .catch(error => console.log('error'))
  }

  render() {
    return (
      <div>
        <header>

        </header>
        <div className='movie-container'>
          <MovieIndex />
        </div>
      </div>
    )
  }
}
