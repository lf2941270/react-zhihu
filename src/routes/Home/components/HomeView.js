import React, {Component} from 'react'
import Header from 'components/Header'
import Banner from './Banner/Banner'
import List from './List/List'
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
        <List {...this.props}></List>
      </div>
    )
  }
}

export default HomeView
