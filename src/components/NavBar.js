import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';




class NavBar extends Component {
  render() {
    return (
      <div className="ui icon large blue menu">
        <Link className="ui inverted item" to="/" > Home </Link>
        <Link className="ui inverted item" to="/about" > About </Link>
        <Link className="ui inverted item" to="/contact" > Contact </Link>
      </div>
    )
  }
}

export default withRouter(NavBar)
