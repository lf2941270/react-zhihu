import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'


export default ({show}) => (
  <div className="navbar" style={{display: show ? 'block' : 'none'}}></div>
)
