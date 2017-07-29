import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

const Title = ({title}) => {
  if(title) {
    return <span className="title">{title}</span>
  }
  return null
}

const Menu = ({backAble, toggleNav}) => {
  if(backAble) {
    return <i className="menu fa icon-back"></i>
  }
  return <i className="menu fa fa-bars" onClick={toggleNav}></i>
}


export const Header = (props) => (
  <div className="header">
    <Menu {...props}></Menu>
    <Title {...props}></Title>
  </div>
)

export default Header
