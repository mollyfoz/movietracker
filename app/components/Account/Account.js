import React from 'react'
import { Link } from 'react-router-dom'

const Account = (props) => {

  return (
    <div className='account'>
      {
        (props.loginInput.loggedIn) && <Link className='sign-out' to='/' onClick={ () => {this.props.signOutUser()} }> Sign Out</Link>
      }

      {
        (!props.loginInput.loggedIn) && <Link className='login' to='/login'> Log In</Link>
      }

    </div>
  )
}
export default Account
