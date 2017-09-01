import React, { Component } from 'react';
import Navigation from './Navigation/Navigation'
import MovieList from './MovieList/MovieList'
import MovieListContainer from '../containers/MovieListContainer'
import './app.css'
import { Route, NavLink } from 'react-router-dom'


export default class App extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <div>
        <header>
          <NavLink to='/' className='nav'> Home </NavLink>
          <NavLink to='/login' className='nav'> Log In </NavLink>
          <NavLink to='/profile' className='nav'> Profile </NavLink>
        </header>
        <div className='movie-container'>
          <Route exact path='/'
                      component={ MovieListContainer }
          />
          <Route exact path='/login'
                        component={ Navigation }
          />
        </div>
      </div>
    )
  }
}
