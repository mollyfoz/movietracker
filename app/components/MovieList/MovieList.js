import React, { Component } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import key from '../../helpers/key'


export default class MovieList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('mount')
   this.props.fetchData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
  }

  render() {
    console.log('hi ', this.props)
    const allMovies = this.props.data.map((movie, i) => {
      return <MovieCard key={ i } {...movie}/>
    })

    return (
      <div className='movie-list-container'>
      Ummmm Hi guys
        { allMovies }
      </div>
    )
  }
}
