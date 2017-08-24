import { connect } from 'react-redux'
import _ from 'lodash'
import HomeView from './HomeView'
import {fetchLatest} from 'actions/home'

const mapStateToProps = (state) => ({
  banners: state.home.top_stories || [],
  stories: state.home.stories || []
})
const mapDispatchToProps = (dispatch) => ({
  fetchLatest: () => {
    dispatch(fetchLatest())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
