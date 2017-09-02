import React from 'react'


const MovieCard = ({ id, title, date, desc, score, image, fav }) => {

  return (
    <div
     className='movie-cards'>
      <button>favorite</button>
      <h2 className='card-title-text text' >{ title }</h2>
      <p className='date-text text'>{ date }</p>
      <p className='card-text text'>{ desc }</p>
      <p className='score-text text'>{ score }</p>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${image}`} />
    </div>
  )
}

export default MovieCard;
