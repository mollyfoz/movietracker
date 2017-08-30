import React from 'react'
import key from './key'


class Movies {

  fetchMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
    .then(data => data.json())
  }
}

module.exports = Movies
