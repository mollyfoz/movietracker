import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
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
        <header>
          <NavLink to='/' className='nav'> Home </NavLink>
          <NavLink to='/favorites' className='nav'> Favorites </NavLink>
          <AccountContainer />
        </header>
        <div className='movie-container'>
          <Route exact path='/' component={ MovieListContainer } />
          <Route exact path='/login' component={ Navigation } />
        </div>
      </div>
    )
  }
}
