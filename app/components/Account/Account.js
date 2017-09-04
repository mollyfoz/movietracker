import React from 'react'
import { Link } from 'react-router-dom'

const Account = (props) => {



  return (
    <div className='account nav'>
      {
        (props.loginInput.loggedIn) &&
        <div>
        <Link className='nav' to='/favorites'>
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
        (!props.loginInput.loggedIn) &&
        <Link className='login' to='/login'>
          Log In
        </Link>
      }

    </div>
  )
}
export default Account
