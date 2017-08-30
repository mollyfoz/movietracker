import React from 'react'
import './MovieCard.css'

const MovieCard = () => {

  return (
    <div className='movie-cards'>
      <h2>Original_Title</h2>
      <p>Release_Date</p>
      <p>Overview</p>
      <p>Poster_Path</p>
      <p>Id</p>
      <p>Voter_Average</p>
    </div>
  )
}

export default MovieCard;
