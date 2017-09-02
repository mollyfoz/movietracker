import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import MovieListContainer from '../containers/MovieListContainer'
import LoginContainer from '../containers/LoginContainer'

import { Route, NavLink, Link } from 'react-router-dom';
import './app.css'


export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <header>
          <NavLink to='/' className='nav nav-home'> Home </NavLink>
          <NavLink to='/login'className='nav nav-login'> Log In </NavLink>
          <NavLink to='/favorites' className='nav nav-favorites'> Favorites </NavLink>
        </header>
        <div className='movie-container'>
          <Route exact path='/' component={ MovieListContainer } />
          <Route exact path='/login' component={ Navigation } />
        </div>
      </div>
    )
  }
}
