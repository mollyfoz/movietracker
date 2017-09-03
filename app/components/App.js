import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import MovieList from './MovieList/MovieList'
import Favorites from './Favorites/Favorites'
import MovieListContainer from '../containers/MovieListContainer'
import LoginContainer from '../containers/LoginContainer'
import AccountContainer from '../containers/AccountContainer'
import './app.css'
import { Route, NavLink, Link } from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
    <h1 className='notflix'>Notflix</h1>

        <header>
          <NavLink to='/' className='nav'> Home </NavLink>
          <NavLink to='/Favorites' className='nav'> Favorites </NavLink>
          <AccountContainer />
        </header>
        <div className='movie-container'>
          <Route exact path='/' component={ MovieList } />
          <Route exact path='/login' component={ Navigation } />
        </div>
      </div>
    )
  }
}

// <Route exact path='/favorites' component={ Favorites } />
