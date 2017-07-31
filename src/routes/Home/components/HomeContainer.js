import { connect } from 'react-redux'
import _ from 'lodash'
import HomeView from './HomeView'

const mapStateToProps = (state) => ({
  banners: _.range(5).map(() => ({
    pic: 'http://placekitten.com/g/400/200'
  }))
})

export default connect(mapStateToProps)(HomeView)
