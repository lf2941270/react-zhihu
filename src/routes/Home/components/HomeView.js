import React, {Component} from 'react'
import Header from 'components/Header'
import Banner from './Banner/Banner'
import './HomeView.scss'
export class HomeView extends Component {
  componentWillMount() {
    this.props.fetchLatest()
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Banner {...this.props}></Banner>
      </div>
    )
  }
}

export default HomeView
