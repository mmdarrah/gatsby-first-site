import React from 'react'
import { Link } from "gatsby"

import './SideDrawer.scss'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blog">Projects</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
    </nav>
  )
}

export default sideDrawer