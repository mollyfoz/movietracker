import React from 'react'
import { movies, login, handleFaves } from './reducers'

describe('actions reducer', () => {

  const defaultState = {
    email: '',
    password: '',
    name: ''
  }

  const action = {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    data: [
     {"vote_count":665,
     "id":396422,
     "vote_average":6.5,
     "title":"Annabelle: Creation",
     "poster_path":"\/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
     "original_title":"Annabelle: Creation",
     "overview":"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
     "release_date":"2017-08-03"
   }],
   favorites: [
    {"vote_count":665,
    "id":396422,
    "vote_average":6.5,
    "title":"Annabelle: Creation",
    "poster_path":"\/tb86j8jVCVsdZnzf8I6cIi65IeM.jpg",
    "original_title":"Annabelle: Creation",
    "overview":"Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle.",
    "release_date":"2017-08-03"
   }]
  }

  const userLogin = {
    user: action.user,
    loggedIn: true
  }

  it('should return the initial state for movies', () => {
    expect(movies(undefined, {}) ).toEqual([])
  })

  it('movie state should return an array of movie objects', () => {
    expect(movies(action.data, action.type)).toEqual(action.data)
})

  it('should return the initial state for login', () => {
    expect(login(defaultState, {})).toEqual(defaultState)
  })

  it('login state should return an object with a  user', () => {
    expect(login(userLogin, action.type)).toEqual(userLogin)
  })

  it('should return the initial state for handleFaves', () => {
    expect(handleFaves(undefined, {})).toEqual([])
  })

  it('should return movies if handle faves type is sent', () => {
    expect(handleFaves(action.data, 'SENT_FAVE').length).toEqual(1)
  })

  it('should return faves if handle faves type is success', () => {
    expect(handleFaves(action.favorites, 'FAVES_SUCCESS').length).toEqual(1)
  })
})
