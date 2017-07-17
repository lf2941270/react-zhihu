import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = ({title}) => (
  <div className="header">
    {title}
  </div>
)

export default Header
