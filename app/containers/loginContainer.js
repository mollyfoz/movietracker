import { connect } from 'react-redux'
import { checkUser, createUser, getFaves } from '../actions/index'
import Login from '../components/Login/Login'

const mapStateToProps = (store) => {
  return {
    loginInput: store.login,
    faves: store.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (user) => dispatch(checkUser(user)),
    addUser: (user) => dispatch(createUser(user)),
    fetchFaves: (user) => dispatch(getFaves(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
