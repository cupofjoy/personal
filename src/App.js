import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import './App.css';

import WelcomePage from './components/WelcomePage.js'
import About from './components/About.js'
import NavBar from './components/NavBar.js'

class App extends Component {
  render() {
    return (
      <Component>
        <NavBar />
        <Route exact path="/" component={ (props) => <WelcomePage {...props} /> } />
        <Route exact path="/about" component={ (props) => <About {...props} />} />
      </Component>
    );
  }
}

export default App;
