import React, { Component } from 'react';
import Login from './Login/Login'
import MovieList from './MovieList/MovieList'
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
          <div className='notflix-wrapper'>
            <h1 className='notflix'>Notflix</h1>
          </div>
          <div className='link-wrapper'>
            <NavLink to='/' className='nav'> Home </NavLink>
            <AccountContainer />
          </div>
        </header>
        <div className='movie-container'>
          <Route exact path='/' component={ MovieList } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/favorites' render={ () => <MovieList favorites={true} /> } />
        </div>
      </div>
    )
  }
}
// <NavLink to='/Favorites' className='nav'> Favorites </NavLink>
