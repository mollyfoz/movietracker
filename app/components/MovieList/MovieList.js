import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
// import key from '../../helpers/key'


export default class MovieList extends Component {

  componentDidMount() {
    console.log('mount')
   this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=e9ab90094f9090f5f4725a3515a0915a&language=en-US&page=1`)
  }

  render() {
    console.log('hi ', this.props)
    const allMovies = this.props.data.map((movie, i) => {
      return <div>{ movie.title }</div>
    })

    return (
      <div className='movie-list-container'>
        Ummmm Hi guys
        { allMovies }
      </div>
    )
  }
}
