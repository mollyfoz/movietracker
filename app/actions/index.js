export const moviesFetchDataSuccess = (movies) => {
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    data: movies
  }
}

export const moviesFetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(moviesFetchDataSuccess(data.results)))
      .catch(error => console.log('NOW YOU FUCKED UP ', error))
  }
}
