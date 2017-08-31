import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name: '',
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
        <input
          type="text" value={this.state.name}
          placeholder="name"
          onChange={(e) => this.grabValue('name', e)} />
          <input
            type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabValue('email', e)} />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => this.grabValue('password', e)} />
          <button
            disabled={ this.state.disabled }
            onClick={ (e) => {
              e.preventDefault();
              this.props.submitLogin(this.state)
            }}>Log In</button>
          <button
            disabled={ this.state.disabled }
            onClick={ (e) => {
              e.preventDefault();
              this.props.addUser(this.state)
            }}>
            Create User</button>
        </form>
      </div>
    )

  }
}
