// import React, { Component } from 'react'
// import MovieCard from '../MovieCard/MovieCard'
// import MovieCardContainer from '../../containers/MovieCardContainer'
// import MovieListContainer from '../../containers/MovieListContainer'
//
//
// export class Favorites extends Component {
//   constructor() {
//     super()
//
//   }
//
//   checkForUser() {
//     if (this.props.userId.data.id) {
//       return this.props.fetchFaves(this.props.userId.data.id)
//       }
//   }
//
//   componentDidMount() {
//     this.checkForUser()
//   }
//
//   render() {
//
//     const faveMovies = this.props.faves.map((fave, i) => {
//       return <MovieCardContainer key={ i } {...fave} />
//     })
//
//     return (
//       <div className='movie-list-container'>
//         { faveMovies }
//       </div>
//     )
//   }
// }
//
// export default MovieListContainer(Favorites)
