import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, title, date, desc, score, image, fav }) => {

  return (
    <div className='movie-cards'>
      <h2>{ title }</h2>
      <p>{ date }</p>
      <p>{ desc }</p>
      <img src={`https://image.tmdb.org/t/p/w500${image}`} />
      <p>{ score }</p>
    </div>
  )
}

export default MovieCard;
