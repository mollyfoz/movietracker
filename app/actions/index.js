import { Route, Link } from 'react-router-dom';



export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    data: movies
  }
}

// export const cleanData = (array) => {
//   return array.map(movie => {
//     return {
//       movieId: movie.id,
//       title: movie.title,
//       date: movie.release_date,
//       desc: movie.overview,
//       score: movie.vote_average,
//       image: movie.poster_path,
//       fav: false,
//     }
//   })
// }

export const moviesFetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(object => object.results)
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
    .then(receivedFaves => dispatch(fetchFaves(receivedFaves)))
    .catch(error => alert('email and password do not match'))
  }
}

export const fetchFaves = (favorites) => {
  return {
    type: 'FAVES_SUCCESS',
    favorites
  }
}

export const getFaves = (id) => {
  return dispatch => {
    fetch(`api/users/${id}/favorites`)
    .then(data => data.json())
    .then(receivedFaves => dispatch(fetchFaves(receivedFaves.data)))
    .catch(error => alert('I didnt get anything :(' ))
  }
}

export const sendFaves = (movies) => {
  return {
    type: 'SENT_FAVE',
    movies
  }
}

export const addFaves = (fave) => {
  return dispatch => {
    fetch('api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(fave),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(validFave => dispatch(sendFaves(validFave)))
    .catch(error => alert('That movie has already been favorited!'))
  }
}

export const removeFaves = (movies) => {
  return {
    type: 'FAVES_DELETE',
    movies
  }
}

export const deleteFaves = (fave) => {
  return dispatch => {
    fetch('api/users/:id/favorites/:movie_id', {
      method: 'DELETE',
      body: JSON.stringify(fave),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(removedFave => dispatch(removeFaves(removedFave)))
    .catch(error => alert('I cant delete that, Dave'))
  }
}
