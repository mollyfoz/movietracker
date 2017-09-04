import React from 'react'
import { Link } from 'react-router-dom'

const Account = (props) => {

  const isLoggedIn = props.loginInput.loggedIn

  return (
    <div className='account nav'>
      {
        (isLoggedIn) &&
        <Link className='sign-out'
          to='/'
          onClick={ () => {this.props.signOutUser()} }>
          Sign Out
        </Link>
      }

      {
        (!isLoggedIn) &&
        <Link className='login' to='/login'>
          Log In
        </Link>
      }

    </div>
  )
}
export default Account
