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
  name: '',
}

export const login = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, {user: action.user, loggedIn: action.user.loggedIn})

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
