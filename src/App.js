import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.css';
import { Grid } from 'semantic-ui-react'

import WelcomePage from './components/WelcomePage.js'
import About from './components/About.js'
// import NavBar from './components/NavBar.js'
import BottomNavBar from './components/BottomNavBar.js'
import Contact from './components/Contact.js'
import Blog from './components/Blog.js'
import VerticalNavBar from './components/VerticalNavBar.js'

/*
<VerticalNavBar />
<div>
  <Route exact path="/" component={ (props) => <WelcomePage {...props} /> } />
  <Route exact path="/about" component={ (props) => <About {...props} /> } />
  <Route exact path="/contact" component={ (props) => <Contact {...props} /> } />
  <Route exact path="/blog" component={ (props) => <Blog {...props} /> } />
</div><br/><br/>
<BottomNavBar />
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid stackable columns={2} divided>
          <Grid.Column width={3} mobile={1} verticleAlign='middle'><VerticalNavBar /></Grid.Column>
          <Grid.Column width={12} mobile={5} middle stretched>
            <Route exact path="/" component={ (props) => <WelcomePage {...props} /> } />
            <Route exact path="/about" component={ (props) => <About {...props} /> } />
            <Route exact path="/contact" component={ (props) => <Contact {...props} /> } />
            <Route exact path="/blog" component={ (props) => <Blog {...props} /> } />
          </Grid.Column>
        </Grid>
        <BottomNavBar />
      </div>
    );
  }
}

export default withRouter(App);
