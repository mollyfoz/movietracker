import { connect } from 'react-redux'
import { moviesFetchData, getFaves, checkUser, createUser, addFaves, removeFaves  } from '../actions/index'
import MovieList from '../components/MovieList/MovieList'
import MovieCard from '../components/MovieCard/MovieCard'

const mapStateToProps = (store) => {
    return {
        data: store.movies,
        faves: store.handleFaves,
        user: store.login.user,
        loginInput: store.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (user) => dispatch(checkUser(user)),
        addUser: (user) => dispatch(createUser(user)),
        fetchData: (url) => dispatch(moviesFetchData(url)),
        fetchFaves: (id) => dispatch(getFaves(id)),
        addFaves: (movie) => dispatch(addFaves(movie)),
        removeFaves: (movie) => dispatch(removeFaves(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
