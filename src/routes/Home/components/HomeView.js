import React from 'react'
import Header from 'components/Header'
import Banner from './Banner/Banner'
import './HomeView.scss'

export const HomeView = (props) => (
  <div>
    <Header></Header>
    <Banner {...props}></Banner>
  </div>
)

export default HomeView
