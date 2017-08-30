import { connect } from 'react-redux'
import { callAPIAction } from '../actions'
import MovieIndex from '../components/MovieIndex/MovieIndex'

const mapStateToProps = (store) => {
  return {
    callAPI: store.callAPI
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorite: (title, id, desc, score, image, date) => {
      dispatch(callAPI(title, id, desc, score, image, date))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
