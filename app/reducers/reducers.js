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
      return {
        name: action.name,
        email: action.email,
        password: action.password }

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
