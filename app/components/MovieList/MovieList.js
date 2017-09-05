import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import MovieListContainer from '../../containers/MovieListContainer'

export class MovieList extends Component {

  componentDidMount() {
   this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=e9ab90094f9090f5f4725a3515a0915a&language=en-US&page=1`)

   if(this.props.loginInput.loggedIn) {
     this.props.fetchFaves(this.props.loginInput.user.data.id)
   }
  }


  checkFaves(movie) {
    if (movie.fav) {
      this.props.removeFaves(movie.user_id, movie.movie_id)
      movie.fav = false
    } else {
      this.props.addFaves(movie)
      movie.fav = true
    }
    this.props.fetchFaves(this.props.loginInput.user.data.id)
    console.log('stupid fucking console log')
  }

  compareArrays() {
    const { data, faves, favorites } = this.props
    const moviesArray = favorites ? faves : data

    if(faves.length > 0) {
      const favoriteMovies = faves.map(movie => movie.movie_id)
      return moviesArray.map(movie => {
        if (favoriteMovies.includes(movie.movie_id)) {
          return Object.assign({}, movie, {fav: true})
        }
          return movie
      })
    } else {
      return moviesArray
    }

  }

  render() {

    const allMovies = this.compareArrays( ).map((movie, i) => {
      return <MovieCard key={ i } {...movie} checkFaves={ this.checkFaves.bind(this)}/>
    })

    return (
      <div className='movie-list-container'>
        { allMovies }
      </div>
    )
  }
}

export default MovieListContainer(MovieList)
