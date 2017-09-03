import { connect } from 'react-redux'
import { moviesFetchData, getFaves, checkUser, createUser } from '../actions/index'
import MovieList from '../components/MovieList/MovieList'

const mapStateToProps = (store) => {
    return {
        data: store.movies,
        faves: store.handleFaves,
        userId: store.login.user,
        loginInput: store.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (user) => dispatch(checkUser(user)),
        addUser: (user) => dispatch(createUser(user)),
        fetchData: (url) => dispatch(moviesFetchData(url)),
        fetchFaves: (id) => dispatch(getFaves(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
