import React from 'react'
import { Link } from 'react-router-dom'

const Account = (props) => {

  const loggedIn = props.loginInput.loggedIn

  return (

    <div >
      {
        (loggedIn) &&
        <div className='account-wrapper'>
        <Link className='favorites-nav' to='/favorites'>
        Favorites
        </Link>
          <Link className='sign-out'
            to='/'
            onClick={ () => {this.props.signOutUser()} }>
            Sign Out
          </Link>
        </div>
      }

      {
        (!loggedIn) &&
        <Link className='login' to='/login'>
          Log In
        </Link>
      }

    </div>
  )
}
export default Account
