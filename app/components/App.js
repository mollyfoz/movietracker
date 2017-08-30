import React, { Component } from 'react';
// import Navigation from './Navigation/Navigation'
import MovieList from './MovieList/MovieList'
import MovieListContainer from '../containers/MovieListContainer'
// import Movies from '../helpers/fetch'
// import cleanData from '../helpers/clean'
import './app.css'


export default class App extends Component {
  constructor() {
    super()
  }

  // componentDidMount() {
  //   const movieArray = new Movies()
  //     return movieArray.fetchMovies()
  //     .then(data => data.results)
  //     .then(films => {
  //       return films.map((filmObj, i) => {
  //          return Object.assign({}, { title: filmObj.title, date: filmObj.release_date, desc: filmObj.overview, image: filmObj.poster_path, id: filmObj.id, score: filmObj.vote_average })
  //       })
  //     })
  //     .then(results => console.log('your mom: ', results))
  //     .catch(error => console.log('error'))
  // }

  render() {
    return (
      <div>
        <header>

        </header>
        <div className='movie-container'>
          <MovieListContainer />
        </div>
      </div>
    )
  }
}
