import { connect } from 'react-redux'
import {toggleNav} from 'actions/ui'
import Header from './Header'

const mapStateToProps = (state) => ({
  title: '首页',
  backAble: false
})

const mapDispatchToProps = (dispatch) => ({
  toggleNav: () => {
    dispatch(toggleNav())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
