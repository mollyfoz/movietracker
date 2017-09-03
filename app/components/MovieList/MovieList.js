import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import MovieCardContainer from '../../containers/MovieCardContainer'
import MovieListContainer from '../../containers/MovieListContainer'
// import LoginContainer from '../../containers/LoginContainer'


export class MovieList extends Component {

  componentDidMount() {
   this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=e9ab90094f9090f5f4725a3515a0915a&language=en-US&page=1`)

   if(this.props.loginInput.loggedIn) {
     this.props.fetchFaves(this.props.loginInput.user.data.id)
   }
  }

  checkFaves(movie) {
    if (movie.fav) {
      this.props.removeFaves(movie)
      movie.fav = false
    } else {
      this.props.addFaves(movie)
      movie.fav = true
    }
  }

  render() {

    const { data, faves, favorites } = this.props
    const moviesArray = favorites ? faves : data
    const allMovies = moviesArray.map((movie, i) => {
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
