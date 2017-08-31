import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'

export default class MovieList extends Component {

  componentDidMount() {
   this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=e9ab90094f9090f5f4725a3515a0915a&language=en-US&page=1`)
  }

  render() {

    const allMovies = this.props.data.map((movie, i) => {
      return <MovieCard key={ i } {...movie}/>
    })

    return (
      <div className='movie-list-container'>
        { allMovies }
      </div>
    )
  }
}
