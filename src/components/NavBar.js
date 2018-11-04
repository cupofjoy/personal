import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
      <header className="nav">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    )
  }
}
