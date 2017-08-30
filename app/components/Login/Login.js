import React, { Component } from 'react';

export default class Login extends Component {
  construtor() {
    super()
  }

  render() {
    return(
      <div>
        <form>
          <input placeholder="email" />
          <input placeholder="password" />
          <button>Log In</button>
          <button>Create User</button>
        </form>
      </div>
    )

  }
}
