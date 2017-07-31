import { connect } from 'react-redux'
import {hideNav} from 'actions/ui'
import PageLayout from './PageLayout'

const mapDispatchToProps = (dispatch) => ({
  hideNav: () => {
    dispatch(hideNav())
  }
})

export default connect(undefined, mapDispatchToProps)(PageLayout)
