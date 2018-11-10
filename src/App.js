import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
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
      <Grid columns='equal' id="App">
        <div className="stretched row">
          <Grid.Column fluid>
            <NavBar />
          </Grid.Column>
        </div>
        <Grid.Row centered>
          <div>
            <Route exact path="/" component={ (props) => <WelcomePage {...props} /> } />
            <Route exact path="/about" component={ (props) => <About {...props} /> } />
            <Route exact path="/contact" component={ (props) => <Contact {...props} /> } />
            <Route exact path="/blog" component={ (props) => <Blog {...props} /> } />
          </div>
          <br/><br/>
        </Grid.Row>
        <BottomNavBar />
      </Grid>
    );
  }
}

export default withRouter(App);
