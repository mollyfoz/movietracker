import { Route, Link } from 'react-router-dom';



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

export const loginFail = (user, loggedIn) => {
  return {
    type: 'LOGIN_FAIL',
    user,
    loggedIn: false
  }
}

export const signOut = (user) => {
  return {
    type: 'SIGN_OUT',
    user
  }
}

// export const removeUser = (user) => {
//   return dispatch => dispatch(signOut(user))
// }

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
    .then(response => response.status !== 'success' ? alert('Email already in use') : response.ok)
    .then(validUser => dispatch(loginSuccess(user)))
    .catch(error => console.log('you have fucked up now', error))
  }
}

export const checkUser = (user) => {
  return dispatch => {
    fetch('api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(validUser => dispatch(loginSuccess(validUser)))
    .catch(error => alert('email and password do not match'))
  }
}
