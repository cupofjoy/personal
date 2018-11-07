import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';

import WelcomePage from './components/WelcomePage.js'
import About from './components/About.js'
import NavBar from './components/NavBar.js'
import BottomNavBar from './components/BottomNavBar.js'
import Contact from './components/Contact.js'
import Blog from './components/Blog.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Route exact path="/" component={ (props) => <WelcomePage {...props} /> } />
          <Route exact path="/about" component={ (props) => <About {...props} /> } />
          <Route exact path="/contact" component={ (props) => <Contact {...props} /> } />
          <Route exact path="/blog" component={ (props) => <Blog {...props} /> } />
        </div><br/><br/>
        <BottomNavBar />
      </div>
    );
  }
}

export default withRouter(App);
