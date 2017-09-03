export const movies = (state = [], action) => {
  switch (action.type) {
    case 'MOVIES_FETCH_DATA_SUCCESS':
      return action.data

    default:
      return state
  }
}

const defaultState = {
  email: '',
  password: '',
  name: ''
}

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {user: action.user, loggedIn: true})
    case 'SIGN_OUT':
      return {}

    default:
      return state
  }
}

export const loginFail = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_FAIL':
    default:
      return state
  }
}

export const handleFaves = (state = [], action) => {
  switch(action.type) {
    case 'SENT_FAVE':
      return action.movies
    case 'FAVES_SUCCESS':
      return action.favorites

    default:
      return state
  }
}
