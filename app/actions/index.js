export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    data: movies
  }
}

export const cleanData = (array) => {
  return array.map(movie => {
    return {
      movieId: movie.id,
      title: movie.title,
      date: movie.release_date,
      desc: movie.overview,
      score: movie.vote_average,
      image: movie.poster_path,
      fav: false,
    }
  })
}

export const moviesFetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.results)
      .then(array => cleanData(array))
      .then(cleanArray => dispatch(moviesFetchDataSuccess(cleanArray)))
      .catch(error => console.log('ERROR', error))
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    user
  }
}

export const createUser = (user) => {
  return dispatch => {
    fetch('api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(response => console.log(response))
  }
}

export const compareInput = (array, user) => {
  return array.filter(obj => {
    if (obj.email !== user.email) {
      console.log('put a router in here idiots')
    } else {
      console.log('also route here my dudes')
    }
  })
}

export const checkUser = (user) => {
  return dispatch => {
    fetch('api/users', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(object => compareInput(object.data, user))
    .then(response => console.log(response))
  }
}
