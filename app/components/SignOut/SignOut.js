import React from 'react';

const SignOut = () => {
  return (
    <div>
    <h3>fuckin quitters</h3>
      <button onClick={ (e)=> this.props.signOut() }> Sign Out </button>
    </div>


  )


}
export default SignOut;
