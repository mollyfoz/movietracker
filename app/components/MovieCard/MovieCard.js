import React from 'react'
import './MovieCard.css'

const MovieCard = ({ title, release_date, overview, poster_path, vote_average, id }) => {

  return (
    <div className='movie-cards'>
      <h2>{ title }</h2>
      <p>{ release_date }</p>
      <p>{ overview }</p>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <p>{ vote_average }</p>
    </div>
  )
}

export default MovieCard;
