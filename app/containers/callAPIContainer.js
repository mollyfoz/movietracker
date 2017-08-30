import { connect } from 'react-redux'
import { callAPIAction } from '../actions'
import App from '../components/App'

const mapStateToProps = (store) => {
  return {
    callAPI: store.callAPI
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFavorite: (title, date, desc, image, id, score) => {
      dispatch(callAPIAction(title, date, desc, image, id, score))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
