import React from 'react'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import 'font-awesome/scss/font-awesome.scss'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Navbar></Navbar>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
