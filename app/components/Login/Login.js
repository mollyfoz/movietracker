import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      disabled: true
    }
    this.grabValue = this.grabValue.bind(this)
  }

  grabValue(inputField, e) {
    this.setState({
      [inputField]: e.target.value,
      disabled: false
    })
  }

  render() {
    return(
      <div>
        <form>
          <input type="email" value={this.state.email} placeholder="email" onChange={(e) => this.grabValue('email', e)} />
          <input type="password" placeholder="password" onChange={(e) => this.grabValue('password', e)} />
          <button disabled={ this.state.disabled }>Log In</button>
          <button disabled={ this.state.disabled }>Create User</button>
        </form>
      </div>
    )

  }
}
