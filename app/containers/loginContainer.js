import { connect } from 'react-redux'
import { checkUser, createUser } from '../actions/index'
import Login from '../components/Login/Login'

const mapStateToProps = (store) => {
  return {
    loginInput: store.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (user) => dispatch(checkUser(user)),
    addUser: (user) => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
