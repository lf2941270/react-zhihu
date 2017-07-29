import { connect } from 'react-redux'

import Navbar from './Navbar'

const mapStateToProps = (state) => ({
  show: state.ui.showNavbar,
  categories: []
})

export default connect(mapStateToProps)(Navbar)
