import React from 'react'
import { IndexLink, Link } from 'react-router'
import proxy from 'utils/proxy'
import './list.scss'

export class List extends React.Component  {
  render() {

    return (
      <div className="list-wrap">
        <section>
          <div className="date">今日新闻</div>
          <ul>
            {this.props.stories.map((item, index) => (
              <li key={index} className="clearfix">
                <div className="image" style={{backgroundImage: 'url(' + proxy(item.images[0]) + ')'}}>
                </div>
                <div className="title">{item.title}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }

}

export default List
