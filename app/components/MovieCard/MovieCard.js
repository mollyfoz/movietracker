import React from 'react'
import { Redirect } from 'react-router-dom'


const MovieCard = ({ movieId, title, date, desc, score, image, fav }) => {

  const isActiveUser = (e) => {
    if(true) {
      console.log(e)
      return <Redirect to='/login' />
    } else {
      console.log('yall retarded')
    }
  }

  return (
    <div
     className='movie-cards'>
      <button onClick={ (e) => isActiveUser(e) }>favorite</button>
      <h2 className='card-title-text text' >{ title }</h2>
      <p className='date-text text'>{ date }</p>
      <p className='card-text text'>{ desc }</p>
      <p className='score-text text'>{ score }</p>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${image}`} />
    </div>
  )
}

export default MovieCard;
