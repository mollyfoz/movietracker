import React from 'react'
import App from '../App'
import Login from '../Login/Login'
import LoginContainer from '../../containers/LoginContainer'

const Navigation = () => {

  return (
    <div>
      <h1 className='title'>MovieTracker</h1>
        <LoginContainer />
    </div>
  )
}

export default Navigation;
