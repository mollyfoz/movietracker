import React from 'react'
import App from '../App'
import Login from '../Login/Login'
import LoginContainer from '../../containers/LoginContainer'

const Navigation = () => {

  return (
    <div>
      <div className='logo-container'>
      <img src="app/components/Navigation/notflix.svg" alt=""/>
      <LoginContainer />
      </div>
    </div>
  )
}

export default Navigation;
