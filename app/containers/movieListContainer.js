import { connect } from 'react-redux'
import { moviesFetchData } from '../actions/index'
import MovieList from '../components/MovieList/MovieList'

const mapStateToProps = (store) => {
    return {
        data: store.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(moviesFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
