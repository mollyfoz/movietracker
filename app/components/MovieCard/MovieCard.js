import React from 'react'
import { Redirect } from 'react-router-dom'


const MovieCard = ({ id, title, release_date, overview, vote_average, poster_path, fav, user, faveHandle }) => {

let movie = {
  movie_id: id,
  title,
  release_date,
  overview,
  vote_average,
  poster_path,
  fav
}


if(user){
  movie = {
    movie_id: id,
    user_id: user.data.id,
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    fav
  }
}

  return (
    <div
     className='movie-cards'>
      <button onClick={ (e) => {
        console.log(movie)
        faveHandle(movie) } }>favorite</button>
      <h2 className='card-title-text text' >{ title }</h2>
      <p className='date-text text'>{ release_date }</p>
      <p className='card-text text'>{ overview }</p>
      <p className='score-text text'>{ vote_average }</p>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
    </div>
  )
}

export default MovieCard;
