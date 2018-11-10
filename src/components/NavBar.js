import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {  Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  return (
    <Menu fluid centered middle top borderless tabular widths={3}>
      <Link className="ui inverted item" to="/" > Home </Link>
      <Link className="ui inverted item" to="/about" > About </Link>
      {/* <Link className="ui inverted item" to="/blog" > Blog </Link> */}
      <Link className="ui inverted item" to="/contact" > Contact & Links </Link>
    </Menu>
  )
}

export default withRouter(NavBar)
