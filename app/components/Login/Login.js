import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.grabValue = this.grabValue.bind(this)
  }

  grabValue(e) {
    this.setState({
        [e.target.title]: e.target.value,
    })
  }

  render() {
    return(
      <div>
        <form>
        <input
          title='name' type="text" value={this.state.name}
          placeholder="name"
          onChange={(e) => this.grabValue(e)} />
        <input
          title='email' type="email" value={this.state.email}
          placeholder="email"
          onChange={(e) => this.grabValue(e)} />
        <input
          title='password' type="password"
          placeholder="password"
          onChange={(e) => this.grabValue(e)} />
        <button
          // disabled={ this.state.disabled }
          onClick={ (e) => {
            e.preventDefault();
            this.props.submitLogin(this.state)}}>Log In</button>
        <button
            // disabled={ this.state.disabled }
          onClick={ (e) => {
            e.preventDefault();
            this.props.addUser(this.state)}}>Create User</button>
        </form>
      </div>
    )
  }
}
