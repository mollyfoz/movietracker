import { connect } from 'react-redux'
import { signOut } from '../actions/index'
import Account from '../components/Account/Account'

const mapStateToProps = (store) => {
    return {
        loginInput: store.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (user) => dispatch(signOut(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
