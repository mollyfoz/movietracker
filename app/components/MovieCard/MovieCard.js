import React from 'react'


const MovieCard = ({ id, title, date, desc, score, image, fav }) => {

  return (
    <div
     className='movie-cards'>
     <div className='overlay'>
      <h2 >{ title }</h2>
      <p className='card-text'>{ date }</p>
      <p className='card-text'>{ desc }</p>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${image}`} />
      <p>{ score }</p>
      </div>
    </div>
  )
}

export default MovieCard;
