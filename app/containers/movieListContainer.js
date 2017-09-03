import { connect } from 'react-redux'
import { moviesFetchData, getFaves } from '../actions/index'
import MovieList from '../components/MovieList/MovieList'

const mapStateToProps = (store) => {
    return {
        data: store.movies,
        faves: store.favorites,
        userId: store.login.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(moviesFetchData(url)),
        fetchFaves: (id) => dispatch(getFaves(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
