import React from 'react'
import * as actions from '../actions'
import fetchMock from 'fetch-mock'

describe('actions', () => {

  const movies = [
     {"vote_count":665,
     "id":396422,
     "video":false,
     "vote_average":6.5,
     "title":"Annabelle: Creation",
     "popularity":374.244615,
     "poster_path":"\/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
     "original_language":"en",
     "original_title":"Annabelle: Creation",
     "genre_ids":[53,27],
     "backdrop_path":"\/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
     "adult":false,
     "overview":"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
     "release_date":"2017-08-03"
    }
   ]

   const favorites = [
      {"vote_count":665,
      "id":396422,
      "video":false,
      "vote_average":6.5,
      "title":"Annabelle: Creation",
      "popularity":374.244615,
      "poster_path":"\/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
      "original_language":"en",
      "original_title":"Annabelle: Creation",
      "genre_ids":[53,27],
      "backdrop_path":"\/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
      "adult":false,
      "overview":"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
      "release_date":"2017-08-03"
     }
    ]

  const user = {
    data: {
      email: "dan@yaboi.com",
      id: 4,
      name: "dan",
      password: "dan"
    }
  }

  it('should create an action to fetch movie data', () => {
   const data = movies
   const expectedAction = {
     type: 'MOVIES_FETCH_DATA_SUCCESS',
     data
   }
   expect(actions.moviesFetchDataSuccess(data)).toEqual(expectedAction)
  })

  it('should create an action to check if user is logged in', () => {
   const user = user
   const expectedAction = {
     type: 'LOGIN_SUCCESS',
     user
   }
   expect(actions.loginSuccess(user)).toEqual(expectedAction)
  })

  it('should be able to sign out a user', () => {
   const user = user
   const expectedAction = {
     type: 'SIGN_OUT',
     user
   }
   expect(actions.signOut(user)).toEqual(expectedAction)
  })

  it('should create an action to fetch favorite movies', () => {
   const favorites = favorites
   const expectedAction = {
     type: 'FAVES_SUCCESS',
     favorites
   }
   expect(actions.fetchFaves(favorites)).toEqual(expectedAction)
  })

  it('should create an action to send favorite movies', () => {
   const movies = movies
   const expectedAction = {
     type: 'SENT_FAVE',
     movies
   }
   expect(actions.sendFaves(movies)).toEqual(expectedAction)
  })

  it('should create an action to remove favorite movies', () => {
   const favorites = favorites
   const expectedAction = {
     type: 'FAVES_DELETE',
     favorites
   }
   expect(actions.removeFaves(favorites)).toEqual(expectedAction)
  })
})

describe('fetch movies from API', () => {

  it.skip('returns an array of objects on moviesFetchData', () => {
    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=e9ab90094f9090f5f4725a3515a0915a&language=en-US&page=1`)
    .then(() => {
      expect()
    })
  })
})

describe('fetch to create a user', () => {

  let response

  beforeEach(() => {
    fetchMock.get('/api/users/new', {
      status: 200,
      body: response
    })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  it.skip('should create a new user', () => {
    const mockData = {
       name: 'Dan',
       email: 'Dan@yaboi.com',
       password: 'dan'
    }
    const response = {
      user: { name: 'Dan', id: 1, email: 'Dan@yaboi.com', password: 'dan' },
      type: 'LOGIN_SUCCESS'
    }
    expect(actions.createUser(mockData)).toEqual(response)
  })
})
