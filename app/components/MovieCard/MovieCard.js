import React from 'react'
import { Link } from 'react-router-dom'
import MovieListContainer from '../../containers/MovieListContainer'


export const MovieCard = ({ movie_id, title, release_date, overview, vote_average, poster_path, fav, user, faveHandle, faves, checkFaves }) => {

  let movie = {
    movie_id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    fav
  }


  if (user) {
    movie = {
      movie_id,
      user_id: user.data.id,
      title,
      release_date,
      overview,
      vote_average,
      poster_path,
      fav
    }
  }

  let favedButton = fav ? 'Remove' : 'Favorite'

  return (

    <div
     className='movie-cards'>
     {
       (user) && <button className='button-link' onClick={ () => {
         checkFaves(movie) } }>{ favedButton }</button>
     }

     {
       (!user) && <Link className='button-link' to='/login'>Favorite</Link>
     }

      <h2 className='card-title-text text' >{ title }</h2>
      <p className='date-text text'>{ release_date }</p>
      <p className='card-text text'>{ overview }</p>
      <p className='score-text text'>{ vote_average }</p>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    </div>
  )
}

export default MovieListContainer(MovieCard);
