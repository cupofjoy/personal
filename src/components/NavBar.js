import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div id="navbar" className="ui fluid icon large pointed three item borderless top fixed secondary menu">
      <Link className="ui inverted item" to="/" > Home </Link>
      <Link className="ui inverted item" to="/about" > About </Link>
      {/* <Link className="ui inverted item" to="/blog" > Blog </Link> */}
      <Link className="ui inverted item" to="/contact" > Contact & Links </Link>
    </div>
  )
}

export default withRouter(NavBar)
