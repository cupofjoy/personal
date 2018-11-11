import React, { Component } from 'react'
import '../App.css';
import { Header, Segment } from 'semantic-ui-react'

/*
<div className="welcome" style={{paddingTop: '150px', height: '60em', opacity: '0.9'}}><br/>
  <h2>
    <i area-hidden="true" className="code teal large icon" />
    <i area-hidden="true" className="camera grey large icon" />
    <i area-hidden="true" className="coffee blue large icon" />
  </h2><br/>
  <h2 className="ui icon center aligned header">
    <div id="welcome" className="content">Welcome !</div>
  </h2>
</div>
*/

const WelcomePage = () => {
  return (
      <Header  as='h4' fluid top id="welcome" style={{ opacity: '0.9' }}><br/>
          <i area-hidden="true" className="code teal small icon" />
          <i area-hidden="true" className="camera grey small icon" />
          <i area-hidden="true" className="coffee blue small icon" />
          <br/>
        Welcome !
      </Header>
  )
}

export default WelcomePage
