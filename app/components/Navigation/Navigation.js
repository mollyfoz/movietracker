import React from 'react'
import LoginContainer from '../../containers/LoginContainer'
// import { Route, NavLink } from 'react-router-dom'


const Navigation = () => {

  return (
    <div>
      <div className=" nav-wrapper">
        <h1>MovieTracker</h1>
        <LoginContainer />
      </div>
    </div>
  )
}

export default Navigation;
